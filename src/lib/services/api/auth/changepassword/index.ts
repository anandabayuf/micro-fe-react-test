import getPublicKey from 'lib/services/api/auth/publicKey';
import { securedAPI } from 'lib/services/api/configs';
import { encryptPassword } from 'lib/utils/auth';

import type { ChangePasswordRequest, ChangePasswordResponse } from './types';

const CHANGE_PASSWORD_RESOURCE_PATH = 'changepassword';

export const changePassword = async (req: ChangePasswordRequest) => {
  const publicKeyRes = await getPublicKey();
  const publicKey = publicKeyRes.content?.publicKey ?? '';
  const encryptedNewPassword = encryptPassword(req.newPassword, publicKey);

  const transformedRequest: ChangePasswordRequest = {
    oldPassword: encryptPassword(req.oldPassword, publicKey),
    newPassword: encryptedNewPassword,
    confirmNewPassword: encryptedNewPassword,
  };

  return securedAPI<ChangePasswordResponse, ChangePasswordRequest>(
    CHANGE_PASSWORD_RESOURCE_PATH,
    'POST',
    undefined,
    transformedRequest
  );
};
