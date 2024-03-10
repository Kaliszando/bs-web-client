import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { MatFormField } from "@angular/material/form-field";
import { IssueDetailsDto } from "../../../api/models/issue-details-dto";
import { IssueType } from "../../../api/models/issue-type";

@Component({
  selector: 'bs-issue-type-selector',
  templateUrl: './issue-type-selector.component.html',
  styleUrls: ['./issue-type-selector.component.scss']
})
export class IssueTypeSelectorComponent implements OnInit {

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
  selectedType: IssueType = { issueType: undefined }

  @Output()
  selectedTypeChange: EventEmitter<IssueType> = new EventEmitter<IssueType>()

  types: string[] = ['EPIC','TASK','SUBTASK','BUG','ENHANCEMENT']

  ngOnInit(): void {
    this.selectedType = this.dataModel
  }

  onSelect() {
    this.dataModel = this.selectedType
    this.selectedTypeChange.emit(this.selectedType);
  }
}
