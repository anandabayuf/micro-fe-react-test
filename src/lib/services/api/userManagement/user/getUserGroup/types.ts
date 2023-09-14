import type { APIResponse } from 'lib/services/api/types';

export interface UserGroupModel {
  id: string;
  name: string;
  admin: boolean;
}

export type GetUserGroupParams = {
  page?: number | '';
  sortBy?: string | 'name' | 'role' | 'userId' | 'email' | 'phone';
  direction?: string | 'DESC' | 'ASC';
  size?: number | '';
  searchValue?: string;
};

export type GetUserGroupResponse = APIResponse<Array<UserGroupModel>> & {
  status: string | 'SUCCESS' | 'FAILED';
  error: boolean;
  totalRecord: number;
  offset: number;
  page: number;
  size: number;
  sort: string[];
};
