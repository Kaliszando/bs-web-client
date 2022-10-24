import { Component, OnInit } from '@angular/core';
import { IssueInfoDto } from "../../../../api/models/issue-info-dto";
import { IssueEndpointService } from "../../../../api/services/issue-endpoint.service";
import { StoreService } from "../../../../core/service/store.service";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { IssuePartialUpdate } from "../../../../api/models/issue-partial-update";

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
          .partialIssueUpdate({ body: { tagId: updated.tagId, backlog: newBacklogList } as IssuePartialUpdate })
          .subscribe();
      }
    }
  }
}
