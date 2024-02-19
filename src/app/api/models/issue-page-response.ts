/* tslint:disable */
/* eslint-disable */
import { IssueInfoDto } from './issue-info-dto';
import { PageData } from './page-data';
export type IssuePageResponse = PageData & {
'issues': Array<IssueInfoDto>;
};
