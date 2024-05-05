import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectInfoDto } from "../../api/models/project-info-dto";
import { StoreService } from "../service/store.service";

@Injectable({
  providedIn: 'root'
})
export class ProjectContextResolver implements Resolve<ProjectInfoDto[]> {

  constructor(private store: StoreService) {
  }

  resolve(): Observable<ProjectInfoDto[]> {
    return this.store.reloadProjects();
  }
}
