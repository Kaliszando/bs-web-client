import { NgxMatFileInputModule } from "@angular-material-components/file-input";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatChipsModule } from "@angular/material/chips";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { TranslateModule } from "@ngx-translate/core";
import { AvatarComponent } from './component/avatar/avatar.component';
import { BacklogListSelectComponent } from './component/backlog-list-select/backlog-list-select.component';
import { CodeVersionSelectComponent } from './component/code-version-select/code-version-select.component';
import { ComponentsInputComponent } from './component/components-input/components-input.component';
import { EpicLabelComponent } from './component/epic-label/epic-label.component';
import { FileAttachmentSelectComponent } from './component/file-attachment-select/file-attachment-select.component';
import { IssueSeverityIconComponent } from './component/issue-severity-icon/issue-severity-icon.component';
import { IssueSeveritySelectorComponent } from './component/issue-severity-selector/issue-severity-selector.component';
import { IssueTypeIconComponent } from './component/issue-type-icon/issue-type-icon.component';
import { IssueTypeSelectorComponent } from './component/issue-type-selector/issue-type-selector.component';
import { LabelsInputComponent } from './component/labels-input/labels-input.component';
import { LabelsComponent } from './component/labels/labels.component';
import { LanguageToggleComponent } from './component/language-toggle/language-toggle.component';
import { ParentEpicSelectComponent } from './component/parent-epic-select/parent-epic-select.component';
import { ProjectSelectorComponent } from './component/project-selector/project-selector.component';
import { StatusChipComponent } from './component/status-chip/status-chip.component';
import { UserSelectComponent } from './component/user-select/user-select.component';
import { CreateIssueDialogComponent } from './dialog/create-issue-dialog/create-issue-dialog.component';
import { CreateProjectDialogComponent } from './dialog/create-project-dialog/create-project-dialog.component';


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
    AvatarComponent,
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
    AvatarComponent,
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
export class SharedModule {
}
