import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageToggleComponent } from './component/language-toggle/language-toggle.component';
import { MatButtonModule } from "@angular/material/button";
import { TranslateModule } from "@ngx-translate/core";
import { CreateProjectDialogComponent } from './dialog/create-project-dialog/create-project-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";


@NgModule({
  declarations: [
    LanguageToggleComponent,
    CreateProjectDialogComponent
  ],
  exports: [
    LanguageToggleComponent,
    TranslateModule,
  ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatDividerModule,
        MatIconModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
