import { Component, Input } from '@angular/core';

@Component({
  selector: 'bs-issue-severity-icon',
  templateUrl: './issue-severity-icon.component.html',
  styleUrls: ['./issue-severity-icon.component.scss']
})
export class IssueSeverityIconComponent  {

  @Input()
  severity: string = 'NORMAL'
  severitiesMap = new Map<string, string>([
    ['BLOCKER','#ff2600'],
    ['CRITICAL','#ff2600'],
    ['MAJOR','#ff6400'],
    ['NORMAL','#575757'],
    ['MINOR','#008cff'],
    ['TRIVIAL','#00ad11'],
  ])

  getColor() {
    return this.severitiesMap.get(this.severity)
  }
}
