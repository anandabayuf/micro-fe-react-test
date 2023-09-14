import type { APIError, APIResponse } from 'lib/services/api/types';

export type ForgotPasswordRequest = {
  email: string;
  identifier: string;
  corporateId: string;
};

export type ForgotPasswordResponse = APIResponse;

export type ForgotPasswordErrorResponse = APIError;
