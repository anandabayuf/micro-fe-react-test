import type { APIResponse } from 'lib/services/api/types';

export type GetConnectedChannelsParams = {
  page?: number;
  sortBy?: keyof Omit<ConnectedChannelEntry, 'id'>;
  direction?: 'ASC' | 'DESC';
  size?: number;
};

export type ConnectedChannelEntry = {
  id: string;
  corporateId: string;
  channel: string;
  channelName: string;
  userId: string;
};

export type GetConnectedChannelsResponse = APIResponse<
  Array<ConnectedChannelEntry>
> & {
  totalRecord: number;
  offset: number;
  page: number;
  size: number;
};
