import { Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { MatFormField } from "@angular/material/form-field";
import { IssueSeverity } from "../../../api/models/issue-severity";

@Component({
  selector: 'bs-issue-severity-multi-selector',
  templateUrl: 'issue-severity-multi-selector.component.html',
  styleUrls: ['issue-severity-multi-selector.component.scss']
})
export class IssueSeverityMultiSelectorComponent {

  @ViewChildren(MatFormField)
  formFields: QueryList<MatFormField> = {} as QueryList<MatFormField>;

  @Input()
  selectedSeverities: IssueSeverity[] = [];
  @Output()
  selectedSeveritiesChange: EventEmitter<IssueSeverity[]> = new EventEmitter<IssueSeverity[]>()

  @Input()
  preview: boolean = true

  @Input()
  required: boolean = true

  severities: string[] = ['BLOCKER','CRITICAL','MAJOR','NORMAL','MINOR','TRIVIAL']

  onSelect() {
    this.selectedSeveritiesChange.emit(this.selectedSeverities);
  }
}
