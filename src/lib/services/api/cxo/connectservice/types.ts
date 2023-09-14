import type { APIError, APIResponse } from 'lib/services/api/types';

export type ConnectServiceRequest = {
  corporateId?: string;
  userId: string;
  password: string;
  channelId: string;
};

export type ConnectServiceResponse = APIResponse;

export type ConnectServiceErrorResponse = APIError;
