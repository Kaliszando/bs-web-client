import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectEndpointService } from "../../api/services/project-endpoint.service";
import { ProjectInfoDto } from "../../api/models/project-info-dto";

@Injectable({
  providedIn: 'root'
})
export class ProjectsInfoResolver implements Resolve<ProjectInfoDto[]> {

  constructor(private projectEndpointService: ProjectEndpointService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProjectInfoDto[]> {
    return this.projectEndpointService.getProjects();
  }
}
