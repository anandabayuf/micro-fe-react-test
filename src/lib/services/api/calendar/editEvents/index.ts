import type { AxiosRequestConfig } from 'axios';

import { securedAPI } from 'lib/services/api/configs';

const EDIT_CALENDAR_EVENT_PATH = 'calendar/edit';

const editCalendarEvent = (form: AxiosRequestConfig['data']) => {
  return securedAPI(EDIT_CALENDAR_EVENT_PATH, 'POST', '', form);
};

export default editCalendarEvent;
