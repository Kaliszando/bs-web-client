import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'bs-projects-content',
  templateUrl: './projects-content.component.html',
  styleUrls: ['./projects-content.component.scss']
})
export class ProjectsContentComponent {

  constructor(public router: Router) {
  }

}
