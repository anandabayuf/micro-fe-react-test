import { HTTPMethod, API_HOST } from 'lib/services/api/constants';
import { fetcher } from 'lib/services/api/fetcher';

import type { CaptchaRequest, CaptchaResponse } from './types';

const CAPTCHA_RESOURCE_PATH = 'public/captcha';

export const getCaptcha = (params: CaptchaRequest) => {
  return fetcher<CaptchaResponse>({
    url: `${API_HOST}/${CAPTCHA_RESOURCE_PATH}/${params.corporateId}/${params.userId}`,
    method: HTTPMethod.GET,
  });
};
