import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from "rxjs";
import { ProjectInfoDto } from "../../api/models/project-info-dto";
import { UserInfoDto } from "../../api/models/user-info-dto";
import { ProjectEndpointService } from "../../api/services/project-endpoint.service";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  sessionToken$: Subject<string> = new ReplaySubject<string>(1)

  isAuthorized$: Subject<boolean> = new ReplaySubject<boolean>(1)

  availableProjects$: Subject<ProjectInfoDto[]> = new ReplaySubject<ProjectInfoDto[]>(1)

  userContext$: Subject<UserInfoDto> = new ReplaySubject<UserInfoDto>(1)

  selectedProject$: BehaviorSubject<ProjectInfoDto> = new BehaviorSubject<ProjectInfoDto>({} as ProjectInfoDto)

  public issuesReloaded$: ReplaySubject<void> = new ReplaySubject<void>(1)

  constructor(private projectEndpoint: ProjectEndpointService) {
    this.emitIssuesReloaded()
  }

  public emitIssuesReloaded() {
    this.issuesReloaded$.next()
  }

  public getSelectedProjectValue(): ProjectInfoDto {
    return this.selectedProject$.value;
  }

  public getSelectedProject$(): Observable<ProjectInfoDto> {
    return this.selectedProject$.asObservable();
  }

  public emitSelectedProject(project: ProjectInfoDto) {
    this.selectedProject$.next(project)
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
      }
    )
  }
}
