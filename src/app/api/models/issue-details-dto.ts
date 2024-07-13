/* tslint:disable */
/* eslint-disable */
import { BaseDetailsDto } from './base-details-dto';
import { IssueAdditionalData } from './issue-additional-data';
import { IssueInfoBase } from './issue-info-base';
import { UserInfoDto } from './user-info-dto';
export type IssueDetailsDto = BaseDetailsDto & IssueInfoBase & IssueAdditionalData & {
'reporter'?: UserInfoDto;
'assignee'?: UserInfoDto;
'fixedBy'?: UserInfoDto;
'verifiedBy'?: UserInfoDto;
};
