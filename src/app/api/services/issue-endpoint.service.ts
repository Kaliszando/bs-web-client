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

import { IssueDetailsDto } from '../models/issue-details-dto';
import { IssueInfoDto } from '../models/issue-info-dto';

@Injectable({
  providedIn: 'root',
})
export class IssueEndpointService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllIssuesByProjectId
   */
  static readonly GetAllIssuesByProjectIdPath = '/issue';

  /**
   * Returns available issues for current project
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllIssuesByProjectId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllIssuesByProjectId$Response(params: {
    projectId: number;
  }): Observable<StrictHttpResponse<Array<IssueInfoDto>>> {

    const rb = new RequestBuilder(this.rootUrl, IssueEndpointService.GetAllIssuesByProjectIdPath, 'get');
    if (params) {
      rb.query('projectId', params.projectId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<IssueInfoDto>>;
      })
    );
  }

  /**
   * Returns available issues for current project
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllIssuesByProjectId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllIssuesByProjectId(params: {
    projectId: number;
  }): Observable<Array<IssueInfoDto>> {

    return this.getAllIssuesByProjectId$Response(params).pipe(
      map((r: StrictHttpResponse<Array<IssueInfoDto>>) => r.body as Array<IssueInfoDto>)
    );
  }

  /**
   * Path part for operation createIssue
   */
  static readonly CreateIssuePath = '/issue';

  /**
   * Creates new issue
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createIssue()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createIssue$Response(params?: {
    body?: IssueDetailsDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, IssueEndpointService.CreateIssuePath, 'post');
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
   * Creates new issue
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createIssue$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createIssue(params?: {
    body?: IssueDetailsDto
  }): Observable<void> {

    return this.createIssue$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getIssueByTagId
   */
  static readonly GetIssueByTagIdPath = '/issue/{tagId}';

  /**
   * Returns issue detail by friendly tag id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getIssueByTagId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIssueByTagId$Response(params: {

    /**
     * Tag id
     */
    tagId: string;
  }): Observable<StrictHttpResponse<IssueDetailsDto>> {

    const rb = new RequestBuilder(this.rootUrl, IssueEndpointService.GetIssueByTagIdPath, 'get');
    if (params) {
      rb.path('tagId', params.tagId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IssueDetailsDto>;
      })
    );
  }

  /**
   * Returns issue detail by friendly tag id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getIssueByTagId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getIssueByTagId(params: {

    /**
     * Tag id
     */
    tagId: string;
  }): Observable<IssueDetailsDto> {

    return this.getIssueByTagId$Response(params).pipe(
      map((r: StrictHttpResponse<IssueDetailsDto>) => r.body as IssueDetailsDto)
    );
  }

}
