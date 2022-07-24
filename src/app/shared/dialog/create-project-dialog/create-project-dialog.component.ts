import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Project } from "../../../core/model/project";
import { FormControl, Validators } from "@angular/forms";
import { StoreService } from "../../../core/service/store.service";

@Component({
  selector: 'bs-create-project-dialog',
  templateUrl: './create-project-dialog.component.html',
  styleUrls: ['./create-project-dialog.component.scss']
})
export class CreateProjectDialogComponent implements OnInit {

  nameForm = new FormControl('', [Validators.required, Validators.minLength(8)])
  tagForm = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(6)])
  descriptionForm = new FormControl('')

  constructor(public dialogRef: MatDialogRef<CreateProjectDialogComponent>,
              public store: StoreService,
              @Inject(MAT_DIALOG_DATA) public data: Project) {}

  ngOnInit(): void {
    this.data = (!this.data) ? { name: '', tag: '' } : this.data
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  isFormValid(): boolean {
    return this.nameForm.valid && this.tagForm.valid && this.descriptionForm.valid
  }

  onCreateClick() {
    if (!this.isFormValid()) return

    let availableProjects: Project[] = []
    this.store.availableProjects$.subscribe(projects => {
      availableProjects = projects
    })
    this.store.availableProjects$.next(availableProjects.concat({
      name: this.nameForm.value,
      tag: this.tagForm.value
    }))
    this.dialogRef.close()
  }
}
