/* tslint:disable */
/* eslint-disable */
import { IssueSeverity } from './issue-severity';
import { IssueType } from './issue-type';
export type IssuePageFilter = IssueType & IssueSeverity & {
'query'?: string;
'status'?: string;
'assigneeId'?: number;
'reporterId'?: number;
'startDate'?: string;
'endDate'?: string;
};
