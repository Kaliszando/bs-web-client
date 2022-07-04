import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { WorkspaceLayoutComponent } from './workspace-layout/workspace-layout.component';


@NgModule({
  declarations: [
    WorkspaceLayoutComponent
  ],
  exports: [
    WorkspaceLayoutComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class CoreModule { }
