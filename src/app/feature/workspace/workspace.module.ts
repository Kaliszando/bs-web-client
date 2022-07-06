import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './workspace.component';
import { CoreModule } from "../../core/core.module";
import { TestContentComponent } from './test-content/test-content.component';
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [
    WorkspaceComponent,
    TestContentComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    WorkspaceRoutingModule,
    MatDividerModule,
    MatButtonModule,
  ]
})
export class WorkspaceModule { }
