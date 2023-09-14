import { useSecuredAPISWRHook } from "lib/services/api/configs";
import { GetBalanceTrendParams, GetBalanceTrendResponse } from "./type";

const GET_BALANCE_TREND = "dashboardotherbank/getbalancetrend";

export const useGetBalanceTrend = (body: GetBalanceTrendParams) =>
  useSecuredAPISWRHook<GetBalanceTrendResponse>({
    path: GET_BALANCE_TREND,
    method: "POST",
    body: {
      ...body,
    },
    isReady: body.corporate && body.period ? true : false,
  });
