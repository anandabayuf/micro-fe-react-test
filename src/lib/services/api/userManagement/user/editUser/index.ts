import type { AxiosRequestConfig } from 'axios';

import { securedAPI } from 'lib/services/api/configs';

const EDIT_USER_MANAGEMENT_PATH = 'usermanagement/edit';

const editUserManagement = (form: AxiosRequestConfig['data']) => {
  return securedAPI(EDIT_USER_MANAGEMENT_PATH, 'POST', '', form);
};

export default editUserManagement;
