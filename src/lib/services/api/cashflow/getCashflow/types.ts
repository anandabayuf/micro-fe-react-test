import type { APIResponse } from 'lib/services/api/types';

export type GetCashflowRequest = {
  cifNo?: string | null;
  period?: string;
  balanceInOutType?: string;
  needGetChildCif?: boolean;
};

export type CashflowEntry = {
  barName: string;
  balanceIn: number;
  balanceOut: number;
};

export type GetCashflowContent = Array<CashflowEntry>;

export type GetCashflowResponse = APIResponse<GetCashflowContent>;
