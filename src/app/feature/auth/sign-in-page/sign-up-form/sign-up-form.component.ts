import { Component } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'bs-sign-up',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent {

  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  processing: boolean = false;

  email = new FormControl('', [Validators.required, Validators.email]);
  firstname = new FormControl('', [Validators.required, Validators.minLength(2)]);
  lastname = new FormControl('', [Validators.required, Validators.minLength(2)]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  passwordConfirm = new FormControl('', [Validators.required, Validators.minLength(8)]);

  signUp(): void {
    this.processing = !this.processing;
  }

  onPasswordChange() {
    this.password.value !== this.passwordConfirm.value
      ? this.passwordConfirm.setErrors({ nomatch: true })
      : this.passwordConfirm.setValue(this.passwordConfirm.value)
  }
}
