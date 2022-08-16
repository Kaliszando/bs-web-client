import { Component, OnInit } from '@angular/core';
import { IssueInfoDto } from "../../../../api/models/issue-info-dto";
import { IssueEndpointService } from "../../../../api/services/issue-endpoint.service";
import { StoreService } from "../../../../core/service/store.service";

@Component({
  selector: 'bs-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {

  issues: IssueInfoDto[] = {} as IssueInfoDto[]
  columns: string[] = ['to do', 'in progress', 'testing', 'done'];

  constructor(private issueEndpoint: IssueEndpointService,
              private store: StoreService) { }

  ngOnInit(): void {
    this.store.issuesReloaded$.subscribe(() => {
        this.updateIssues()
      }
    )
  }

  updateIssues() {
    if (this.store.selectedProjectValue.id) {
      this.issueEndpoint.getAllIssuesByProjectId({projectId: this.store.selectedProjectValue.id}).subscribe(
        issues => {
          this.issues = issues
        }
      )
    }
  }

  capitalizeFirst(str: string) {
    if (str !== undefined && str !== '') {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
    return
  }

  prepareIssues(columnName: string): IssueInfoDto[] {
    return Object.values(this.issues).filter(value => value.status === columnName && value.issueType !== 'EPIC')
  }
}
