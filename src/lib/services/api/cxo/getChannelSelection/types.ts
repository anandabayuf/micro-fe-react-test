import type { APIResponse } from 'lib/services/api/types';

export type ChannelEntry = {
  id: string;
  name: string;
  needcorporate: boolean;
};

export type GetChannelSelectionResponse = APIResponse<Array<ChannelEntry>>;
