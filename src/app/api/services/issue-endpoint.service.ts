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
   * Path part for operation partialUpdateOfIssue
   */
  static readonly PartialUpdateOfIssuePath = '/issue';

  /**
   * Updates partial data of given issue
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `partialUpdateOfIssue()` instead.
   *
   * This method doesn't expect any request body.
   */
  partialUpdateOfIssue$Response(params: {
    tagId: string;
    newStatus?: string;
    newBacklogList?: string;
  }): Observable<StrictHttpResponse<IssueInfoDto>> {

    const rb = new RequestBuilder(this.rootUrl, IssueEndpointService.PartialUpdateOfIssuePath, 'patch');
    if (params) {
      rb.query('tagId', params.tagId, {});
      rb.query('newStatus', params.newStatus, {});
      rb.query('newBacklogList', params.newBacklogList, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IssueInfoDto>;
      })
    );
  }

  /**
   * Updates partial data of given issue
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `partialUpdateOfIssue$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  partialUpdateOfIssue(params: {
    tagId: string;
    newStatus?: string;
    newBacklogList?: string;
  }): Observable<IssueInfoDto> {

    return this.partialUpdateOfIssue$Response(params).pipe(
      map((r: StrictHttpResponse<IssueInfoDto>) => r.body as IssueInfoDto)
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

  /**
   * Path part for operation updateIssue
   */
  static readonly UpdateIssuePath = '/issue/{tagId}';

  /**
   * Updates issue details and returns updated issue
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateIssue()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateIssue$Response(params?: {
    body?: IssueDetailsDto
  }): Observable<StrictHttpResponse<IssueDetailsDto>> {

    const rb = new RequestBuilder(this.rootUrl, IssueEndpointService.UpdateIssuePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
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
   * Updates issue details and returns updated issue
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateIssue$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateIssue(params?: {
    body?: IssueDetailsDto
  }): Observable<IssueDetailsDto> {

    return this.updateIssue$Response(params).pipe(
      map((r: StrictHttpResponse<IssueDetailsDto>) => r.body as IssueDetailsDto)
    );
  }

}
