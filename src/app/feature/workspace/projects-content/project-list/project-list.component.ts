import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import {
  CreateProjectDialogComponent
} from "../../../../shared/dialog/create-project-dialog/create-project-dialog.component";
import { Project } from "../../../../core/model/project";
import { StoreService } from "../../../../core/service/store.service";

@Component({
  selector: 'bs-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit{

  projects: Project[] = [];

  constructor(public dialog: MatDialog,
              private store: StoreService) {}

  ngOnInit(): void {
    this.store.availableProjects$.subscribe(
      projects => {
        this.projects = projects
      }
    )
  }

  openDialog(): void {
    const createProjectDialog = this.dialog.open(CreateProjectDialogComponent, {
      width: 'max-content',
      data: {
        name: 'project name',
        tag: 'hasda',
      }
    });

    createProjectDialog.afterClosed().subscribe(result => {
      // this.animal = result;
    });
  }
}
