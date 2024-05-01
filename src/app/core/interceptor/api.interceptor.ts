import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  BASE_URL_DEV: string = 'http://localhost:8080';

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.url.includes('api/')) {
      const apiReq = request.clone({ url: `${ this.BASE_URL_DEV }${ request.url }` });
      return next.handle(apiReq);
    }

    return next.handle(request);
  }
}
