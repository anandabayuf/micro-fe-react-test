import type { APIResponse } from 'lib/services/api/types';

export type BalanceType = {
  code: string;
  name: string;
};

export type GetBalanceInOutTypeContent = Array<BalanceType>;

export type GetBalanceInOutTypeResponse =
  APIResponse<GetBalanceInOutTypeContent>;
