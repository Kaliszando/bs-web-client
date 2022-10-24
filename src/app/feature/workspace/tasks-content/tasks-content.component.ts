import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'bs-tasks-content',
  templateUrl: './tasks-content.component.html',
  styleUrls: ['./tasks-content.component.scss']
})
export class TasksContentComponent implements OnInit{

  routeId = '';

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.routeId = this.router.url.substring(20)
  }

  onNavChange() {
    this.routeId = this.router.url.substring(20)
  }
}
