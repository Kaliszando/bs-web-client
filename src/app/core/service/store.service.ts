import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject, Observable, tap } from "rxjs";
import { ProjectInfoDto } from "../../api/models/project-info-dto";
import { UserInfoDto } from "../../api/models/user-info-dto";
import { ProjectEndpointService } from "../../api/services/project-endpoint.service";
import { ContextData } from "../../api/models/context-data";

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
    if (this.selectedProject$.value?.id) {
      return this.selectedProject$.value.id;
    }
    throw new Error("No selected project or no defined projects for user");
  }

  setSessionToken(token: string | null): void {
    if (token != null) {
      this.sessionToken$.next(token)
      this.isAuthorized$.next(true)
    }
  }

  reloadProjects(): Observable<ProjectInfoDto[]> {
    return this.projectEndpoint.getProjects().pipe(
      tap(projects => {
        this.availableProjects$.next(projects)
        this.selectedProject$.next(projects[0])
      })
    )
  }

  applyContextData(context: ContextData) {
    this.userContext$.next(context.user)
    if (context.projects) {
      this.availableProjects$.next(context.projects)
      this.selectedProject$.next(context.projects[0])
    }
  }
}
