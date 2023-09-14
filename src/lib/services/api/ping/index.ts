import { HTTPMethod } from "../constants";
import { useSecuredAPISWRHook } from "lib/services/api/configs";

import type { PingResponse } from "./types";

const PING_AUTH_PATH = "ping";

export const usePingAuth = (token: string) =>
  useSecuredAPISWRHook<PingResponse, unknown>({
    path: PING_AUTH_PATH,
    method: HTTPMethod.GET,
    isReady: token ? true : false,
  });
