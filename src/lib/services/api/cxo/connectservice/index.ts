import getPublicKey from 'lib/services/api/auth/publicKey';
import { securedAPI } from 'lib/services/api/configs';
import { encryptPassword } from 'lib/utils/auth';

import type { ConnectServiceRequest, ConnectServiceResponse } from './types';

const CONNECT_SERVICE_RESOURCE_PATH = 'channelportal/connectservice';

export const connectService = async (req: ConnectServiceRequest) => {
  const publicKeyRes = await getPublicKey();
  const transformedRequest: ConnectServiceRequest = {
    ...req,
    password: encryptPassword(
      req.password,
      publicKeyRes.content?.publicKey ?? ''
    ),
  };

  return securedAPI<ConnectServiceResponse, ConnectServiceRequest>(
    CONNECT_SERVICE_RESOURCE_PATH,
    'POST',
    undefined,
    transformedRequest
  );
};
