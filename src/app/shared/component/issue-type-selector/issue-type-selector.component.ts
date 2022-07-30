import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatFormField } from "@angular/material/form-field";

@Component({
  selector: 'bs-issue-type-selector',
  templateUrl: './issue-type-selector.component.html',
  styleUrls: ['./issue-type-selector.component.scss']
})
export class IssueTypeSelectorComponent implements OnInit {

  @ViewChildren(MatFormField)
  formFields: QueryList<MatFormField> = {} as QueryList<MatFormField>;

  @Input() selectedType: string = 'task'
  @Input() preview: boolean = true

  types: string[] = ['epic','task','subtask','bug','enhancement']

  ngAfterViewInit(): void {
    setTimeout(() => this.formFields.forEach(ff => ff.updateOutlineGap()), 100);
  }

  ngOnInit(): void {
  }

}
