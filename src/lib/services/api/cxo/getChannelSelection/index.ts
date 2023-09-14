import { useSecuredAPISWRHook } from 'lib/services/api/configs';

import type { GetChannelSelectionResponse } from './types';

const GET_CHANNEL_SELECTION_RESOURCE_PATH = 'channelportal/channel';

export const useChannelSelection = () =>
  useSecuredAPISWRHook<GetChannelSelectionResponse>({
    path: GET_CHANNEL_SELECTION_RESOURCE_PATH,
  });
