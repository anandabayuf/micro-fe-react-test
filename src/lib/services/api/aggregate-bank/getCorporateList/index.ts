import { useSecuredAPISWRHook } from "lib/services/api/configs";
import { GetCorporateListResponse } from "./type";

const GET_CORPORATE_LIST = "dashboardotherbank/corporatelist";

export const useCorporateList = () =>
  useSecuredAPISWRHook<GetCorporateListResponse>({
    path: GET_CORPORATE_LIST,
    method: "GET",
  });
