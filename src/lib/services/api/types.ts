import type { AxiosError, AxiosRequestConfig } from "axios";

export type APIResponse<T = unknown> = {
  status: string;
  message?: string;
  business: boolean;
  moduleName?: string;
  error: boolean;
  totalRecord?: number;
  content?: T;
};

export type DefaultErrorFields = {
  propertyName?: string;
};

export type APIErrorResponse<ErrorResponse = DefaultErrorFields> = APIResponse &
  ErrorResponse;

export type APIError<ErrorResponse = DefaultErrorFields> = AxiosError<
  APIErrorResponse<ErrorResponse>
>;

export type UseSecuredAPISWRHookArgs = {
  path: string;
  method?: AxiosRequestConfig["method"];
  params?: AxiosRequestConfig["params"];
  body?: AxiosRequestConfig["data"];
  isReady?: boolean;
  refreshInterval?: number;
  isImmutable?: boolean;
  shouldRetryOnError?: boolean;
};
