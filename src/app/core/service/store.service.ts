import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from "rxjs";
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

  issuesReloaded$: Subject<void> = new Subject<void>()

  constructor(private projectEndpoint: ProjectEndpointService) {
  }

  public getSelectedProjectId(): number {
    if (this.selectedProject$.value.id) {
      return this.selectedProject$.value.id;
    }
    throw new Error("No selected project");
  }

  setSessionToken(token: string | null): void {
    if (token != null) {
      this.sessionToken$.next(token)
      this.isAuthorized$.next(true)
    }
  }

  reloadProjects(): void {
    this.projectEndpoint.getProjects().subscribe(
      newProjects => {
        this.availableProjects$.next(newProjects)
        this.selectedProject$.next(newProjects[0])
      }
    )
  }
}
