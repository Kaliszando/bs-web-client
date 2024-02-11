import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IssueDetailsDto } from "../../../api/models/issue-details-dto";

@Component({
  selector: 'bs-labels-input',
  templateUrl: './labels-input.component.html',
  styleUrls: ['./labels-input.component.scss']
})
export class LabelsInputComponent implements OnInit {

  @Input()
  dataModel: IssueDetailsDto = {} as IssueDetailsDto
  @Output()
  dataModelChange: EventEmitter<IssueDetailsDto> = new EventEmitter<IssueDetailsDto>()

  labels: Set<string> = new Set<string>()
  inputValue: string = ''

  constructor() { }

  ngOnInit(): void {
    this.labels = new Set(this.dataModel.labels)
  }

  remove(label: string) {
    this.labels.delete(label)
    this.updateDataModel()
  }

  add() {
    if (this.labels.has(this.inputValue) || this.inputValue === '') return
    this.labels.add(this.inputValue.trim())
    this.inputValue = ''
    this.updateDataModel()
  }

  updateDataModel() {
    this.dataModel.labels = Array.from(this.labels.values())
  }
}
