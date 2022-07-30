import { Component, OnInit } from '@angular/core';
import { ProjectInfoDto, UserInfoDto } from "../../../api/models";
import { ActivatedRoute } from "@angular/router";
import { StoreService } from "../../../core/service/store.service";

@Component({
  selector: 'bs-test-content',
  templateUrl: './test-content.component.html',
  styleUrls: ['./test-content.component.scss']
})
export class TestContentComponent implements OnInit {
  userContext: UserInfoDto = <UserInfoDto>{};
  project: ProjectInfoDto = <ProjectInfoDto>{};

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
