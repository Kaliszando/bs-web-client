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
export class UserEndpointService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getUsersByParam
   */
  static readonly GetUsersByParamPath = '/user';

  /**
   * Finds users by given param
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUsersByParam()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsersByParam$Response(params?: {
    query?: string;
    projectId?: number;
  }): Observable<StrictHttpResponse<Array<UserInfoDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UserEndpointService.GetUsersByParamPath, 'get');
    if (params) {
      rb.query('query', params.query, {});
      rb.query('projectId', params.projectId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserInfoDto>>;
      })
    );
  }

  /**
   * Finds users by given param
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUsersByParam$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsersByParam(params?: {
    query?: string;
    projectId?: number;
  }): Observable<Array<UserInfoDto>> {

    return this.getUsersByParam$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserInfoDto>>) => r.body as Array<UserInfoDto>)
    );
  }

}
