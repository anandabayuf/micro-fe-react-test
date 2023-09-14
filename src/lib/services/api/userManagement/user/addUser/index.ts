import type { AxiosRequestConfig } from 'axios';

import { securedAPI } from 'lib/services/api/configs';

const ADD_USER_MANAGEMENT_PATH = 'usermanagement/add';

const addUser = (form: AxiosRequestConfig['data']) => {
  return securedAPI(ADD_USER_MANAGEMENT_PATH, 'POST', '', form);
};

export default addUser;
