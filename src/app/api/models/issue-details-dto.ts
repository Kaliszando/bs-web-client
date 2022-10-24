/* tslint:disable */
/* eslint-disable */
import { BaseDetailsDto } from './base-details-dto';
import { IssueInfoBase } from './issue-info-base';
import { IssueSeverity } from './issue-severity';
import { IssueType } from './issue-type';
import { UserInfoDto } from './user-info-dto';
export type IssueDetailsDto = BaseDetailsDto & IssueInfoBase & IssueSeverity & IssueType & {
'description'?: string;
'hoursSpent'?: number;
'daysOld'?: number;
'components'?: Array<string>;
'codeVersion'?: string;
'location'?: string;
'attachments'?: Array<Blob>;
} & {
'reporter'?: UserInfoDto;
'assignee'?: UserInfoDto;
'fixedBy'?: UserInfoDto;
'verifiedBy'?: UserInfoDto;
};
