import { useSecuredAPISWRHook } from 'lib/services/api/configs';
import { HTTPMethod } from 'lib/services/api/constants';

import type { GetUserGroupParams, GetUserGroupResponse } from './types';

const GET_USER_GROUP_PATH = 'usergroupview';

export const useConnectedUserGroup = (
  params: GetUserGroupParams,
  isReady = true
) =>
  useSecuredAPISWRHook<GetUserGroupResponse, unknown>({
    params,
    isReady,
    method: HTTPMethod.GET,
    path: GET_USER_GROUP_PATH,
    refreshInterval: 10000,
  });
