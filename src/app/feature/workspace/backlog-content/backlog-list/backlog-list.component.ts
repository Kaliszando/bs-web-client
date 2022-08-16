import { Component, OnInit } from '@angular/core';
import { IssueInfoDto } from "../../../../api/models/issue-info-dto";
import { IssueEndpointService } from "../../../../api/services/issue-endpoint.service";
import { StoreService } from "../../../../core/service/store.service";

@Component({
  selector: 'bs-backlog-list',
  templateUrl: './backlog-list.component.html',
  styleUrls: ['./backlog-list.component.scss']
})
export class BacklogListComponent implements OnInit {

  issues: IssueInfoDto[] = []
  active: IssueInfoDto[] = []
  inactive: IssueInfoDto[] = []

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
              this.active = issues.filter(issue => issue.issueType !== "EPIC")
              this.inactive = issues.filter(issue => issue.issueType === "EPIC")
        }
      )
    }
  }
}
