import type { APIResponse } from 'lib/services/api/types';

export interface UserList {
  id: string;
  userId: string;
  name: string;
}

export type GetUserListGroupParams = {
  id: string;
};

export type GetUserListGoupResponse = APIResponse<Array<UserList>> & {
  status: string | 'SUCCESS' | 'FAILED';
  error: boolean;
  totalRecord: number;
  offset: number;
  page: number;
  size: number;
  sort: string[];
};
