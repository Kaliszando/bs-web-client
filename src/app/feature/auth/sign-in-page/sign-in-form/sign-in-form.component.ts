import { Component, EventEmitter } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../../../core/service/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'bs-sign-in',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent {

  showPassword: boolean = false;
  processing: boolean = false;

  usernameForm = new FormControl('', [Validators.required, Validators.minLength(6)])
  passwordForm = new FormControl('', [Validators.required, Validators.minLength(8)]);

  constructor(private authService: AuthService,
              private router: Router) {}


  signIn(): void {
    if (!this.usernameForm.valid || !this.passwordForm.valid) return;

    this.processing = true;
    this.authService.signIn({ username: this.usernameForm.value, password: this.passwordForm.value })
      .subscribe({
        error: () => {
          this.processing = false;
          this.usernameForm.setValue('');
          this.passwordForm.setValue('');
          this.usernameForm.setErrors({ credentials: true })
          this.passwordForm.setErrors({ credentials: true })
        },
        complete: () => this.router.navigateByUrl('main'),
      })
  }



}
