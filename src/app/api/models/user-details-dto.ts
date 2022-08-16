/* tslint:disable */
/* eslint-disable */
import { BaseDetailsDto } from './base-details-dto';
import { UserInfoDto } from './user-info-dto';
export type UserDetailsDto = BaseDetailsDto & UserInfoDto & {
'data'?: string;
};
