import { securedAPI } from 'lib/services/api/configs';

const DELETE_CALENDAR_EVENT_PATH = 'calendar/delete';

const delCalendarEvent = (id: string) => {
  return securedAPI(`${DELETE_CALENDAR_EVENT_PATH}/${id}`, 'POST');
};

export default delCalendarEvent;
