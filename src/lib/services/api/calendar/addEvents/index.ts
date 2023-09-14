import type { AxiosRequestConfig } from 'axios';

import { securedAPI } from 'lib/services/api/configs';

const ADD_CALENDAR_PATH = 'calendar/add';

const addCalendar = (form: AxiosRequestConfig['data']) => {
  return securedAPI(ADD_CALENDAR_PATH, 'POST', '', form);
};

export default addCalendar;
