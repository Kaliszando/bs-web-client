import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageToggleComponent } from './component/language-toggle/language-toggle.component';
import { MatButtonModule } from "@angular/material/button";
import { TranslateModule } from "@ngx-translate/core";


@NgModule({
  declarations: [
    LanguageToggleComponent
  ],
  exports: [
    LanguageToggleComponent,
    TranslateModule,
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class SharedModule { }
