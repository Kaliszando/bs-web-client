import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { IssueEndpointService } from "../../../../api/services/issue-endpoint.service";
import { IssueDetailsDto } from "../../../../api/models/issue-details-dto";
import {
  CreateIssueDialogComponent
} from "../../../../shared/dialog/create-issue-dialog/create-issue-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { StoreService } from "../../../../core/service/store.service";
import { MatSnackBar } from "@angular/material/snack-bar";

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
              private dialog: MatDialog,
              private store: StoreService,
              private router: Router,
              private snackBar: MatSnackBar,
              private issueEndpoint: IssueEndpointService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.issueEndpoint.getIssueByTagId({ tagId: params['id'] }).subscribe({
        next: value => {
          this.issue = value
        }
      })
    });
  }

  openIssueDialog() {
    const updateRequest = this.issue;
    updateRequest.createdOn = undefined;
    updateRequest.modifiedOn = undefined;

    const dialogRef = this.dialog.open(CreateIssueDialogComponent, {
      maxHeight: '98%',
      minWidth: 700,
      data: updateRequest,
    });

    dialogRef.afterClosed().subscribe(
      data => { if (data) {
        this.issueEndpoint.updateIssue({ body: data })
          .subscribe({
            next: update => {
              this.issue = update;
              this.snackBar.open('Issue updated successfully', 'Ok', {
                horizontalPosition: 'right',
                panelClass: ['green-snackbar']
              })
            },
            error: () => {
              this.router.navigateByUrl(`/main/tasks/details/${data.tagId}`);
              this.snackBar.open('Concurrent update, try again', 'Ok', {
                horizontalPosition: 'right',
                panelClass: ['red-snackbar']
              })
              this.issueEndpoint.getIssueByTagId({ tagId: data.tagId }).subscribe({
                next: value => {
                  this.issue = value
                }
              })
            }
          })
      }
    })
  }}
