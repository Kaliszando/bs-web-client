import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from "rxjs";
import { UserInfoDto } from "../../api/models/user-info-dto";
import { ProjectInfoDto } from "../../api/models/project-info-dto";
import { ProjectEndpointService } from "../../api/services/project-endpoint.service";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  sessionToken$: ReplaySubject<string> = new ReplaySubject<string>(1)

  isAuthorized$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1)

  selectedProject$: ReplaySubject<ProjectInfoDto> = new ReplaySubject<ProjectInfoDto>(1)

  selectedProjectValue: ProjectInfoDto = {} as ProjectInfoDto

  availableProjects$: ReplaySubject<ProjectInfoDto[]> = new ReplaySubject<ProjectInfoDto[]>(1)

  userContext$: ReplaySubject<UserInfoDto> = new ReplaySubject<UserInfoDto>(1)

  private issuesReloaded$: ReplaySubject<void> = new ReplaySubject<void>(1)

  private currentProject$: BehaviorSubject<ProjectInfoDto> = new BehaviorSubject<ProjectInfoDto>({} as ProjectInfoDto);

  public getIssuesReloaded$(): Observable<void> {
    return this.issuesReloaded$.asObservable();
  }

  public getCurrentProject$(): Observable<ProjectInfoDto> {
    return this.currentProject$.asObservable();
  }

  public setCurrentProject(project: ProjectInfoDto): void {
    this.currentProject$.next(project);
  }

  constructor(private projectEndpoint: ProjectEndpointService) {
    this.issuesReloadedUpdate()
  }

  issuesReloadedUpdate() {
    this.issuesReloaded$.next()
  }

  setSessionToken(token: string | null) {

    if (token != null) {
      this.sessionToken$.next(token)
      this.isAuthorized$.next(true)
    }
  }

  reloadProjects() {
    this.projectEndpoint.getProjects().subscribe(
      newProjects => {
        this.availableProjects$.next(newProjects)
        this.selectedProject$.next(newProjects[0])
        this.selectedProjectValue = newProjects[0]
        this.issuesReloadedUpdate()
      }
    )
  }
}
