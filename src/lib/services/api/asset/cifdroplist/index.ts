import { useSecuredAPISWRHook } from 'lib/services/api/configs';

import type { CIFDroplistResponse } from './types';

const CIF_DROPLIST_RESOURCE_PATH = 'dashboardasset/cifdroplist';

export const useCIFDroplist = () =>
  useSecuredAPISWRHook<CIFDroplistResponse, unknown>({
    path: CIF_DROPLIST_RESOURCE_PATH,
  });
