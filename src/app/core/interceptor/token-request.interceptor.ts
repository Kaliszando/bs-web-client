import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoreService } from "../service/store.service";

@Injectable()
export class TokenRequestInterceptor implements HttpInterceptor {

  constructor(private store: StoreService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentToken: string = ''
    this.store.sessionToken$.subscribe(token => currentToken = token)

    const modified = request.clone({
      setHeaders: { "Authorization" : currentToken }
    });
    return next.handle(modified);
  }
}
