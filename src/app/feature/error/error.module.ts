import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorTemplateComponent } from './error-template/error-template.component';
import { ErrorRoutingModule } from "./error-routing.module";


@NgModule({
  declarations: [
    ErrorTemplateComponent
  ],
  imports: [
    CommonModule,
    ErrorRoutingModule
  ]
})
export class ErrorModule { }
