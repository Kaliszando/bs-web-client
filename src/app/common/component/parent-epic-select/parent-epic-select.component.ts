import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IssueDetailsDto } from "../../../api/models/issue-details-dto";

@Component({
  selector: 'bs-parent-epic-select',
  templateUrl: './parent-epic-select.component.html',
  styleUrls: ['./parent-epic-select.component.scss']
})
export class ParentEpicSelectComponent implements OnInit {

  @Input()
  preview: boolean = true

  @Input()
  dataModel: IssueDetailsDto = {} as IssueDetailsDto
  @Output()
  dataModelChange: EventEmitter<IssueDetailsDto> = new EventEmitter<IssueDetailsDto>()

  selectedEpic?: string = undefined
  epics: Set<string> = new Set<string>(['epic1', 'epic2', 'epic3', 'epic4'])


  constructor() { }

  ngOnInit(): void {
    this.selectedEpic = this.dataModel.epicName
  }

  onSelect() {
    this.dataModel.epicName = this.selectedEpic
  }
}
