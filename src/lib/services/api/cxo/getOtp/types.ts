import type { APIResponse } from 'lib/services/api/types';

export type GetPortalOtpResponse = APIResponse<{
  userId: string;
  corporateId: string;
  otp: string;
  redirecturi: string;
}>;
