import * as React from 'react';

import { useConnectedChannels } from 'lib/services/api/cxo/channelportal';
import type { GetConnectedChannelsParams } from 'lib/services/api/cxo/channelportal/types';

export const useChannels = () => {
  const [params] = React.useState<GetConnectedChannelsParams>({
    page: 0,
    direction: 'ASC',
    sortBy: 'channel',
    size: 100,
  });
  const { data: connectedChannelsData, mutate } = useConnectedChannels(params);
  const data = React.useMemo(
    () => connectedChannelsData?.content,
    [connectedChannelsData?.content]
  );

  return { data, mutate };
};
