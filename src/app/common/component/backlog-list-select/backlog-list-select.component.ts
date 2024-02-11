import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IssueDetailsDto } from "../../../api/models/issue-details-dto";

@Component({
  selector: 'bs-backlog-list-select',
  templateUrl: './backlog-list-select.component.html',
  styleUrls: ['./backlog-list-select.component.scss']
})
export class BacklogListSelectComponent implements OnInit {

  @Input()
  dataModel: IssueDetailsDto = {} as IssueDetailsDto
  @Output()
  dataModelChange: EventEmitter<IssueDetailsDto> = new EventEmitter<IssueDetailsDto>()

  listName?: string = 'backlog'
  lists: string[] = ['backlog', 'product', 'hold', 'legacy']

  constructor() { }

  ngOnInit(): void {
    this.listName = this.dataModel.location ? this.dataModel.location : 'backlog'
  }

  onSelect() {
    this.dataModel.location = this.listName
  }
}
