import { Component, ViewChild } from '@angular/core';
import { Observable } from "rxjs";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { map, shareReplay } from "rxjs/operators";
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: 'bs-workspace-layout',
  templateUrl: './workspace-layout.component.html',
  styleUrls: ['./workspace-layout.component.scss']
})
export class WorkspaceLayoutComponent {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
