import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'bs-backlog-content',
  templateUrl: './backlog-content.component.html',
  styleUrls: ['./backlog-content.component.scss']
})
export class BacklogContentComponent implements OnInit {

  constructor(public router: Router) {}

  ngOnInit(): void {
  }

}
