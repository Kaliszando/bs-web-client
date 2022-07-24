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
import { ListContentComponent } from './list-content/list-content.component';
import { BacklogContentComponent } from './backlog-content/backlog-content.component';
import { ProjectsContentComponent } from './projects-content/projects-content.component';
import { ProjectListComponent } from './projects-content/project-list/project-list.component';
import { MatTabsModule } from "@angular/material/tabs";
import { ProjectConfigComponent } from './projects-content/project-config/project-config.component';
import { MatExpansionModule } from "@angular/material/expansion";


@NgModule({
  declarations: [
    WorkspaceComponent,
    TestContentComponent,
    BoardContentComponent,
    ListContentComponent,
    BacklogContentComponent,
    ProjectsContentComponent,
    ProjectListComponent,
    ProjectConfigComponent
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
