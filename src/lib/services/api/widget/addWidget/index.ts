import type { AxiosRequestConfig } from 'axios';

import { securedAPI } from 'lib/services/api/configs';

const ADD_WIDGET_PATH = 'widgetmanagement';

const updateWidget = (form: AxiosRequestConfig['data']) => {
  return securedAPI(ADD_WIDGET_PATH, 'POST', '', form);
};

export default updateWidget;
