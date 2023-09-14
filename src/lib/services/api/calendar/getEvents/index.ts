import { useSecuredAPISWRHook } from 'lib/services/api/configs';
import { HTTPMethod } from 'lib/services/api/constants';

import type { GetCalendarParams, GetCalendarResponse } from './types';

export const GET_CALENDAR_EVENT_PATH = 'calendarview';

export const useConnectedCalendar = (
  params: GetCalendarParams,
  isReady = true
) =>
  useSecuredAPISWRHook<GetCalendarResponse, unknown>({
    path: GET_CALENDAR_EVENT_PATH,
    method: HTTPMethod.GET,
    params,
    isReady,
  });
