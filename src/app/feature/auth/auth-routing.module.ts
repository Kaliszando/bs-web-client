import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInPageComponent } from "./sign-in-page/sign-in-page.component";
import { SignInFormComponent } from "./sign-in-page/sign-in-form/sign-in-form.component";
import { SignUpFormComponent } from "./sign-in-page/sign-up-form/sign-up-form.component";


const routes: Routes = [
  { path: '', redirectTo: 'sign-in' },
  { path: '', component: SignInPageComponent,
    children: [
      { path: 'sign-in', component: SignInFormComponent },
      { path: 'sign-up', component: SignUpFormComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
