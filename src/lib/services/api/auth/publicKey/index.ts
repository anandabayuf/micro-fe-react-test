import { HTTPMethod, IAM_HOST } from 'lib/services/api/constants';
import { fetcher } from 'lib/services/api/fetcher';

import type { PublicKeyResponse } from './types';

const PUBLICKEY_RESOURCE_PATH = 'public/publickey';

const getPublicKey = () => {
  return fetcher<PublicKeyResponse>({
    url: `${IAM_HOST}/${PUBLICKEY_RESOURCE_PATH}`,
    method: HTTPMethod.GET,
  });
};

export default getPublicKey;
