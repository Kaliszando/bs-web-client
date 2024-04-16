/* tslint:disable */
/* eslint-disable */
import { BaseDetailsDto } from './base-details-dto';
import { UserAdditionalData } from './user-additional-data';
import { UserInfoDto } from './user-info-dto';
export type UserDetailsDto = BaseDetailsDto & UserInfoDto & UserAdditionalData;
