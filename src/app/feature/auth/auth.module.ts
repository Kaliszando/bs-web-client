import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { MatButtonModule } from "@angular/material/button";
import { SharedModule } from "../../shared/shared.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "../../core/service/auth.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { SignInFormComponent } from './sign-in-page/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './sign-in-page/sign-up-form/sign-up-form.component';
import { IntroContentComponent } from './sign-in-page/intro-content/intro-content.component';


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
    ],
  providers: [
    AuthService,
  ]
})
export class AuthModule { }
