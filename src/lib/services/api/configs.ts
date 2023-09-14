import type { AxiosRequestConfig } from 'axios';
import useSWR from 'swr';

import {
  API_HOST,
  HTTPMethod,
  immutableOptions,
} from 'lib/services/api/constants';
import { fetcher } from 'lib/services/api/fetcher';
import { INITIAL_AUTH_STORE_VALUE, useAuth } from 'lib/store/auth';
import type { SWRHookResponse } from 'lib/types/swr';

import type { UseSecuredAPISWRHookArgs, APIError } from './types';

const applicationJson = 'application/json';

export const NONAUTHORIZED_HEADERS: AxiosRequestConfig['headers'] = {
  Accept: applicationJson,
  'Content-Type': applicationJson,
};

const { setToken } = useAuth.getState();

export const getAuthorizedHeaders = () => {
  const user = JSON.parse(
    localStorage.getItem('auth') ||
      JSON.stringify({ state: INITIAL_AUTH_STORE_VALUE })
  ).state;

  return {
    ...NONAUTHORIZED_HEADERS,
    Authorization: `Bearer ${user.token}`,
    companyId: user.companyId || '',
  };
};

export const securedAPI = async <ResType, ReqType>(
  api_path: string,
  method: AxiosRequestConfig['method'] = 'POST',
  params?: AxiosRequestConfig['params'],
  body?: ReqType | AxiosRequestConfig['data']
) =>
  fetcher<ResType, ReqType>({
    url: `${API_HOST}/secured/${api_path}`,
    params,
    headers: getAuthorizedHeaders(),
    data: body,
    method,
    callback: (res) => {
      const accessToken = res?.headers?.access_token;
      if (accessToken) setToken(accessToken);
    },
  });

/**
 * Use this for GET only and make sure params is stable variable (state)
 */
export const useSecuredAPISWRHook = <ResType, ErrResType = APIError>({
  path,
  method = HTTPMethod.GET,
  params,
  body,
  isReady = true,
  refreshInterval,
  isImmutable = true,
  shouldRetryOnError = false,
}: UseSecuredAPISWRHookArgs): SWRHookResponse<ResType, ErrResType> => {
  const { data, error, mutate } = useSWR<ResType, ErrResType & APIError>(
    isReady ? [path, method, params, body] : null,
    securedAPI,
    {
      refreshInterval,
      ...(isImmutable ? immutableOptions : undefined),
      shouldRetryOnError,
    }
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

export const nonAuthorizedAPI = <ResType, ReqType>(
  api_path: string,
  method: AxiosRequestConfig['method'] = 'POST',
  params?: AxiosRequestConfig['params'],
  body?: ReqType | AxiosRequestConfig['data']
) =>
  fetcher<ResType, ReqType>({
    url: `${API_HOST}${api_path}`,
    params,
    headers: NONAUTHORIZED_HEADERS,
    data: body,
    method,
  });
