import { Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { MatFormField } from "@angular/material/form-field";
import { IssueType } from "../../../api/models/issue-type";

@Component({
  selector: 'bs-issue-type-multi-selector',
  templateUrl: 'issue-type-multi-selector.component.html',
  styleUrls: ['issue-type-multi-selector.component.scss']
})
export class IssueTypeMultiSelectorComponent {

  @ViewChildren(MatFormField)
  formFields: QueryList<MatFormField> = {} as QueryList<MatFormField>;

  @Input()
  preview: boolean = true
  @Input()
  required: boolean = true

  @Input()
  selectedTypes: IssueType[] = []

  @Output()
  selectedTypesChange: EventEmitter<IssueType[]> = new EventEmitter<IssueType[]>()

  types: string[] = ['EPIC','TASK','SUBTASK','BUG','ENHANCEMENT']

  onSelect() {
    this.selectedTypesChange.emit(this.selectedTypes);
  }
}
