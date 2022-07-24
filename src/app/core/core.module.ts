import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { WorkspaceLayoutComponent } from './component/workspace-layout/workspace-layout.component';
import { RouterModule } from "@angular/router";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { ReactiveFormsModule } from "@angular/forms";
import { MatRippleModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";


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
    ],
  exports: [
    WorkspaceLayoutComponent,
  ],
})
export class CoreModule { }
