import type { APIResponse } from "lib/services/api/types";

export type GetDashboardPeriod = {
  code: string;
  name: string;
};

export type GetDashboardPeriodResponse = APIResponse<GetDashboardPeriod[]>;
