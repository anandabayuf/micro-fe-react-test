import { useSecuredAPISWRHook } from "lib/services/api/configs";
import { HTTPMethod } from "lib/services/api/constants";

import type { GetUserSearchParams, GetUserSearchResponse } from "./types";

const GET_USER_SEARCH_PATH = "usermanagementview";

export const useConnectedSearchUser = (
  params: GetUserSearchParams,
  isReady = true
) =>
  useSecuredAPISWRHook<GetUserSearchResponse, unknown>({
    path: GET_USER_SEARCH_PATH,
    isReady,
    params,
    refreshInterval: 10000,
    method: HTTPMethod.GET,
    isImmutable: false,
  });
