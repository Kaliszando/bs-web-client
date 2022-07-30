import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { ProjectInfoDto } from "../../../api/models/project-info-dto";
import { StoreService } from "../../../core/service/store.service";

@Component({
  selector: 'bs-create-issue-dialog',
  templateUrl: './create-issue-dialog.component.html',
  styleUrls: ['./create-issue-dialog.component.scss']
})
export class CreateIssueDialogComponent implements OnInit {

  selectedProject: ProjectInfoDto = {} as ProjectInfoDto
  availableProjects: ProjectInfoDto[] = [] as ProjectInfoDto[]
  expanded: boolean = false

  constructor(private dialogRef: MatDialogRef<CreateIssueDialogComponent>,
              private store: StoreService) { }

  ngOnInit(): void {
    this.store.selectedProject$.subscribe({
      next: selected => this.selectedProject = selected
    })
    this.store.availableProjects$.subscribe({
      next: projects => this.availableProjects = projects
    })
  }

  onCreateIssue() {
    if (!this.isFormValid()) return
    this.dialogRef.close()
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  isFormValid(): boolean {
    return true;
  }
}
