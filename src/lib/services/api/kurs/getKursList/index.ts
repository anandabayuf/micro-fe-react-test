import { TKursListApi } from "lib/components/dashboard/kurs/types";
import { useSecuredAPISWRHook } from "../../configs";
import { HTTPMethod } from "../../constants";

const GET_KURS_LIST = "dashboardother/getexchangerate";

export const useGetKursList = () =>
  useSecuredAPISWRHook<TKursListApi, unknown>({
    path: GET_KURS_LIST,
    isReady: true,
    method: HTTPMethod.GET,
  });
