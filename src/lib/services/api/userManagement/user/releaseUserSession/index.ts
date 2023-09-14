import { securedAPI } from 'lib/services/api/configs';

const RELEASE_USER_MANAGEMENT = 'usermanagement/release';

const releaseUserManagement = (id: string) => {
  return securedAPI(`${RELEASE_USER_MANAGEMENT}/${id}`, 'POST');
};

export default releaseUserManagement;
