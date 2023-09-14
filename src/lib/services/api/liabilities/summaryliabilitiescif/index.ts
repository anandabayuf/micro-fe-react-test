import { useSecuredAPISWRHook } from 'lib/services/api/configs';
import { HTTPMethod } from 'lib/services/api/constants';

import type {
  SummaryLiabilitiesCIFParams,
  SummaryLiabilitiesCIFResponse,
} from './types';

const SUMMARY_LIABILITIES_CIF_RESOURCE_PATH =
  'dashboardliabilities/summaryliabilitiescif';

export const useSummaryLiabilitiesCIF = (params: SummaryLiabilitiesCIFParams) =>
  useSecuredAPISWRHook<SummaryLiabilitiesCIFResponse, unknown>({
    path: SUMMARY_LIABILITIES_CIF_RESOURCE_PATH,
    method: HTTPMethod.POST,
    body: params,
  });
