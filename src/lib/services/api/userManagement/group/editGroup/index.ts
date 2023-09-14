import type { AxiosRequestConfig } from 'axios';

import { securedAPI } from 'lib/services/api/configs';

const EDIT_GROUP_PATH = 'usergroup/edit';

const editGroup = (form: AxiosRequestConfig['data']) => {
  return securedAPI(EDIT_GROUP_PATH, 'POST', '', form);
};

export default editGroup;
