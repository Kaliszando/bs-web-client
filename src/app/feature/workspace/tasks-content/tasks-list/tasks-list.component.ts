import { Component, OnInit } from '@angular/core';
import { IssueEndpointService } from "../../../../api/services/issue-endpoint.service";
import { StoreService } from "../../../../core/service/store.service";
import { IssueInfoDto } from "../../../../api/models/issue-info-dto";

@Component({
  selector: 'bs-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

  issues: IssueInfoDto[] = {} as IssueInfoDto[]
  noIssues = true
  expanded: boolean = false
  statuses: string[] = ['to do', 'in progress', 'done', 'to test']

  constructor(private issueEndpoint: IssueEndpointService,
              private store: StoreService) { }

  ngOnInit(): void {
    this.store.issuesReloaded$.subscribe(() =>
      this.updateIssues()
    )
  }

  updateIssues() {
    this.store.selectedProject$.subscribe(project => {
      if (project.id) {
        this.issueEndpoint.getAllIssuesByProjectId({ projectId: project.id })
          .subscribe(issues => {
            this.issues = issues
            this.noIssues = false
          })
      }
    })
  }

  removeIssue(removedIssue: IssueInfoDto) {
    if (removedIssue.id) {
      this.issues = this.issues.filter(issue => issue.id !== removedIssue.id)
    }
  }
}
