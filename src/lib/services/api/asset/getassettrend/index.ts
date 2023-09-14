import { useSecuredAPISWRHook } from 'lib/services/api/configs';
import { HTTPMethod } from 'lib/services/api/constants';

import type { GetAssetTrendParams, GetAssetTrendResponse } from './types';

const GET_ASSET_TREND_RESOURCE_PATH = 'dashboardasset/getasettrend';

export const useAssetTrend = (params: GetAssetTrendParams) =>
  useSecuredAPISWRHook<GetAssetTrendResponse, unknown>({
    path: GET_ASSET_TREND_RESOURCE_PATH,
    method: HTTPMethod.POST,
    body: params,
  });
