import { Component, OnInit } from '@angular/core';
import { IssueEndpointService } from "../../../../api/services/issue-endpoint.service";
import { StoreService } from "../../../../core/service/store.service";
import { IssueInfoDto } from "../../../../api/models/issue-info-dto";
import { ListFilter } from "./filter/list-filter";

@Component({
  selector: 'bs-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

  issues: IssueInfoDto[] = {} as IssueInfoDto[]
  paged: IssueInfoDto[] = {} as IssueInfoDto[]
  filter: ListFilter = {} as ListFilter;
  noIssues = true
  expanded: boolean = false
  statuses: string[] = ['None', 'to do', 'in progress', 'done', 'testing']

  constructor(private issueEndpoint: IssueEndpointService,
              private store: StoreService) { }

  ngOnInit(): void {
    this.store.getIssuesReloaded$().subscribe(() =>
      this.updateIssues()
    )
    this.filter.query = '';
  }

  updateIssues() {
    this.store.getSelectedProject$().subscribe(project => {
      if (project.id) {
        this.issueEndpoint.getAllIssuesByProjectId({ projectId: project.id })
          .subscribe(issues => {
            this.issues = issues
            this.noIssues = false
            this.paged = issues;
            this.filterChange()
          })
      }
    })
  }

  removeIssue(removedIssue: IssueInfoDto) {
    if (removedIssue.id) {
      // this.issues = this.issues.filter(issue => issue.id !== removedIssue.id)
    }
  }

  filterChange() {
    this.paged = this.issues.filter(issue => issue.tagId?.toLowerCase().includes(this.filter.query.toLowerCase())
      || issue.name?.toLowerCase().includes(this.filter.query.toLowerCase()));
    if (this.filter.type !== undefined) {
      this.paged = this.paged.filter(issue => issue.issueType === this.filter.type);
    }
    if (this.filter.severity !== undefined) {
      this.paged = this.paged.filter(issue => issue.issueSeverity === this.filter.severity);
    }
    if (this.filter.status !== 'None' && this.filter.status !== undefined) {
      this.paged = this.paged.filter(issue => issue.status === this.filter.status);
    }
  }

}
