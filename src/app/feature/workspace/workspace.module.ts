import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './workspace.component';
import { CoreModule } from "../../core/core.module";
import { TestContentComponent } from './admin/test-content.component';
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
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { BacklogListComponent } from './backlog-content/backlog-list/backlog-list.component';
import { BacklogConfigComponent } from './backlog-content/backlog-config/backlog-config.component';
import { KanbanBoardComponent } from './board-content/kanban-board/kanban-board.component';
import { KanbanBoardConfigComponent } from './board-content/kanban-board-config/kanban-board-config.component';
import { TaskDetailsComponent } from './tasks-content/task-details/task-details.component';
import { ReportsContentComponent } from './reports/reports-content.component';
import { ReportsSummaryComponent } from './reports/reports-summary/reports-summary.component';
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { FormsModule } from "@angular/forms";


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
    TasksConfigComponent,
    BacklogListComponent,
    BacklogConfigComponent,
    KanbanBoardComponent,
    KanbanBoardConfigComponent,
    TaskDetailsComponent,
    ReportsContentComponent,
    ReportsSummaryComponent
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
        MatPaginatorModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        NgxChartsModule,
        DragDropModule,
        FormsModule,
    ]
})
export class WorkspaceModule { }
