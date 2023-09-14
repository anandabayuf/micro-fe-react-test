import { useSecuredAPISWRHook } from 'lib/services/api/configs';
import { HTTPMethod } from 'lib/services/api/constants';

import type { GetCashflowRequest, GetCashflowResponse } from './types';

const GET_CASHFLOW_RESOURCE_PATH = 'dashboardcashflow/cashflow';

export const useCashflowTrend = (req: GetCashflowRequest) =>
  useSecuredAPISWRHook<GetCashflowResponse, GetCashflowRequest>({
    path: GET_CASHFLOW_RESOURCE_PATH,
    method: HTTPMethod.POST,
    body: req,
  });
