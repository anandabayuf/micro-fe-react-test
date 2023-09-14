import { useSecuredAPISWRHook } from "lib/services/api/configs";
import { GetBankListResponse } from "./type";

const GET_BANK_LIST = "dashboardotherbank/getbank";

export const useBankList = () =>
  useSecuredAPISWRHook<GetBankListResponse>({
    path: GET_BANK_LIST,
    method: "GET",
  });
