import { useSecuredAPISWRHook } from 'lib/services/api/configs';
import { HTTPMethod } from 'lib/services/api/constants';

import type { GetUserListGoupResponse } from './types';

const GET_USER_LIST_GROUP_PATH = 'usergroupview/userlist/';

export const useGetUserListGroup = (params?: string, isReady = true) =>
  useSecuredAPISWRHook<GetUserListGoupResponse, unknown>({
    path: GET_USER_LIST_GROUP_PATH + params,
    isReady,
    // refreshInterval: 10000,
    method: HTTPMethod.GET,
  });
