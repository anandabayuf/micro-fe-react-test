import type { APIResponse } from 'lib/services/api/types';

export type LoginRequest = {
  username: string;
  password: string;
  companyId: string;
  captcha: string | undefined;
};

export type LoginResponse = APIResponse<{
  forceChangePassword?: boolean;
}>;
