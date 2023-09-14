import { useSecuredAPISWRHook } from 'lib/services/api/configs';
import { HTTPMethod } from 'lib/services/api/constants';

import type { GetCalendarParams, GetCalendarResponse } from './types';

const GET_NEXT_EVENTS_CALENDAR = 'calendarview/nextmonth';

export const useConnectNextEventCalendar = (
  params?: GetCalendarParams,
  isReady = true
) =>
  useSecuredAPISWRHook<GetCalendarResponse, unknown>({
    path: GET_NEXT_EVENTS_CALENDAR,
    method: HTTPMethod.GET,
    params,
    isReady,
  });
