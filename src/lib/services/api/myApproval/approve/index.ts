import type { AxiosRequestConfig } from 'axios';

import { securedAPI } from 'lib/services/api/configs';

const APPROVE_TASK_PATH = 'wf/makerapprover/approve';

export const approveTask = (body: AxiosRequestConfig['data']) => {
  return securedAPI(APPROVE_TASK_PATH, 'POST', '', body);
};
