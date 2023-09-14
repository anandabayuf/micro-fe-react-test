import { useSecuredAPISWRHook } from 'lib/services/api/configs';

import type { GetDashboardPeriodResponse } from './types';

const GET_DASHBOARD_PERIOD_RESOURCE_PATH = 'dashboardasset/getdashboardperiod';

export const useDashboardPeriod = () =>
  useSecuredAPISWRHook<GetDashboardPeriodResponse, unknown>({
    path: GET_DASHBOARD_PERIOD_RESOURCE_PATH,
  });
