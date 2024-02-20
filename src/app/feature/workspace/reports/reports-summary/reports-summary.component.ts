import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { IssueInfoDto } from "../../../../api/models/issue-info-dto";
import { IssueEndpointService } from "../../../../api/services/issue-endpoint.service";
import { StoreService } from "../../../../core/service/store.service";

@Component({
  selector: 'bs-reports-summary',
  templateUrl: './reports-summary.component.html',
  styleUrls: ['./reports-summary.component.scss']
})
export class ReportsSummaryComponent implements OnInit, OnDestroy {

  issuesSummaryData: any[] = [];

  issuesSummaryDataColors = [
    { name: "Epic", value: '#A45FDB' },
    { name: "Task", value: '#4E72CE' },
    { name: "Subtask", value: '#70BAFF' },
    { name: "Bug", value: '#FF5454' },
    { name: "Enhancement", value: '#78DB5F' },
  ];

  issues: IssueInfoDto[] = {} as IssueInfoDto[]

  private projectSubscription!: Subscription;
  private issueReloadSubscription!: Subscription;

  constructor(private issueEndpoint: IssueEndpointService,
              private store: StoreService) {
  }

  ngOnInit(): void {
    this.projectSubscription = this.store.selectedProject$.subscribe(() => this.updateIssues())
    this.issueReloadSubscription = this.store.issuesReloaded$.subscribe(() => this.updateIssues())
  }

  ngOnDestroy(): void {
    this.projectSubscription.unsubscribe();
    this.issueReloadSubscription.unsubscribe();
  }

  updateIssues() {
    this.issueEndpoint.getAllIssuesByProjectId({ projectId: this.store.getSelectedProjectId() }).subscribe(
      issues => {
        this.issues = issues
        this.updateChartData()
      }
    )
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
