import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkspaceComponent } from "./workspace.component";
import { TestContentComponent } from "./test-content/test-content.component";
import { InitContextResolver } from "../../core/resolver/init-context-resolver.service";
import { BacklogContentComponent } from "./backlog-content/backlog-content.component";
import { ListContentComponent } from "./list-content/list-content.component";
import { BoardContentComponent } from "./board-content/board-content.component";
import { ProjectsContentComponent } from "./projects-content/projects-content.component";
import { ProjectListComponent } from "./projects-content/project-list/project-list.component";
import { ProjectConfigComponent } from "./projects-content/project-config/project-config.component";
import { AuthorizedGuard } from "../../core/guard/authorized.guard";

const routes: Routes = [
  { path: '', redirectTo: 'projects/list' },
  { path: 'projects', redirectTo: 'projects/list' },
  { path: '', component: WorkspaceComponent, resolve: { userContext: InitContextResolver }, canActivate: [AuthorizedGuard],
    children: [
      { path: 'test', component: TestContentComponent },
      { path: 'backlog', component: BacklogContentComponent },
      { path: 'list', component: ListContentComponent },
      { path: 'board', component: BoardContentComponent },
      { path: 'projects', component: ProjectsContentComponent,
        children: [
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
