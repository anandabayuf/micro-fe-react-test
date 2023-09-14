import { useSecuredAPISWRHook } from 'lib/services/api/configs';

import type { GetBalanceInOutTypeResponse } from './types';

const GET_BALANCE_TYPE_LIST_RESOURCE_PATH =
  'dashboardcashflow/balanceinouttype';

export const useBalanceTypeList = () =>
  useSecuredAPISWRHook<GetBalanceInOutTypeResponse>({
    path: GET_BALANCE_TYPE_LIST_RESOURCE_PATH,
  });
