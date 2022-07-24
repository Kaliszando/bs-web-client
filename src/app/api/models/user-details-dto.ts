/* tslint:disable */
/* eslint-disable */
import { UserInfoDto } from './user-info-dto';
export type UserDetailsDto = {
'version': number;
'createdBy': string;
'createdOn': string;
'modifiedBy': string;
'modifiedOn': string;
} & UserInfoDto & {
'data': string;
};
