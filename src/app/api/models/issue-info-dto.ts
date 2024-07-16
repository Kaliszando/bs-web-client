/* tslint:disable */
/* eslint-disable */
import { IssueInfoBase } from './issue-info-base';
import { UserInfoDto } from './user-info-dto';
export type IssueInfoDto = IssueInfoBase & {
'reporter'?: UserInfoDto;
'assignee'?: UserInfoDto;
};
