import { HTTPMethod } from '../../constants';
import { useSecuredAPISWRHook } from 'lib/services/api/configs';

import type { GetMyApprovalDetailResponse } from './types';

const GET_MY_APPROVAL_DETAIL_PATH = 'wf/makerapproverview/detail';

export const useMyApprovalGetDetail = (id: string) =>
  useSecuredAPISWRHook<GetMyApprovalDetailResponse, unknown>({
    path: `${GET_MY_APPROVAL_DETAIL_PATH}/${id}`,
    body: null,
    isReady: true,
    refreshInterval: 5000,
    method: HTTPMethod.GET,
  });
