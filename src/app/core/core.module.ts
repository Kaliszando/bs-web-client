import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { WorkspaceLayoutComponent } from './component/workspace-layout/workspace-layout.component';
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
    WorkspaceLayoutComponent
  ],
  exports: [
    WorkspaceLayoutComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
  ]
})
export class CoreModule { }
