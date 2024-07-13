/* tslint:disable */
/* eslint-disable */
import { IssueSeverity } from './issue-severity';
import { IssueType } from './issue-type';
export interface IssueInfoBase {
  backlogList?: string;
  epicName?: string;
  id?: number;
  labels?: Array<string>;
  name?: string;
  projectId?: number;
  severity?: IssueSeverity;
  status?: string;
  summary?: string;
  tagId?: string;
  type?: IssueType;
}
