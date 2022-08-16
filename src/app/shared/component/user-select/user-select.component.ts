import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IssueDetailsDto } from "../../../api/models/issue-details-dto";
import { UserInfoDto } from "../../../api/models/user-info-dto";

@Component({
  selector: 'bs-user-select',
  templateUrl: './user-select.component.html',
  styleUrls: ['./user-select.component.scss']
})
export class UserSelectComponent implements OnInit {

  @Input()
  dataModel: IssueDetailsDto = {} as IssueDetailsDto
  @Output()
  dataModelChange: EventEmitter<IssueDetailsDto> = new EventEmitter<IssueDetailsDto>()

  assignee?: string = undefined
  users: string[] = ['user1', 'user2', 'user3']

  ngOnInit(): void {
    this.assignee = this.dataModel.assignee?.username
  }

  inputChange() {
    this.dataModel.assignee = { username: this.assignee } as UserInfoDto
  }
}
