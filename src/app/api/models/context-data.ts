/* tslint:disable */
/* eslint-disable */
import { ProjectInfoDto } from './project-info-dto';
import { UserInfoDto } from './user-info-dto';
export interface ContextData {
  projects?: Array<ProjectInfoDto>;
  user: UserInfoDto;
}
