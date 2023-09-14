import { useSecuredAPISWRHook } from "lib/services/api/configs";
import { GetBalanceDetailParams, GetBalanceDetailResponse } from "./type";

const GET_BALANCE_DETAIL_PATH = "dashboardotherbank/detail";

export const useGetBalanceDetail = (params: GetBalanceDetailParams) =>
  useSecuredAPISWRHook<GetBalanceDetailResponse>({
    path: GET_BALANCE_DETAIL_PATH,
    method: "GET",
    params: {
      ...params,
    },
    isReady: params.corporate ? true : false,
  });
