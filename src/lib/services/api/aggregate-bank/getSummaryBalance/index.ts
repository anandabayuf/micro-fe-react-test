import { useSecuredAPISWRHook } from "lib/services/api/configs";
import {
  GetSummaryBalanceAllResponse,
  GetSummaryBalanceResponse,
  TUseSummaryBalanceAllParams,
  TUseSummaryCurrentParams,
  TUseSummarySavingParams,
} from "./type";

const GET_SUMMARY_CURRENT_PATH = "dashboardotherbank/summarybalance/current";
const GET_SUMMARY_SAVING_PATH = "dashboardotherbank/summarybalance/saving";
const GET_SUMMARY_BALANCE_ALL_PATH = "dashboardotherbank/summarybalance/all";

export const useSummaryCurrent = ({ corporateId }: TUseSummaryCurrentParams) =>
  useSecuredAPISWRHook<GetSummaryBalanceResponse>({
    path: GET_SUMMARY_CURRENT_PATH,
    method: "POST",
    body: {
      corporateId,
      needGetChildCif: true,
    },
    isReady: corporateId ? true : false,
  });

export const useSummarySaving = ({ corporateId }: TUseSummarySavingParams) =>
  useSecuredAPISWRHook<GetSummaryBalanceResponse>({
    path: GET_SUMMARY_SAVING_PATH,
    method: "POST",
    body: {
      corporateId,
      needGetChildCif: true,
    },
    isReady: corporateId ? true : false,
  });

export const useSummaryBalanceAll = ({
  corporateId,
  needGetChildCif = true,
}: TUseSummaryBalanceAllParams) =>
  useSecuredAPISWRHook<GetSummaryBalanceAllResponse>({
    path: GET_SUMMARY_BALANCE_ALL_PATH,
    method: "POST",
    body: {
      corporateId,
      needGetChildCif: needGetChildCif,
    },
    isReady: corporateId ? true : false,
  });
