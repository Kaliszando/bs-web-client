import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IssueEndpointService } from "../../../../api/services/issue-endpoint.service";
import { IssueDetailsDto } from "../../../../api/models/issue-details-dto";

@Component({
  selector: 'bs-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

  issue: IssueDetailsDto = {} as IssueDetailsDto

  created = Date.now()
  modified = Date.now()

  constructor(private route: ActivatedRoute,
              private issueEndpoint: IssueEndpointService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.issueEndpoint.getIssueByTagId({ tagId: params['id'] }).subscribe({
        next: value => {
          this.issue = value
          console.log(this.issue.createdOn)
        }
      })
    });
  }
}
