import { securedAPI } from 'lib/services/api/configs';
import { HTTPMethod } from 'lib/services/api/constants';

import type { GetPortalOtpResponse } from './types';

const GET_PORTAL_OTP_RESOURCE_PATH = 'channelportal/getOtp';

export const getPortalOtp = (id: string) =>
  securedAPI<GetPortalOtpResponse, unknown>(
    `${GET_PORTAL_OTP_RESOURCE_PATH}/${id}`,
    HTTPMethod.GET
  );
