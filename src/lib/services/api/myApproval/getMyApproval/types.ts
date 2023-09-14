import type { APIResponse } from 'lib/services/api/types';

export type GetMyApprovalParams = {
  searchValue?: string;
  page?: number;
  size?: number;
  sortBy?: string;
  direction?: string;
  fromDate?: string;
  toDate?: string;
};

export type MyApprovalContentModel = {
  id: string;
  createdDate: Date;
  createdBy: string;
  createdByUsername: string;
  moduleName: string;
  menuCode: string;
  status: string;
  orderId: string;
};

export type GetMyApprovalResponse = APIResponse<
  Array<MyApprovalContentModel>
> & {
  status: string;
  message?: string;
  business: boolean;
  error: boolean;
  totalRecord: number;
  offset: number;
  page: number;
  size: number;
  sort: string[];
};
