import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from "../../core/guard/authorized.guard";
import { TaskConfigManageGuard } from "../../core/guard/task-config-manage.guard";
import { TaskDetailsViewGuard } from "../../core/guard/task-details-view.guard";
import { TaskListViewGuard } from "../../core/guard/task-list-view-guard.service";
import { InitContextResolver } from "../../core/resolver/init-context-resolver";
import { TestContentComponent } from "./admin/test-content.component";
import { BacklogConfigComponent } from "./backlog-content/backlog-config/backlog-config.component";
import { BacklogContentComponent } from "./backlog-content/backlog-content.component";
import { BacklogListComponent } from "./backlog-content/backlog-list/backlog-list.component";
import { BoardContentComponent } from "./board-content/board-content.component";
import { KanbanBoardConfigComponent } from "./board-content/kanban-board-config/kanban-board-config.component";
import { KanbanBoardComponent } from "./board-content/kanban-board/kanban-board.component";
import { ProjectConfigComponent } from "./projects-content/project-config/project-config.component";
import { ProjectListComponent } from "./projects-content/project-list/project-list.component";
import { ProjectsContentComponent } from "./projects-content/projects-content.component";
import { ReportsContentComponent } from "./reports/reports-content.component";
import { ReportsSummaryComponent } from "./reports/reports-summary/reports-summary.component";
import { TaskDetailsComponent } from "./tasks-content/task-details/task-details.component";
import { TasksConfigComponent } from "./tasks-content/tasks-config/tasks-config.component";
import { TasksContentComponent } from "./tasks-content/tasks-content.component";
import { TasksListComponent } from "./tasks-content/tasks-list/tasks-list.component";
import { WorkspaceComponent } from "./workspace.component";

const routes: Routes = [
  { path: '', redirectTo: 'projects' },
  {
    path: '', component: WorkspaceComponent, canActivate: [AuthorizedGuard],
    resolve: { context: InitContextResolver },
    children: [
      {
        path: 'tasks', component: TasksContentComponent,
        children: [
          { path: 'list', component: TasksListComponent, canActivate: [TaskListViewGuard] },
          { path: 'config', component: TasksConfigComponent, canActivate: [TaskConfigManageGuard] },
          { path: 'details/:id', component: TaskDetailsComponent, canActivate: [TaskDetailsViewGuard] },
          { path: '', redirectTo: 'list' }
        ]
      },
      {
        path: 'backlog', component: BacklogContentComponent,
        children: [
          { path: 'list', component: BacklogListComponent },
          { path: 'config', component: BacklogConfigComponent },
          { path: '', redirectTo: 'list' }
        ]
      },
      {
        path: 'board', component: BoardContentComponent,
        children: [
          { path: 'kanban', component: KanbanBoardComponent },
          { path: 'config', component: KanbanBoardConfigComponent },
          { path: '', redirectTo: 'kanban' }
        ]
      },
      {
        path: 'projects', component: ProjectsContentComponent,
        children: [
          { path: 'list', component: ProjectListComponent },
          { path: 'config', component: ProjectConfigComponent },
          { path: '', redirectTo: 'list' }
        ]
      },
      {
        path: 'reports', component: ReportsContentComponent,
        children: [
          { path: 'summary', component: ReportsSummaryComponent },
          { path: '', redirectTo: 'summary' }
        ]
      },
      { path: 'test', component: TestContentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule {
}
