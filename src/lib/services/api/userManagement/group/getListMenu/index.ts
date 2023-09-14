import { useSecuredAPISWRHook } from 'lib/services/api/configs';
import { HTTPMethod } from 'lib/services/api/constants';

import type { GetUserGroupParams, GetMenuGroupResponse } from './types';

const GET_MENU_GROUP_PATH = 'usergroupview/menu';

export const useConnectMenuGroup = (
  params?: GetUserGroupParams,
  isReady = true
) =>
  useSecuredAPISWRHook<GetMenuGroupResponse, unknown>({
    path: GET_MENU_GROUP_PATH,
    isReady,
    params,
    refreshInterval: 10000,
    method: HTTPMethod.GET,
  });
