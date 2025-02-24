import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {

  constructor(private router: Router,
              private snackBar: MatSnackBar) {
  }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.router.navigateByUrl('/auth/sign-in')
        }
        if (error.status === 403) {
          this.router.navigateByUrl('/error/forbidden')
        }
        if (error.status === 422) {
          this.snackBar.open('Request could not be created', 'Ok', {
            horizontalPosition: 'right',
            panelClass: ['red-snackbar']
          })
        }
        if (error.status === 429) {
          this.snackBar.open('Too many requests. Please try again later', 'Ok', {
            horizontalPosition: 'right',
            panelClass: ['red-snackbar']
          })
        }
        return throwError(() => new Error(error.message));
      })
    )
  }
}
