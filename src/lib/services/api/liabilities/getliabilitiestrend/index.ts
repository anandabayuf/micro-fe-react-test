import { useSecuredAPISWRHook } from 'lib/services/api/configs';
import { HTTPMethod } from 'lib/services/api/constants';

import type {
  GetLiabilitiesTrendParams,
  GetLiabilitiesTrendResponse,
} from './types';

const GET_LIABILITIES_TREND_RESOURCE_PATH =
  'dashboardliabilities/getliabilitiestrend';

export const useLiabilitiesTrend = (params: GetLiabilitiesTrendParams) =>
  useSecuredAPISWRHook<GetLiabilitiesTrendResponse, unknown>({
    path: GET_LIABILITIES_TREND_RESOURCE_PATH,
    method: HTTPMethod.POST,
    body: params,
  });
