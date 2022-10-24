import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { ProjectInfoDto } from "../../../api/models/project-info-dto";
import { StoreService } from "../../../core/service/store.service";
import { MatFormField } from "@angular/material/form-field";
import { IssueDetailsDto } from "../../../api/models/issue-details-dto";

@Component({
  selector: 'bs-project-selector',
  templateUrl: './project-selector.component.html',
  styleUrls: ['./project-selector.component.scss']
})
export class ProjectSelectorComponent implements OnInit {

  @ViewChildren(MatFormField)
  formFields: QueryList<MatFormField> = {} as QueryList<MatFormField>;

  @Input()
  dataModel: IssueDetailsDto = {} as IssueDetailsDto
  @Output()
  dataModelChange: EventEmitter<IssueDetailsDto> = new EventEmitter<IssueDetailsDto>()

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
        this.dataModel.projectId = selected.id
      }
    })
    this.store.availableProjects$.subscribe({
      next: projects => {
        this.availableProjects = projects
      }
    })
  }

  onSelect() {
    this.dataModel.projectId = this.selectedProject.id
  }
}
