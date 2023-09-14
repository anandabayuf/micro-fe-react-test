import type { SWRConfiguration } from 'swr';

export const API_HOST = process.env.REACT_APP_API_URL;
export const IAM_HOST = process.env.REACT_APP_IAM_URL;

export const HTTPMethod = {
  POST: 'POST',
  GET: 'GET',
};

export const immutableOptions: SWRConfiguration = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};
