import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'bs-login-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements AfterViewInit {

  viewLoading: boolean = true;

  ngAfterViewInit(): void {
    this.viewLoading = false;
  }
}
