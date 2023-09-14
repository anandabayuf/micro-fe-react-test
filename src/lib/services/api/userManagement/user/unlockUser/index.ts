import { securedAPI } from 'lib/services/api/configs';

const UNLOCK_USER_MANAGEMENT = 'usermanagement/unlock';

const unlockUserManagement = (id: string) => {
  return securedAPI(`${UNLOCK_USER_MANAGEMENT}/${id}`, 'POST');
};

export default unlockUserManagement;
