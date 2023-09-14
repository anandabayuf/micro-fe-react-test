import type { AxiosRequestConfig } from 'axios';

import { securedAPI } from 'lib/services/api/configs';

const ADD_GROUP_PATH = 'usergroup/add';

const addGroup = (form: AxiosRequestConfig['data']) => {
  return securedAPI(ADD_GROUP_PATH, 'POST', '', form);
};

export default addGroup;
