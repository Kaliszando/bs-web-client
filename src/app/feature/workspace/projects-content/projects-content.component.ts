import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { StoreService } from "../../../core/service/store.service";

@Component({
  selector: 'bs-projects-content',
  templateUrl: './projects-content.component.html',
  styleUrls: ['./projects-content.component.scss']
})
export class ProjectsContentComponent implements OnInit {

  constructor(public router: Router,
              private activatedRoute: ActivatedRoute,
              private store: StoreService) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ projects }) => {
      this.store.availableProjects$.next(projects)
    })
  }
}
