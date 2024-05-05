import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Observable, startWith } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { IssueDetailsDto } from "../../../api/models";
import { ProjectInfoDto } from "../../../api/models/project-info-dto";
import { UserInfoDto } from "../../../api/models/user-info-dto";
import { IssueEndpointService } from "../../../api/services/issue-endpoint.service";
import { CreateIssueDialogComponent } from "../../../common/dialog/create-issue-dialog/create-issue-dialog.component";
import { StoreService } from "../../service/store.service";

@Component({
  selector: 'bs-workspace-layout',
  templateUrl: './workspace-layout.component.html',
  styleUrls: ['./workspace-layout.component.scss'],
})
export class WorkspaceLayoutComponent implements OnInit {

  userContext: UserInfoDto = <UserInfoDto>{};
  selectedProject: ProjectInfoDto = <ProjectInfoDto>{};
  filteredOptions: Observable<string[]> = new Observable<string[]>();

  searchControl = new FormControl();
  searchOptions: string[] = []
  projects: ProjectInfoDto[] = [];
  expanded = true;
  projectAvailable: boolean = true;

  constructor(private breakpointObserver: BreakpointObserver,
              private store: StoreService,
              private dialog: MatDialog,
              private issueEndpoint: IssueEndpointService) {
  }

  ngOnInit() {
    this.store.userContext$.subscribe(context => {
      this.userContext = context
    })

    this.store.selectedProject$.subscribe(selectedProject => {
      this.selectedProject = selectedProject;
    })

    this.store.availableProjects$.subscribe(projects => {
      this.projects = projects;
      this.projectAvailable = projects != undefined && projects.length > 0
    })

    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.searchOptions = ['option1', 'option2', 'option3', 'option4', 'option1', 'option2', 'option3', 'option4', 'option1', 'option2', 'option3', 'option4']
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.searchOptions.filter(option => option.toLowerCase().includes(filterValue));
  }

  isAdmin(): boolean {
    return this.userContext.role === 'ADMIN'
  }

  toggleExpand(): void {
    this.expanded = !this.expanded;
  }

  updateProjectState() {
    this.store.selectedProject$.next(this.selectedProject)
  }

  projectSelectorChange() {
    this.updateProjectState()
  }

  openIssueDialog() {
    const dialogRef = this.dialog.open(CreateIssueDialogComponent, {
      maxHeight: '98%',
      minWidth: 700,
      data: {
        issueType: 'TASK',
        issueSeverity: 'NORMAL',
      } as IssueDetailsDto,
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.issueEndpoint.createIssue({ body: data }).subscribe(
          () => {
            this.store.issuesReloaded$.next()
          }
        )
      }
    })
  }
}
