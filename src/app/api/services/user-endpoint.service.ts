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
   * Path part for operation getUserByPhrase
   */
  static readonly GetUserByPhrasePath = '/user';

  /**
   * Finds user by given input phrase
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserByPhrase()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserByPhrase$Response(params?: {
    query?: string;
  }): Observable<StrictHttpResponse<Array<UserInfoDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UserEndpointService.GetUserByPhrasePath, 'get');
    if (params) {
      rb.query('query', params.query, {});
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
   * Finds user by given input phrase
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserByPhrase$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserByPhrase(params?: {
    query?: string;
  }): Observable<Array<UserInfoDto>> {

    return this.getUserByPhrase$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserInfoDto>>) => r.body as Array<UserInfoDto>)
    );
  }

}
