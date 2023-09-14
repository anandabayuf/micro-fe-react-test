import { useSecuredAPISWRHook } from 'lib/services/api/configs';
import { HTTPMethod } from 'lib/services/api/constants';

import type {
  GetConnectedChannelsParams,
  GetConnectedChannelsResponse,
} from './types';

const CHANNEL_PORTAL_RESOURCE_PATH = 'channelportal';

export const useConnectedChannels = (
  params: GetConnectedChannelsParams,
  isReady = true
) =>
  useSecuredAPISWRHook<GetConnectedChannelsResponse, unknown>({
    path: CHANNEL_PORTAL_RESOURCE_PATH,
    method: HTTPMethod.GET,
    params,
    isReady,
  });
