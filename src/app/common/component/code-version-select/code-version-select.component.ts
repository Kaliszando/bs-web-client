import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IssueDetailsDto } from "../../../api/models/issue-details-dto";

@Component({
  selector: 'bs-code-version-select',
  templateUrl: './code-version-select.component.html',
  styleUrls: ['./code-version-select.component.scss']
})
export class CodeVersionSelectComponent implements OnInit {

  @Input()
  dataModel: IssueDetailsDto = {} as IssueDetailsDto
  @Output()
  dataModelChange: EventEmitter<IssueDetailsDto> = new EventEmitter<IssueDetailsDto>()

  version?: string = undefined
  options: string[] = ['BS_1.2', 'BS_1.0', 'BS_1.1']

  constructor() { }

  ngOnInit(): void {
    this.version = this.dataModel.codeVersion
  }

  inputChange() {
    this.dataModel.codeVersion = this.version
  }
}
