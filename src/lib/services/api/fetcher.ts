import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

import { HTTPMethod } from './constants';
import { fetchErrorHandler } from './error_handler';

type FetcherArgs<ReqType, ResType> = {
  url: string;
  params?: AxiosRequestConfig['params'];
  headers?: AxiosRequestConfig['headers'];
  data?: ReqType | AxiosRequestConfig['data'];
  method: AxiosRequestConfig['method'];
  callback?: (res: AxiosResponse<ResType>) => void;
};

axios.interceptors.response.use(undefined, fetchErrorHandler);

export const fetcher = <ResType, ReqType = unknown>({
  url,
  params,
  headers,
  data,
  method = HTTPMethod.GET,
  callback,
}: FetcherArgs<ReqType, ResType>) =>
  axios(url, { params, headers, data, method }).then(
    (res: AxiosResponse<ResType>) => {
      if (callback) callback(res);
      return {
        headers: res?.headers,
        ...res.data,
      };
    }
  );
