import { Component } from '@angular/core';
import { Observable, startWith } from "rxjs";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { map, shareReplay } from "rxjs/operators";
import { FormControl } from "@angular/forms";
import { StoreService } from "../../service/store.service";
import { UserInfoDto } from "../../../api/models/user-info-dto";
import { ProjectInfoDto } from "../../../api/models/project-info-dto";
import {
  CreateProjectDialogComponent
} from "../../../shared/dialog/create-project-dialog/create-project-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { CreateIssueDialogComponent } from "../../../shared/dialog/create-issue-dialog/create-issue-dialog.component";

@Component({
  selector: 'bs-workspace-layout',
  templateUrl: './workspace-layout.component.html',
  styleUrls: ['./workspace-layout.component.scss'],
})
export class WorkspaceLayoutComponent {

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
              private dialog: MatDialog) {}

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
    this.searchOptions = ['option1','option2','option3','option4','option1','option2','option3','option4','option1','option2','option3','option4']
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
    this.dialog.open(CreateIssueDialogComponent, {
      maxHeight: '95%',
      minWidth: 800
    });
  }
}
