import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../common/shared.module";
import { WorkspaceLayoutComponent } from './component/workspace-layout/workspace-layout.component';


@NgModule({
  declarations: [
    WorkspaceLayoutComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatRippleModule,
    MatSelectModule,
    MatSlideToggleModule,
    SharedModule,
  ],
  exports: [
    WorkspaceLayoutComponent,
  ],
})
export class CoreModule {
}
