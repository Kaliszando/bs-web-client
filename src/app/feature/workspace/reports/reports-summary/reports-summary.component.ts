import { Component, OnInit } from '@angular/core';
import { IssueEndpointService } from "../../../../api/services/issue-endpoint.service";
import { StoreService } from "../../../../core/service/store.service";
import { IssueInfoDto } from "../../../../api/models/issue-info-dto";

@Component({
  selector: 'bs-reports-summary',
  templateUrl: './reports-summary.component.html',
  styleUrls: ['./reports-summary.component.scss']
})
export class ReportsSummaryComponent implements OnInit {

  issuesSummaryData: any[] = [];

  issuesSummaryDataColors = [
    { name: "Epic", value: '#A45FDB' },
    { name: "Task", value: '#4E72CE' },
    { name: "Subtask", value: '#70BAFF' },
    { name: "Bug", value: '#FF5454' },
    { name: "Enhancement", value: '#78DB5F' },
  ];

  issues: IssueInfoDto[] = {} as IssueInfoDto[]

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
          this.updateChartData()
        }
      )
    }
  }

  updateChartData() {
    this.issuesSummaryData = [
      { name: "Epic", value: this.issues.filter(value => value.issueType === 'EPIC').length },
      { name: "Task", value: this.issues.filter(value => value.issueType === 'TASK').length },
      { name: "Subtask", value: this.issues.filter(value => value.issueType === 'SUBTASK').length },
      { name: "Bug", value: this.issues.filter(value => value.issueType === 'BUG').length },
      { name: "Enhancement", value: this.issues.filter(value => value.issueType === 'ENHANCEMENT').length }
    ]
  }
}
