import { Component, OnInit } from '@angular/core';
import { IssueInfoDto } from "../../../../api/models/issue-info-dto";
import { IssueEndpointService } from "../../../../api/services/issue-endpoint.service";
import { StoreService } from "../../../../core/service/store.service";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { IssuePartialUpdate } from "../../../../api/models/issue-partial-update";

@Component({
  selector: 'bs-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {

  issues: IssueInfoDto[] = {} as IssueInfoDto[]
  toDo: IssueInfoDto[] = {} as IssueInfoDto[]
  inProgress: IssueInfoDto[] = {} as IssueInfoDto[]
  testing: IssueInfoDto[] = {} as IssueInfoDto[]
  done: IssueInfoDto[] = {} as IssueInfoDto[]
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
          this.toDo = this.prepareIssues('to do');
          this.inProgress = this.prepareIssues('in progress');
          this.testing = this.prepareIssues('testing');
          this.done = this.prepareIssues('done');
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
          .partialIssueUpdate({ body: {
            tagId: updated.tagId, status: newStatus } as IssuePartialUpdate
          })
          .subscribe();
      }
    }
  }

  getListByColumnName(column: string): any[] {
    if (column === 'in progress') return this.inProgress;
    if (column === 'testing') return this.testing;
    if (column === 'done') return this.done;
    return this.toDo;
  }
}
