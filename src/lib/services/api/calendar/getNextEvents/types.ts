import type { CalendarModel } from 'lib/components/calendar/interface';
import type { APIResponse } from 'lib/services/api/types';

export type GetCalendarParams = {
  month: number | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 11 | 12;
  year: number | Date['getFullYear'];
};

export type GetCalendarResponse = APIResponse<Array<CalendarModel>> & {
  totalRecord: number;
  offset: number;
  page: number;
  size: number;
};
