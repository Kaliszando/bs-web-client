import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class SuccessResponseInterceptor implements HttpInterceptor {

  constructor(public snackBar: MatSnackBar) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.status === 201) {
            this.snackBar.open('Created successfully', 'Ok', {
              horizontalPosition: 'right',
              panelClass: ['green-snackbar']
            })
          }
        }
        return event;
      }));
  }
}
