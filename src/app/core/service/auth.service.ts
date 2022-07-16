import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import jwtDecode from "jwt-decode";
import { DecodedToken } from "../model/token";
import { LoginCredentials } from "../../api/models/login-credentials";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  signIn(credentials: LoginCredentials): Observable<HttpResponse<any>> {
    let response = this.http.post('/api/v1/auth/sign-in',
      { email: credentials.email, password: credentials.password },
      { observe: 'response'});

    // let token = response.headers.get('authorization');
    //
    // if (token !== null && token !== undefined) {
    //   console.log(this.authService.isTokenExpired(token))
    // }

    return response;
  }

  isTokenExpired(token: string): boolean {
    if (!token) throw new Error('Invalid authentication token provided');

    let isTokenExpired = false;
    const decoded: DecodedToken = jwtDecode(token);
    const currentTime = new Date().getTime() / 1000;
    console.log(decoded);

    if (currentTime > decoded.exp) isTokenExpired = true;
    console.log(currentTime, decoded.exp);

    return isTokenExpired;
  }
}
