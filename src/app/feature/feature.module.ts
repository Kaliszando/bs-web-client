import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { WorkspaceComponent } from './workspace/workspace.component';
import { CoreModule } from "../core/core.module";
import { TestContentComponent } from './workspace/test-content/test-content.component';
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
    FeatureRoutingModule,
    MatDividerModule,
    MatButtonModule,
  ]
})
export class FeatureModule { }
