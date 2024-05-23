/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { LoginCredentialsDto } from '../models/login-credentials-dto';

@Injectable({
  providedIn: 'root',
})
export class AuthEndpointService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation signIn
   */
  static readonly SignInPath = '/auth/sign-in';

  /**
   * User login endpoint
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signIn()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signIn$Response(params?: {
    body?: LoginCredentialsDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthEndpointService.SignInPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * User login endpoint
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `signIn$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signIn(params?: {
    body?: LoginCredentialsDto
  }): Observable<void> {

    return this.signIn$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation signOut
   */
  static readonly SignOutPath = '/auth/sign-out';

  /**
   * User logout endpoint
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signOut()` instead.
   *
   * This method doesn't expect any request body.
   */
  signOut$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthEndpointService.SignOutPath, 'post');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * User logout endpoint
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `signOut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  signOut(params?: {
  }): Observable<void> {

    return this.signOut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation ping
   */
  static readonly PingPath = '/auth/ping';

  /**
   * Service endpoint for test purposes
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ping()` instead.
   *
   * This method doesn't expect any request body.
   */
  ping$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthEndpointService.PingPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Service endpoint for test purposes
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `ping$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ping(params?: {
  }): Observable<void> {

    return this.ping$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
