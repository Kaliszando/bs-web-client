import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'bs-reports-component',
  templateUrl: './reports-content.component.html',
  styleUrls: ['./reports-content.component.scss']
})
export class ReportsContentComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
