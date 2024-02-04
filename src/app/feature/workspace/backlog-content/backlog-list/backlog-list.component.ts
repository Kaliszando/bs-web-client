import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { IssueInfoDto } from "../../../../api/models/issue-info-dto";
import { IssuePartialUpdate } from "../../../../api/models/issue-partial-update";
import { IssueEndpointService } from "../../../../api/services/issue-endpoint.service";
import { StoreService } from "../../../../core/service/store.service";

@Component({
  selector: 'bs-backlog-list',
  templateUrl: './backlog-list.component.html',
  styleUrls: ['./backlog-list.component.scss']
})
export class BacklogListComponent implements OnInit, OnDestroy {

  issues: IssueInfoDto[] = []
  active: IssueInfoDto[] = []
  inactive: IssueInfoDto[] = []

  private projectSubscription!: Subscription;

  constructor(private issueEndpoint: IssueEndpointService,
              private store: StoreService) {
  }

  ngOnInit(): void {
    this.projectSubscription = this.store.selectedProject$.subscribe(() => {
      this.updateIssues()
    })
  }

  ngOnDestroy(): void {
    this.projectSubscription.unsubscribe();
  }

  updateIssues() {
    const project = this.store.getSelectedProjectValue();
    if (project && project.id) {
      this.issueEndpoint.getAllIssuesByProjectId({projectId: project.id}).subscribe(
        issues => {
          this.active = issues.filter(issue => issue.backlogList === "active")
          this.inactive = issues.filter(issue => issue.backlogList !== "active")
        }
      )
    }
  }

  drop(event: CdkDragDrop<IssueInfoDto[]>, newBacklogList: string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      const updated = event.container.data.find(issue => issue.backlogList !== newBacklogList);
      if (updated && updated.tagId) {
        this.issueEndpoint
          .partialIssueUpdate({body: {tagId: updated.tagId, backlog: newBacklogList} as IssuePartialUpdate})
          .subscribe();
      }
    }
  }
}
