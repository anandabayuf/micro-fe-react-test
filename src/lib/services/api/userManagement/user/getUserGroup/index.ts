import { useSecuredAPISWRHook } from 'lib/services/api/configs';
import { HTTPMethod } from 'lib/services/api/constants';

import type { GetUserGroupParams, GetUserGroupResponse } from './types';

const GET_USER_GROUP_PATH = 'usermanagementview/usergroup';

export const useConnectedUserGroup = (
  params: GetUserGroupParams,
  isReady = true
) =>
  useSecuredAPISWRHook<GetUserGroupResponse, unknown>({
    path: GET_USER_GROUP_PATH,
    isReady,
    params,
    refreshInterval: 10000,
    method: HTTPMethod.GET,
  });
