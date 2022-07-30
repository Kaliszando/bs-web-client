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
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatChipsModule } from "@angular/material/chips";
import { CreateIssueDialogComponent } from './dialog/create-issue-dialog/create-issue-dialog.component';
import { MatGridListModule } from "@angular/material/grid-list";
import { ProjectSelectorComponent } from './component/project-selector/project-selector.component';
import { IssueTypeSelectorComponent } from './component/issue-type-selector/issue-type-selector.component';
import { LabelsInputComponent } from './component/labels-input/labels-input.component';
import { IssueSeveritySelectorComponent } from './component/issue-severity-selector/issue-severity-selector.component';
import { MatSelectModule } from "@angular/material/select";
import { IssueTypeIconComponent } from './component/issue-type-icon/issue-type-icon.component';
import { IssueSeverityIconComponent } from './component/issue-severity-icon/issue-severity-icon.component';


@NgModule({
  declarations: [
    LanguageToggleComponent,
    CreateProjectDialogComponent,
    CreateIssueDialogComponent,
    ProjectSelectorComponent,
    IssueTypeSelectorComponent,
    LabelsInputComponent,
    IssueSeveritySelectorComponent,
    IssueTypeIconComponent,
    IssueSeverityIconComponent,
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
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatGridListModule,
    MatSelectModule
  ]
})
export class SharedModule { }
