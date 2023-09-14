import type { APIResponse } from 'lib/services/api/types';

export type UserGroupModel = {
  id: string;
  name: string;
};

export interface UserModel {
  id: string;
  version: number;
  createdDate: Date;
  createdBy: string;
  updatedDate?: Date;
  updatedBy: string;
  status: string;
  details?: string | null;
  userId: string;
  email: string;
  nik: string;
  mobilePhone: string;
  role: string;
  userGroup: UserGroupModel;
  corporateId: string;
  delete: boolean;
  name: string;
}

export type GetUserSearchParams = {
  page: number;
  sortBy: string | 'name' | 'role' | 'userId' | 'email' | 'phone';
  direction: string | 'DESC' | 'ASC';
  size: number;
  searchValue?: string;
};

export type GetUserSearchResponse = APIResponse<Array<UserModel>> & {
  status: string | 'SUCCESS' | 'FAILED';
  error: boolean;
  totalRecord: number;
  offset: number;
  page: number;
  size: number;
  sort: string[];
};
