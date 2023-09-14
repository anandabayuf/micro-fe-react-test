import { nonAuthorizedAPI } from 'lib/services/api/configs';

import type { ForgotPasswordRequest, ForgotPasswordResponse } from './types';

const FORGOT_PASSWORD_RESOURCE_PATH = '/public/forgotpassword';

export const forgotPassword = (req: ForgotPasswordRequest) =>
  nonAuthorizedAPI<ForgotPasswordResponse, ForgotPasswordRequest>(
    FORGOT_PASSWORD_RESOURCE_PATH,
    'POST',
    undefined,
    req
  );
