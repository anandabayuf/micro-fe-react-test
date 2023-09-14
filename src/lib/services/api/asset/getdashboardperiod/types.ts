import type { APIResponse } from 'lib/services/api/types';

export type DashboardPeriod = {
  code: string;
  name: string;
};

export type GetDashboardPeriodResponse = APIResponse<Array<DashboardPeriod>>;
