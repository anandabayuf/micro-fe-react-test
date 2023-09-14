import type { APIResponse } from 'lib/services/api/types';

type MenuFeature = {
  id: string;
  name: string;
  description: string;
  viewOnly: boolean;
};

export interface MenuList {
  id: string;
  name: string;
  viewOnly: boolean;
  hasAccess: boolean;
  features: MenuFeature[];
  subHeader: string;
}

export type GetUserGroupParams = {
  page?: number | '';
  sortBy?: string | 'name';
  direction?: string | 'DESC' | 'ASC';
  size?: number | '';
  searchValue?: string;
};

export type GetMenuGroupResponse = APIResponse<Array<MenuList>> & {
  status: string | 'SUCCESS' | 'FAILED';
  error: boolean;
  totalRecord: number;
  offset: number;
  page: number;
  size: number;
  sort: string[];
};
