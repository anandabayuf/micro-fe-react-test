import { TKursIconsApi } from "lib/components/dashboard/kurs/types";
import { useSecuredAPISWRHook } from "../../configs";
import { HTTPMethod } from "../../constants";

const GET_KURS_ICON = "dashboardother/exchangeratedashboard";

export const useGetKursIcons = () =>
  useSecuredAPISWRHook<TKursIconsApi, unknown>({
    path: GET_KURS_ICON,
    isReady: true,
    method: HTTPMethod.GET,
  });
