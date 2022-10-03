import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { FormControl, Validators } from "@angular/forms";
import { StoreService } from "../../../core/service/store.service";
import { UserInfoDto } from "../../../api/models/user-info-dto";
import { UserEndpointService } from "../../../api/services/user-endpoint.service";
import { debounceTime, distinctUntilChanged } from "rxjs";
import { ProjectEndpointService } from "../../../api/services/project-endpoint.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'bs-create-project-dialog',
  templateUrl: './create-project-dialog.component.html',
  styleUrls: ['./create-project-dialog.component.scss']
})
export class CreateProjectDialogComponent implements OnInit {

  nameForm = new FormControl('', [Validators.required, Validators.minLength(8)])
  tagForm = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(6)])
  usersQueryForm = new FormControl('')
  descriptionForm = new FormControl('')
  filteredUsers: UserInfoDto[] = []
  chipsUsernames: Set<string> = new Set<string>()
  userContext: UserInfoDto = <UserInfoDto>{}
  usersLoading: boolean = false

  constructor(public dialogRef: MatDialogRef<CreateProjectDialogComponent>,
              public store: StoreService,
              public userService: UserEndpointService,
              public projectService: ProjectEndpointService,
              public snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.store.userContext$.subscribe({
      next: user => this.userContext = user
    })

    this.usersQueryForm.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged())
      .subscribe({
        next: query => this.queryUsers(query)
      })

    this.usersQueryForm.valueChanges.subscribe({
      next: () => {
        this.usersLoading = true
      }
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  isFormValid(): boolean {
    return this.nameForm.valid && this.tagForm.valid && this.descriptionForm.valid
  }

  queryUsers(query: string) {
    this.userService.getUserByPhrase({query: query}).subscribe({
      next: (result) => {
        this.filteredUsers = result.filter(user => user.username !== this.userContext.username)
        this.usersLoading = false
      }
    })
  }

  onCreateProject() {
    if (!this.isFormValid()) return

    this.projectService.createProject({ body: {
        name: this.nameForm.value,
        tag: this.tagForm.value,
        description: this.descriptionForm.value
    }}).subscribe({
      next: () => {
        this.store.reloadProjects()
      }
    })
    this.dialogRef.close()
  }

  onSelectedUser(user: UserInfoDto) {
    if (user.username) {
      this.chipsUsernames.add(user.username)
    }
  }

  removeUserFromChips(username: string) {
    this.chipsUsernames.delete(username)
  }
}