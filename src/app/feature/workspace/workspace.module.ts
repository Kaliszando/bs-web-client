import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './workspace.component';
import { CoreModule } from "../../core/core.module";
import { TestContentComponent } from './test-content/test-content.component';
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    WorkspaceComponent,
    TestContentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    WorkspaceRoutingModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ]
})
export class WorkspaceModule { }
