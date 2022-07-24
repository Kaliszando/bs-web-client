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

import { UserInfoDto } from '../models/user-info-dto';

@Injectable({
  providedIn: 'root',
})
export class ContextEndpointService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAppContext
   */
  static readonly GetAppContextPath = '/context';

  /**
   * Service returning essential app data
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAppContext()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAppContext$Response(params?: {
  }): Observable<StrictHttpResponse<UserInfoDto>> {

    const rb = new RequestBuilder(this.rootUrl, ContextEndpointService.GetAppContextPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserInfoDto>;
      })
    );
  }

  /**
   * Service returning essential app data
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAppContext$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAppContext(params?: {
  }): Observable<UserInfoDto> {

    return this.getAppContext$Response(params).pipe(
      map((r: StrictHttpResponse<UserInfoDto>) => r.body as UserInfoDto)
    );
  }

}
