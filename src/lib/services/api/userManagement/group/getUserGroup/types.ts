import type { APIResponse } from 'lib/services/api/types';

export interface MenuList {
  id: string;
  name: string;
  viewOnly: boolean;
}

export interface Details {
  menuList: MenuList[];
}

export interface Corporate {
  id: string;
  name: string;
}

export interface UserGroupModel {
  id: string;
  name: string;
  description: string;
  details: Details;
  corporate: Corporate;
}

export type GetUserGroupParams = {
  page?: number | '';
  sortBy?: string | 'name';
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
