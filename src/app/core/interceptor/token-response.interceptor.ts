import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { StoreService } from "../service/store.service";

@Injectable()
export class TokenResponseInterceptor implements HttpInterceptor {

  constructor(private store: StoreService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.store.setSessionToken(event.headers.get('Authorization'))
        }
        return event;
      }));
  }
}
