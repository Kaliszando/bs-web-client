import { Component, OnInit } from '@angular/core';
import { UserInfoDto } from "../../../api/models";
import { ActivatedRoute } from "@angular/router";
import { StoreService } from "../../../core/service/store.service";
import { Project } from "../../../core/model/project";

@Component({
  selector: 'bs-test-content',
  templateUrl: './test-content.component.html',
  styleUrls: ['./test-content.component.scss']
})
export class TestContentComponent implements OnInit {
  userContext: UserInfoDto = <UserInfoDto>{};
  project: Project = <Project>{};

  constructor(private activatedRoute: ActivatedRoute,
              public store: StoreService) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ userContext }) => {
      this.userContext = userContext
    })
    this.store.selectedProject$.subscribe(project => {
      this.project = project
    })
  }
}
