import type { APIResponse } from "lib/services/api/types";

export type GetBalanceDetail = {
  corporate: string;
  accountType: string;
  bank: string | null;
  currency: string;
  accountNumber: string;
  rate: string | null;
  balanceOri: number;
  balanceLocal: number;
  balanceDate: string;
};

export type GetBalanceDetailResponse = APIResponse<GetBalanceDetail[]>;

export type GetBalanceDetailParams = {
  page: number;
  direction?: string;
  sortBy?: string;
  accountType?: string;
  bank?: string | null;
  size?: number;
  corporate?: string;
  needGetChildCif?: boolean;
};
