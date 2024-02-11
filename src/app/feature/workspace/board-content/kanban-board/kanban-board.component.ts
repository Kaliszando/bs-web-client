import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { IssueInfoDto } from "../../../../api/models/issue-info-dto";
import { IssuePartialUpdate } from "../../../../api/models/issue-partial-update";
import { IssueEndpointService } from "../../../../api/services/issue-endpoint.service";
import { StoreService } from "../../../../core/service/store.service";

@Component({
  selector: 'bs-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit, OnDestroy {

  issues: IssueInfoDto[] = [] as IssueInfoDto[]
  toDo: IssueInfoDto[] = [] as IssueInfoDto[]
  inProgress: IssueInfoDto[] = [] as IssueInfoDto[]
  testing: IssueInfoDto[] = [] as IssueInfoDto[]
  done: IssueInfoDto[] = [] as IssueInfoDto[]
  columns: string[] = ['to do', 'in progress', 'testing', 'done'];

  private projectSubscription!: Subscription;

  constructor(private issueEndpoint: IssueEndpointService,
              private store: StoreService) {
  }

  ngOnInit(): void {
    this.projectSubscription = this.store.selectedProject$.subscribe(() => {
        this.updateIssues()
      }
    )
  }

  ngOnDestroy(): void {
    this.projectSubscription.unsubscribe();
  }

  updateIssues() {
    const project = this.store.getSelectedProjectValue();
    if (project && project.id) {
      this.issueEndpoint.getAllIssuesByProjectId({projectId: project.id}).subscribe(
        issues => {
          this.issues = issues
          this.toDo = this.prepareIssues('to do');
          this.inProgress = this.prepareIssues('in progress');
          this.testing = this.prepareIssues('testing');
          this.done = this.prepareIssues('done');
        }
      )
    }
  }

  prepareIssues(columnName: string): IssueInfoDto[] {
    return Object.values(this.issues)
    .filter(value => value.status === columnName && value.backlogList === 'active')
  }

  drop(event: CdkDragDrop<IssueInfoDto[]>, newStatus: string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      const updated = event.container.data.find(issue => issue.status !== newStatus);
      if (updated && updated.tagId) {
        this.issueEndpoint
        .partialIssueUpdate({
          body: {
            tagId: updated.tagId, status: newStatus
          } as IssuePartialUpdate
        })
        .subscribe();
      }
    }
  }

  getListByColumnName(column: string): IssueInfoDto[] {
    if (column === 'in progress') return this.inProgress;
    if (column === 'testing') return this.testing;
    if (column === 'done') return this.done;
    return this.toDo;
  }
}
