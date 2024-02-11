import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IssueDetailsDto } from "../../../api/models/issue-details-dto";

@Component({
  selector: 'bs-components-input',
  templateUrl: './components-input.component.html',
  styleUrls: ['./components-input.component.scss']
})
export class ComponentsInputComponent implements OnInit {

  @Input()
  dataModel: IssueDetailsDto = {} as IssueDetailsDto
  @Output()
  dataModelChange: EventEmitter<IssueDetailsDto> = new EventEmitter<IssueDetailsDto>()

  components: Set<string> = new Set<string>()
  inputValue: string = ''

  constructor() { }

  ngOnInit(): void {
    this.components = new Set<string>(this.dataModel.components)
  }

  remove(label: string) {
    this.components.delete(label)
    this.updateDataModel()
  }

  add() {
    if (this.components.has(this.inputValue) || this.inputValue === '') return
    this.components.add(this.inputValue.trim())
    this.inputValue = ''
    this.updateDataModel()
  }

  updateDataModel() {
    this.dataModel.components = Array.from(this.components.values())
  }
}
