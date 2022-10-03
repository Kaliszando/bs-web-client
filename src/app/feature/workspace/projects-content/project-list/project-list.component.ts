import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import {
  CreateProjectDialogComponent
} from "../../../../shared/dialog/create-project-dialog/create-project-dialog.component";
import { StoreService } from "../../../../core/service/store.service";
import { ProjectInfoDto } from "../../../../api/models/project-info-dto";

@Component({
  selector: 'bs-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projectsList: ProjectInfoDto[] = [] as ProjectInfoDto[];
  noProjects: boolean = true;

  constructor(public dialog: MatDialog,
              private store: StoreService) {}

  ngOnInit(): void {
    this.store.availableProjects$.subscribe(
      projects => {
        this.projectsList = projects
        this.noProjects = projects === undefined
                          || projects.length === 0
      }
    )
  }

  openDialog(): void {
    this.dialog.open(CreateProjectDialogComponent, {
      width: 'max-content'
    });
  }
}
