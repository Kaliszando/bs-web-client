import { A11yModule } from "@angular/cdk/a11y";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { SharedModule } from "../../common/shared.module";
import { AuthRoutingModule } from './auth-routing.module';
import { IntroContentComponent } from './sign-in-page/intro-content/intro-content.component';
import { SignInFormComponent } from './sign-in-page/sign-in-form/sign-in-form.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpFormComponent } from './sign-in-page/sign-up-form/sign-up-form.component';

@NgModule({
  declarations: [
    SignInPageComponent,
    SignInFormComponent,
    SignUpFormComponent,
    IntroContentComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    A11yModule,
    MatProgressSpinnerModule,
  ]
})
export class AuthModule {
}
