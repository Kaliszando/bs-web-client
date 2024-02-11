import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bs-epic-label',
  templateUrl: './epic-label.component.html',
  styleUrls: ['./epic-label.component.scss']
})
export class EpicLabelComponent implements OnInit {

  @Input()
  epicName?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
