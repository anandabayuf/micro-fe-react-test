import type { APIResponse } from 'lib/services/api/types';

export type Captcha = {
  otp: string;
  generatedTime: Date;
  requestInterval: number;
};

export type CaptchaRequest = {
  corporateId: string;
  userId: string;
};

export type CaptchaResponse = APIResponse<Captcha>;
