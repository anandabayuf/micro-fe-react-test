import type { AxiosRequestConfig } from 'axios';

import { securedAPI } from 'lib/services/api/configs';

const REJECT_TASK_PATH = 'wf/makerapprover/reject';

export const rejectTask = (body: AxiosRequestConfig['data']) => {
  return securedAPI(REJECT_TASK_PATH, 'POST', '', body);
};
