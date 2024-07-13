import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { MatFormField } from "@angular/material/form-field";
import { IssueDetailsDto } from "../../../api/models/issue-details-dto";
import { IssueSeverity } from "../../../api/models/issue-severity";

@Component({
  selector: 'bs-issue-severity-selector',
  templateUrl: './issue-severity-selector.component.html',
  styleUrls: ['./issue-severity-selector.component.scss']
})
export class IssueSeveritySelectorComponent implements OnInit {

  @ViewChildren(MatFormField)
  formFields: QueryList<MatFormField> = {} as QueryList<MatFormField>;

  @Input()
  dataModel: IssueDetailsDto = {} as IssueDetailsDto
  @Output()
  dataModelChange: EventEmitter<IssueDetailsDto> = new EventEmitter<IssueDetailsDto>()

  @Input()
  preview: boolean = true
  @Input()
  required: boolean = true

  @Input()
  selectedSeverity?: IssueSeverity = 'NORMAL' as IssueSeverity;

  @Output()
  selectedSeverityChange: EventEmitter<IssueSeverity> = new EventEmitter<IssueSeverity>()

  severities: string[] = ['BLOCKER','CRITICAL','MAJOR','NORMAL','MINOR','TRIVIAL']

  ngOnInit(): void {
    this.selectedSeverity = this.dataModel.severity;
  }

  onSelect() {
    this.dataModel.severity = this.selectedSeverity
    this.selectedSeverityChange.emit(this.selectedSeverity);
  }
}
