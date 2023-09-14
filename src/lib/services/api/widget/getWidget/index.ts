import { useSecuredAPISWRHook } from 'lib/services/api/configs';
import { HTTPMethod } from 'lib/services/api/constants';

import type { GetWidgetResponseType } from './types';

export const GET_WIDGET_LISTS = 'widgetmanagement';
export const GET_WIDGET_DEFAULT = 'widgetmanagement/default';

export const useGetWidgetList = (isReady = true) =>
  useSecuredAPISWRHook<GetWidgetResponseType, unknown>({
    path: GET_WIDGET_LISTS,
    method: HTTPMethod.GET,
    isReady,
  });

export const useGetWidgetDefault = (isReady = true) =>
  useSecuredAPISWRHook<GetWidgetResponseType, unknown>({
    path: GET_WIDGET_DEFAULT,
    method: HTTPMethod.GET,
    isReady,
  });
