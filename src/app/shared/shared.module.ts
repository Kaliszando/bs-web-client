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
import { ComponentsInputComponent } from './component/components-input/components-input.component';
import { CodeVersionSelectComponent } from './component/code-version-select/code-version-select.component';
import { UserSelectComponent } from './component/user-select/user-select.component';
import { BacklogListSelectComponent } from './component/backlog-list-select/backlog-list-select.component';
import { FileAttachmentSelectComponent } from './component/file-attachment-select/file-attachment-select.component';
import { ParentEpicSelectComponent } from './component/parent-epic-select/parent-epic-select.component';
import { NgxMatFileInputModule } from "@angular-material-components/file-input";
import { EpicLabelComponent } from './component/epic-label/epic-label.component';
import { LabelsComponent } from './component/labels/labels.component';
import { StatusChipComponent } from './component/status-chip/status-chip.component';


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
    ComponentsInputComponent,
    CodeVersionSelectComponent,
    UserSelectComponent,
    BacklogListSelectComponent,
    FileAttachmentSelectComponent,
    ParentEpicSelectComponent,
    EpicLabelComponent,
    LabelsComponent,
    StatusChipComponent,
  ],
    exports: [
        LanguageToggleComponent,
        TranslateModule,
        IssueTypeSelectorComponent,
        IssueSeveritySelectorComponent,
        IssueTypeIconComponent,
        IssueSeverityIconComponent,
        EpicLabelComponent,
        LabelsComponent,
        StatusChipComponent,
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
    MatSelectModule,
    NgxMatFileInputModule
  ]
})
export class SharedModule { }
