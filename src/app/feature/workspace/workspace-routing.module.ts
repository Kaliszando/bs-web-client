import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkspaceComponent } from "./workspace.component";
import { TestContentComponent } from "./test-content/test-content.component";
import { InitContextResolver } from "../../core/resolver/init-context-resolver";
import { BacklogContentComponent } from "./backlog-content/backlog-content.component";
import { TasksContentComponent } from "./tasks-content/tasks-content.component";
import { BoardContentComponent } from "./board-content/board-content.component";
import { ProjectsContentComponent } from "./projects-content/projects-content.component";
import { ProjectListComponent } from "./projects-content/project-list/project-list.component";
import { ProjectConfigComponent } from "./projects-content/project-config/project-config.component";
import { AuthorizedGuard } from "../../core/guard/authorized.guard";
import { ProjectsInfoResolver } from "../../core/resolver/projects-info.resolver";
import { TasksListComponent } from "./tasks-content/tasks-list/tasks-list.component";
import { TasksConfigComponent } from "./tasks-content/tasks-config/tasks-config.component";

const routes: Routes = [
  // { path: '', redirectTo: 'projects' },
  { path: '', redirectTo: 'tasks' },

  { path: '', component: WorkspaceComponent, canActivate: [AuthorizedGuard],
    resolve: { context: InitContextResolver, projects: ProjectsInfoResolver },
    children: [
      { path: 'test', component: TestContentComponent },
      { path: 'backlog', component: BacklogContentComponent },
      { path: 'tasks', component: TasksContentComponent,
        children: [
          { path: '', redirectTo: 'list' },
          { path: 'list', component: TasksListComponent },
          { path: 'config', component: TasksConfigComponent }
        ]
      },
      { path: 'board', component: BoardContentComponent },
      { path: 'projects', component: ProjectsContentComponent,
        resolve: { projects: ProjectsInfoResolver },
        children: [
          { path: '', redirectTo: 'list' },
          { path: 'list', component: ProjectListComponent },
          { path: 'config', component: ProjectConfigComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule { }
