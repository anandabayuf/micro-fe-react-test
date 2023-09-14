import type { APIResponse } from 'lib/services/api/types';

export type WidgetManagementType = {
  id: string;
  name: string;
  desc?: string;
};

export type GetWidgetResponseType = APIResponse<Array<WidgetManagementType>> & {
  totalRecord: number;
  offset: number;
  page: number;
  size: number;
};
