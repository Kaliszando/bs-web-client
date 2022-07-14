import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'main', loadChildren: () => import('./feature/workspace/workspace.module').then(m => m.WorkspaceModule)},
  { path: 'auth', loadChildren: () => import('./feature/auth/auth.module').then(m => m.AuthModule)},
  { path: '', redirectTo: 'main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
