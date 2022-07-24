import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserInfoDto } from "../../api/models";

@Component({
  selector: 'bs-workspace',
  templateUrl: './workspace.component.html',
})
export class WorkspaceComponent implements OnInit {

  userContext: UserInfoDto = <UserInfoDto>{};

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ userContext }) => {
      this.userContext = userContext;
    })
  }
}
