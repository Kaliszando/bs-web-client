import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IssueDetailsDto } from "../../../api/models/issue-details-dto";

@Component({
  selector: 'bs-file-attachment-select',
  templateUrl: './file-attachment-select.component.html',
  styleUrls: ['./file-attachment-select.component.scss']
})
export class FileAttachmentSelectComponent implements OnInit {

  @Input()
  dataModel: IssueDetailsDto = {} as IssueDetailsDto
  @Output()
  dataModelChange: EventEmitter<IssueDetailsDto> = new EventEmitter<IssueDetailsDto>()

  files: File[] = []
  accept: string = '.png, .jpg, .jpeg, .pdf, .csv'

  constructor() { }

  ngOnInit(): void {
  }

  onFileProvided() {
  }

  onPaste(event: ClipboardEvent) {
    // @ts-ignore
    const clipboardData = event.clipboardData || window.clipboardData
    if (clipboardData.files && clipboardData.files[0]) {
      const file = clipboardData.files[0]
      this.files = this.files.concat(file)
    }
  }
}
