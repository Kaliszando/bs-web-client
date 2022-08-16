import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { MatFormField } from "@angular/material/form-field";
import { IssueDetailsDto } from "../../../api/models/issue-details-dto";

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
  selectedSeverity: string = 'BLOCKER'

  severities: string[] = ['BLOCKER','CRITICAL','MAJOR','NORMAL','MINOR','TRIVIAL']

  ngAfterViewInit(): void {
    setTimeout(() => this.formFields.forEach(ff => ff.updateOutlineGap()), 100);
  }

  ngOnInit(): void {
    this.selectedSeverity = this.dataModel.issueSeverity
  }

  onSelect() {
    // @ts-ignore
    this.dataModel.issueSeverity = this.selectedSeverity
  }
}
