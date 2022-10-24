import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorTemplateComponent } from "./feature/error/error-template/error-template.component";


const routes: Routes = [
  { path: 'main', loadChildren: () => import('./feature/workspace/workspace.module').then(m => m.WorkspaceModule)},
  { path: 'auth', loadChildren: () => import('./feature/auth/auth.module').then(m => m.AuthModule)},
  { path: 'error', loadChildren: () => import('./feature/error/error.module').then(m => m.ErrorModule)},
  { path: '', redirectTo: '/auth/sign-in', pathMatch: 'full' },
  { path: '**', component: ErrorTemplateComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
