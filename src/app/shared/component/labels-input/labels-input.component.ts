import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-labels-input',
  templateUrl: './labels-input.component.html',
  styleUrls: ['./labels-input.component.scss']
})
export class LabelsInputComponent implements OnInit {

  labels: Set<string> = new Set<string>()
  inputValue: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  remove(label: string) {
    this.labels.delete(label)
  }

  add() {
    if (this.labels.has(this.inputValue) || this.inputValue === '') return
    this.labels.add(this.inputValue.trim())
    this.inputValue = ''
  }
}
