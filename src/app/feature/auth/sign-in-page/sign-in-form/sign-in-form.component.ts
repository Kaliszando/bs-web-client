import { Component } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthEndpointService } from "../../../../api/services/auth-endpoint.service";
import { LoginCredentialsDto } from "../../../../api/models";


@Component({
  selector: 'bs-sign-in',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent {

  showPassword: boolean = false
  processing: boolean = false

  emailForm = new FormControl('', [Validators.required, Validators.minLength(6)])
  passwordForm = new FormControl('', [Validators.required, Validators.minLength(8)])

  constructor(private authEndpointService: AuthEndpointService,
              private router: Router) {}


  signIn(): void {
    if (!this.emailForm.valid || !this.passwordForm.valid) {
      this.oninvalidInput()
      return
    }

    this.processing = true
    let loginCredentials: LoginCredentialsDto = {
      email: this.emailForm.value,
      password: this.passwordForm.value
    }
    this.authEndpointService.signIn({ body: loginCredentials})
      .subscribe({
        next: () => this.router.navigateByUrl('main'),
        error: err => { if (err.status === 401) this.oninvalidInput() }
      })
  }

  oninvalidInput() {
    this.processing = false;
    this.emailForm.setValue('')
    this.passwordForm.setValue('')
    this.emailForm.setErrors({ credentials: true })
    this.passwordForm.setErrors({ credentials: true })
  }
}
