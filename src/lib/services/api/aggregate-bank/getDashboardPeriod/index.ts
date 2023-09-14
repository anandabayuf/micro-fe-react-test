import { useSecuredAPISWRHook } from "lib/services/api/configs";
import { GetDashboardPeriodResponse } from "./type";

const GET_DASHBOARD_PERIOD = "dashboardotherbank/getdashboardperiod";

export const useDashboardPeriod = () =>
  useSecuredAPISWRHook<GetDashboardPeriodResponse>({
    path: GET_DASHBOARD_PERIOD,
    method: "GET",
  });
