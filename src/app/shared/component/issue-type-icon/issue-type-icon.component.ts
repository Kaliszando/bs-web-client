import { Component, Input } from '@angular/core';

@Component({
  selector: 'bs-issue-type-icon',
  templateUrl: './issue-type-icon.component.html',
  styleUrls: ['./issue-type-icon.component.scss']
})
export class IssueTypeIconComponent {

  @Input()
  type: string = 'task'
  typeColorMap = new Map<string, string>([
    ['enhancement','#78DB5F'],
    ['task','#4E72CE'],
    ['epic','#A45FDB'],
    ['subtask','#70BAFF'],
    ['bug','#FF5454'],
  ])

  getColor() {
    return this.typeColorMap.get(this.type)
  }

}
