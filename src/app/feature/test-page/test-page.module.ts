import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { CoreModule } from "../../core/core.module";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";



@NgModule({
  declarations: [
    PageComponent
  ],
  exports: [
    PageComponent
  ],
    imports: [
        CommonModule,
        CoreModule,
        MatButtonModule,
        MatDividerModule
    ]
})
export class TestPageModule { }
