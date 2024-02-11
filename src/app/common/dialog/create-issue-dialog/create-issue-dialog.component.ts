import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ProjectInfoDto } from "../../../api/models/project-info-dto";
import { StoreService } from "../../../core/service/store.service";
import { IssueDetailsDto } from "../../../api/models/issue-details-dto";

@Component({
  selector: 'bs-create-issue-dialog',
  templateUrl: './create-issue-dialog.component.html',
  styleUrls: ['./create-issue-dialog.component.scss']
})
export class CreateIssueDialogComponent implements OnInit {

  selectedProject: ProjectInfoDto = {} as ProjectInfoDto
  availableProjects: ProjectInfoDto[] = [] as ProjectInfoDto[]
  expanded: boolean = false

  dataModel: IssueDetailsDto = {} as IssueDetailsDto

  constructor(private dialogRef: MatDialogRef<CreateIssueDialogComponent>,
              private store: StoreService,
              @Inject(MAT_DIALOG_DATA) data: IssueDetailsDto) {
    this.dataModel = data
  }

  ngOnInit(): void {
    this.store.getSelectedProject$().subscribe({
      next: selected => this.selectedProject = selected
    })
    this.store.availableProjects$.subscribe({
      next: projects => this.availableProjects = projects
    })
  }

  onCreateIssue() {
    if (!this.isFormValid()) return
    this.dialogRef.close(this.dataModel)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  isFormValid(): boolean {
    return !!this.dataModel.name;
  }
}
