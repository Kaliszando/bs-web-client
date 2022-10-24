import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { MatFormField } from "@angular/material/form-field";
import { IssueDetailsDto } from "../../../api/models/issue-details-dto";

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
  selectedType: string = ''
  @Output()
  selectedTypeChange: EventEmitter<string> = new EventEmitter<string>()

  types: string[] = ['EPIC','TASK','SUBTASK','BUG','ENHANCEMENT']

  ngAfterViewInit(): void {
    setTimeout(() => this.formFields.forEach(ff => ff.updateOutlineGap()), 100);
  }

  ngOnInit(): void {
    let type = this.dataModel.issueType
    if (type)
      this.selectedType = type
  }

  onSelect() {
    // @ts-ignore
    this.dataModel.issueType = this.selectedType
    this.selectedTypeChange.emit(this.selectedType);
  }
}
