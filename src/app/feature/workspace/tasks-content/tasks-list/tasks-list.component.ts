import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from "@angular/material/paginator";
import { Sort } from "@angular/material/sort";
import { debounceTime, Subject, Subscription } from "rxjs";
import { IssueInfoDto } from "../../../../api/models/issue-info-dto";
import { IssuePageFilter } from "../../../../api/models/issue-page-filter";
import { IssuePageRequest } from "../../../../api/models/issue-page-request";
import { IssuePageResponse } from "../../../../api/models/issue-page-response";
import { UserInfoDto } from "../../../../api/models/user-info-dto";
import { IssueEndpointService } from "../../../../api/services/issue-endpoint.service";
import { UserEndpointService } from "../../../../api/services/user-endpoint.service";
import { PagerFactory } from "../../../../core/factory/PagerFactory";
import { Pager } from "../../../../core/model/pager";
import { StoreService } from "../../../../core/service/store.service";
import { ListFilter } from "./filter/list-filter";

@Component({
  selector: 'bs-tasks-list',
  templateUrl: 'tasks-list.component.html',
  styleUrls: ['tasks-list.component.scss']
})
export class TasksListComponent implements OnInit, OnDestroy {

  issues: IssueInfoDto[] = [];
  users: UserInfoDto[] = [];
  filter: ListFilter = {} as ListFilter;
  noIssues: boolean = true
  filterExpanded: boolean = false
  filterTouched: boolean = false;
  pager: Pager;
  statuses: string[] = ['to do', 'in progress', 'done', 'testing']

  filterChange$: Subject<void> = new Subject<void>();

  private projectSubscription!: Subscription;
  private issueReloadSubscription!: Subscription;

  constructor(private issueEndpoint: IssueEndpointService,
              private userEndpoint: UserEndpointService,
              private store: StoreService) {
    this.pager = PagerFactory.create();
  }

  ngOnInit(): void {
    this.projectSubscription = this.store.selectedProject$.subscribe(() => {
      this.updateIssues();
      this.updateUsers();
    })
    this.issueReloadSubscription = this.store.issuesReloaded$.subscribe(() => this.updateIssues())
    this.filterChange$.pipe(debounceTime(300)).subscribe(() => this.updateIssues())
  }

  ngOnDestroy(): void {
    this.projectSubscription.unsubscribe();
    this.issueReloadSubscription.unsubscribe();
  }

  private updateIssues(): void {
    this.issueEndpoint.getIssuePage({ body: this.prepareIssuesPageRequest() })
      .subscribe(response => {
        this.updateOnPageResponse(response);
      })
  }

  private updateUsers(): void {
    this.userEndpoint.getUsersByParam({ projectId: this.store.getSelectedProjectId() })
      .subscribe(response => {
        this.users = response;
      })
  }

  private prepareIssuesPageRequest(): IssuePageRequest {
    return {
      projectId: this.store.getSelectedProjectId(),
      page: this.pager.page,
      pageSize: this.pager.pageSize,
      sortBy: this.pager.sortBy,
      filter: this.prepareFilter()
    }
  }

  private prepareFilter(): IssuePageFilter {
    return {
      query: this.filter.query ?? undefined,
      severities: this.filter.severities ?? undefined,
      types: this.filter.types ?? undefined,
      statuses: this.filter.statuses ?? undefined,
      assigneeId: this.filter.assigneeId ?? undefined,
      reporterId: this.filter.reporterId ?? undefined,
      startDate: this.filter.startDate ?? undefined,
      endDate: this.filter.endDate ?? undefined,
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
    this.filterTouched = true;
    this.pager.page = 0;
    this.updateIssues();
  }

  onSortByChanged(event: Sort): void {
    if (event.direction === '' || event.active === '') {
      this.pager.sortBy = undefined;
    } else {
      this.pager.sortBy = (event.direction === 'asc') ? event.active : '-'.concat(event.active);
    }
    this.pager.page = 0;
    this.updateIssues();
  }

  onDateRangeChange(start: string, end: string): void {
    if (end === "") {
      return;
    }
    this.filter.startDate = this.reformatDate(start);
    this.filter.endDate = this.reformatDate(end);
    this.onFilterChange();
  }

  onClear(): void {
    this.filter = {} as ListFilter;
    this.onFilterChange();
    this.filterTouched = false;
  }

  onQueryChange() {
    this.filterTouched = true;
    this.filterChange$.next();
  }

  private reformatDate(end: string): string {
    return new Date(end).toISOString().substring(0, 10);
  }
}
