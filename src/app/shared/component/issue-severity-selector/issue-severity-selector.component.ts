import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatFormField } from "@angular/material/form-field";

@Component({
  selector: 'bs-issue-severity-selector',
  templateUrl: './issue-severity-selector.component.html',
  styleUrls: ['./issue-severity-selector.component.scss']
})
export class IssueSeveritySelectorComponent implements OnInit {

  @ViewChildren(MatFormField)
  formFields: QueryList<MatFormField> = {} as QueryList<MatFormField>;

  @Input() selectedSeverity: string = 'normal'
  @Input() preview: boolean = true

  severities: string[] = ['blocker','critical','major','normal','minor','trivial']

  ngAfterViewInit(): void {
    setTimeout(() => this.formFields.forEach(ff => ff.updateOutlineGap()), 100);
  }

  ngOnInit(): void {
  }

}
