/* tslint:disable */
/* eslint-disable */
import { IssuePageFilter } from './issue-page-filter';
import { PageRequest } from './page-request';
export type IssuePageRequest = PageRequest & {
'projectId': number;
'filter'?: IssuePageFilter;
};
