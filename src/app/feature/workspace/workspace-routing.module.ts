import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkspaceComponent } from "./workspace.component";
import { TestContentComponent } from "./test-content/test-content.component";

const routes: Routes = [
  { path: '', redirectTo: 'test' },
  { path: '', component: WorkspaceComponent,
    children: [
      { path: 'test', component: TestContentComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule { }
