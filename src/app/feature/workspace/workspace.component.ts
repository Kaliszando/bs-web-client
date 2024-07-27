import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { StoreService } from "../../core/service/store.service";

@Component({
  selector: 'bs-workspace',
  templateUrl: 'workspace.component.html',
})
export class WorkspaceComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private store: StoreService) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ context }) => {
      this.store.applyContextData(context);
    })
  }
}
