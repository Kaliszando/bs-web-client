import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'bs-tasks-content',
  templateUrl: './tasks-content.component.html',
  styleUrls: ['./tasks-content.component.scss']
})
export class TasksContentComponent implements OnInit{

  constructor(public router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      value => console.log('INSERT ISSUE RESOLVER HERE', value)
    )
  }
}
