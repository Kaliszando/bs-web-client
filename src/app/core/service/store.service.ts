import { Injectable } from '@angular/core';
import { ReplaySubject } from "rxjs";
import { UserInfoDto } from "../../api/models/user-info-dto";
import { ProjectInfoDto } from "../../api/models/project-info-dto";
import { ProjectEndpointService } from "../../api/services/project-endpoint.service";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  sessionToken$: ReplaySubject<string> = new ReplaySubject<string>()

  isAuthorized$: ReplaySubject<boolean> = new ReplaySubject<boolean>()

  selectedProject$: ReplaySubject<ProjectInfoDto> = new ReplaySubject<ProjectInfoDto>()

  availableProjects$: ReplaySubject<ProjectInfoDto[]> = new ReplaySubject<ProjectInfoDto[]>()

  userContext$: ReplaySubject<UserInfoDto> = new ReplaySubject<UserInfoDto>()

  constructor(private projectEndpoint: ProjectEndpointService) {
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
