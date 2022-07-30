import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './workspace.component';
import { CoreModule } from "../../core/core.module";
import { TestContentComponent } from './test-content/test-content.component';
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { SharedModule } from "../../shared/shared.module";
import { BoardContentComponent } from './board-content/board-content.component';
import { TasksContentComponent } from './tasks-content/tasks-content.component';
import { BacklogContentComponent } from './backlog-content/backlog-content.component';
import { ProjectsContentComponent } from './projects-content/projects-content.component';
import { ProjectListComponent } from './projects-content/project-list/project-list.component';
import { MatTabsModule } from "@angular/material/tabs";
import { ProjectConfigComponent } from './projects-content/project-config/project-config.component';
import { MatExpansionModule } from "@angular/material/expansion";
import { TasksListComponent } from './tasks-content/tasks-list/tasks-list.component';
import { TasksConfigComponent } from './tasks-content/tasks-config/tasks-config.component';


@NgModule({
  declarations: [
    WorkspaceComponent,
    TestContentComponent,
    BoardContentComponent,
    TasksContentComponent,
    BacklogContentComponent,
    ProjectsContentComponent,
    ProjectListComponent,
    ProjectConfigComponent,
    TasksListComponent,
    TasksConfigComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        CoreModule,
        WorkspaceRoutingModule,
        MatDividerModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatTabsModule,
        MatExpansionModule,
    ]
})
export class WorkspaceModule { }
