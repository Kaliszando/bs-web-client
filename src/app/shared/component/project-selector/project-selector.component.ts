import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ProjectInfoDto } from "../../../api/models/project-info-dto";
import { StoreService } from "../../../core/service/store.service";
import { MatFormField } from "@angular/material/form-field";

@Component({
  selector: 'bs-project-selector',
  templateUrl: './project-selector.component.html',
  styleUrls: ['./project-selector.component.scss']
})
export class ProjectSelectorComponent implements OnInit {

  @ViewChildren(MatFormField)
  formFields: QueryList<MatFormField> = {} as QueryList<MatFormField>;

  selectedProject: ProjectInfoDto = {} as ProjectInfoDto
  availableProjects: ProjectInfoDto[] = [] as ProjectInfoDto[]

  constructor(private store: StoreService) { }

  ngAfterViewInit(): void {
    setTimeout(() => this.formFields.forEach(ff => ff.updateOutlineGap()), 100);
  }

  ngOnInit(): void {
    this.store.selectedProject$.subscribe({
      next: selected => {
        this.selectedProject = selected
      }
    })
    this.store.availableProjects$.subscribe({
      next: projects => {
        this.availableProjects = projects
      }
    })
  }
}
