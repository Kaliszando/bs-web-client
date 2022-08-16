import { Component, Input } from '@angular/core';

@Component({
  selector: 'bs-issue-type-icon',
  templateUrl: './issue-type-icon.component.html',
  styleUrls: ['./issue-type-icon.component.scss']
})
export class IssueTypeIconComponent {

  @Input()
  type?: string = 'TASK'
  typeColorMap = new Map<string, string>([
    ['EPIC','#A45FDB'],
    ['TASK','#4E72CE'],
    ['SUBTASK','#70BAFF'],
    ['BUG','#FF5454'],
    ['ENHANCEMENT','#78DB5F'],
  ])

  getColor() {
    if (this.type) {
      return this.typeColorMap.get(this.type)
    }
    return
  }
}
