import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bs-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {

  @Input()
  labels?: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
