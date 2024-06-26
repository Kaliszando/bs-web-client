import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectInfoDto } from "../../api/models/project-info-dto";
import { ProjectEndpointService } from "../../api/services/project-endpoint.service";

@Injectable({
  providedIn: 'root'
})
export class ProjectsInfoResolver implements Resolve<ProjectInfoDto[]> {

  constructor(private projectEndpointService: ProjectEndpointService) {
  }

  resolve(): Observable<ProjectInfoDto[]> {
    return this.projectEndpointService.getProjects();
  }
}
