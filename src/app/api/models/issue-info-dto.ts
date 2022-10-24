/* tslint:disable */
/* eslint-disable */
import { IssueInfoBase } from './issue-info-base';
import { IssueSeverity } from './issue-severity';
import { IssueType } from './issue-type';
import { UserInfoDto } from './user-info-dto';
export type IssueInfoDto = IssueInfoBase & IssueSeverity & IssueType & {
'reporter'?: UserInfoDto;
'assignee'?: UserInfoDto;
};
