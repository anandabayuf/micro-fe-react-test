import type { APIResponse } from 'lib/services/api/types';

export type ChangePasswordRequest = {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

export type ChangePasswordResponse = APIResponse;
