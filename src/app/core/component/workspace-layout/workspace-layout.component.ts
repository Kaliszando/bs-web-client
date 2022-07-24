import { Component, Input } from '@angular/core';
import { Observable, startWith } from "rxjs";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { map, shareReplay } from "rxjs/operators";
import { FormControl } from "@angular/forms";
import { StoreService } from "../../service/store.service";
import { Project } from "../../model/project";
import { UserInfoDto } from "../../../api/models/user-info-dto";

@Component({
  selector: 'bs-workspace-layout',
  templateUrl: './workspace-layout.component.html',
  styleUrls: ['./workspace-layout.component.scss'],
})
export class WorkspaceLayoutComponent {

  @Input() userContext: UserInfoDto = <UserInfoDto>{};

  filteredOptions: Observable<string[]> = new Observable<string[]>();
  searchControl = new FormControl();
  searchOptions: string[] = []
  projects: Project[] = [];
  selectedProject: Project = <Project>{};
  expanded = true;
  areProjectsAvailable: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver,
              private store: StoreService) {}

  ngOnInit() {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.searchOptions = ['option1','option2','option3','option4','option1','option2','option3','option4','option1','option2','option3','option4']

    this.store.selectedProject$.subscribe(selectedProject => {
      this.selectedProject = selectedProject;
    })

    this.store.availableProjects$.subscribe(projects => {
      this.projects = projects;
      this.areProjectsAvailable = projects.length > 0
    })
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
}
