import { HTTPMethod } from '../../constants';
import { useSecuredAPISWRHook } from 'lib/services/api/configs';

import type { GetMyApprovalParams, GetMyApprovalResponse } from './types';

const GET_MY_APPROVAL_PATH = 'wf/makerapproverview';

// const interval = 10 * 1000;

export const useMyApprovalGetList = (
  params: GetMyApprovalParams,
  isReady = true
) =>
  useSecuredAPISWRHook<GetMyApprovalResponse, unknown>({
    path: GET_MY_APPROVAL_PATH,
    method: HTTPMethod.GET,
    refreshInterval: 5000,
    params,
    isReady,
  });
