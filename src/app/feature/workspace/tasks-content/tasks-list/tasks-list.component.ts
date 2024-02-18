import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from "@angular/material/paginator";
import { Subscription } from "rxjs";
import { IssueInfoDto } from "../../../../api/models/issue-info-dto";
import { IssuePageRequest } from "../../../../api/models/issue-page-request";
import { IssuePageResponse } from "../../../../api/models/issue-page-response";
import { IssueEndpointService } from "../../../../api/services/issue-endpoint.service";
import { PagerFactory } from "../../../../core/factory/PagerFactory";
import { Pager } from "../../../../core/model/pager";
import { StoreService } from "../../../../core/service/store.service";
import { ListFilter } from "./filter/list-filter";

@Component({
  selector: 'bs-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit, OnDestroy {

  issues: IssueInfoDto[] = [] as IssueInfoDto[]
  filter: ListFilter = { query: '' } as ListFilter;
  noIssues: boolean = true
  filterExpanded: boolean = false
  pager: Pager;
  statuses: string[] = ['None', 'to do', 'in progress', 'done', 'testing']

  private projectSubscription!: Subscription;

  constructor(private issueEndpoint: IssueEndpointService,
              private store: StoreService) {
    this.pager = PagerFactory.create();
  }

  ngOnInit(): void {
    this.projectSubscription = this.store.selectedProject$.subscribe(() => {
      this.updateIssues();
    })
  }

  ngOnDestroy(): void {
    this.projectSubscription.unsubscribe();
  }

  private updateIssues() {
    this.issueEndpoint.getIssuePage({ body: this.prepareIssuesPageRequest() })
      .subscribe(response => {
        this.updateOnPageResponse(response);
        this.onFilterChange()
      })
  }

  private prepareIssuesPageRequest(): IssuePageRequest {
    return {
      projectId: this.store.getSelectedProjectId(),
      page: this.pager.page,
      pageSize: this.pager.pageSize
    }
  }

  private updateOnPageResponse(response: IssuePageResponse) {
    this.issues = response.issues
    this.pager.totalElements = response.totalElements
    this.pager.totalPages = response.totalPages
    this.noIssues = response.totalElements === 0
  }

  onPageChanged(event: PageEvent): void {
    this.pager.page = event.pageIndex;
    if (this.pager.pageSize !== event.pageSize) {
      this.pager.page = 0;
    }
    this.pager.pageSize = event.pageSize;
    this.updateIssues();
  }

  onFilterChange(): void {
  }
}
