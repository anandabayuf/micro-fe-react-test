import getPublicKey from 'lib/services/api/auth/publicKey';
import { NONAUTHORIZED_HEADERS } from 'lib/services/api/configs';
import { API_HOST } from 'lib/services/api/constants';
import { fetcher } from 'lib/services/api/fetcher';
import { encryptPassword, getBasicAuth } from 'lib/utils/auth';

import type { LoginRequest, LoginResponse } from './types';

const LOGIN_RESOURCE_PATH = 'login';

const login = async (request: LoginRequest) => {
  const { username, password, captcha } = request;
  const publicKeyRes = await getPublicKey();
  const publicKey = publicKeyRes.content?.publicKey ?? '';

  return fetcher<LoginResponse, LoginRequest>({
    url: `${API_HOST}/${LOGIN_RESOURCE_PATH}`,
    method: 'POST',
    headers: {
      ...NONAUTHORIZED_HEADERS,
      Authorization: getBasicAuth(username, password, publicKey),
      companyId: request.companyId,
      otp: encryptPassword(captcha as string, publicKey),
    },
  });
};

export default login;
