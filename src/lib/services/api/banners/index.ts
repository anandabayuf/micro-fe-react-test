import { nonAuthorizedAPI } from 'lib/services/api/configs';
import { HTTPMethod } from 'lib/services/api/constants';

import type { GetBannerResponse } from './types';

export const GET_BANNERS = '/public/bannercarousel/';

export const useConnectBanner = (id: number) =>
  nonAuthorizedAPI<GetBannerResponse, unknown>(
    GET_BANNERS + id,
    HTTPMethod.GET,
    undefined,
    undefined
  );
