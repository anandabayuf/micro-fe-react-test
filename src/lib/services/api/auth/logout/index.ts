import { securedAPI } from 'lib/services/api/configs';

const LOGOUT_RESOURCE_PATH = 'logout';

const logout = () => {
  return securedAPI(LOGOUT_RESOURCE_PATH, 'POST');
};

export default logout;
