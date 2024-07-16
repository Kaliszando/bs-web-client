/* tslint:disable */
/* eslint-disable */
import { IssueSeverity } from './issue-severity';
import { IssueType } from './issue-type';
export interface IssuePageFilter {
  assigneeId?: number;
  endDate?: string;
  query?: string;
  reporterId?: number;
  severities?: Array<IssueSeverity>;
  startDate?: string;
  statuses?: Array<string>;
  types?: Array<IssueType>;
}
