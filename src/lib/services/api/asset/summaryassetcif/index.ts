import { useSecuredAPISWRHook } from 'lib/services/api/configs';
import { HTTPMethod } from 'lib/services/api/constants';

import type { SummaryAssetCIFParams, SummaryAssetCIFResponse } from './types';

const SUMMARY_ASSET_CIF_RESOURCE_PATH = 'dashboardasset/summaryassetcif';

export const useSummaryAssetCIF = (params: SummaryAssetCIFParams) =>
  useSecuredAPISWRHook<SummaryAssetCIFResponse, unknown>({
    path: SUMMARY_ASSET_CIF_RESOURCE_PATH,
    method: HTTPMethod.POST,
    body: params,
  });
