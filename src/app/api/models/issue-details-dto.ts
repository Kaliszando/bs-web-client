/* tslint:disable */
/* eslint-disable */
import { BaseDetailsDto } from './base-details-dto';
import { IssueAdditionalData } from './issue-additional-data';
import { IssueInfoBase } from './issue-info-base';
import { IssueSeverity } from './issue-severity';
import { IssueType } from './issue-type';
import { UserInfoDto } from './user-info-dto';
export type IssueDetailsDto = BaseDetailsDto & IssueInfoBase & IssueSeverity & IssueType & IssueAdditionalData & {
'reporter'?: UserInfoDto;
'assignee'?: UserInfoDto;
'fixedBy'?: UserInfoDto;
'verifiedBy'?: UserInfoDto;
};
