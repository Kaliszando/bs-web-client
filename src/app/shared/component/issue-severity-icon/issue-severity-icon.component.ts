import { Component, Input } from '@angular/core';

@Component({
  selector: 'bs-issue-severity-icon',
  templateUrl: './issue-severity-icon.component.html',
  styleUrls: ['./issue-severity-icon.component.scss']
})
export class IssueSeverityIconComponent  {

  @Input()
  severity: string = 'normal'
  severitiesMap = new Map<string, string>([
    ['blocker','#ff2600'],
    ['critical','#ff2600'],
    ['major','#ff6400'],
    ['normal','#575757'],
    ['minor','#008cff'],
    ['trivial','#00ad11'],
  ])

  getColor() {
    return this.severitiesMap.get(this.severity)
  }
}
