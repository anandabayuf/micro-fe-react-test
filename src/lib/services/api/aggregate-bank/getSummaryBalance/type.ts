import type { APIResponse } from "lib/services/api/types";

export type TDetailsList = {
  name: string;
  balanceLocal: number;
};

export type TDetails = {
  bankList: TDetailsList[];
  totalBank: number;
  currencyList: TDetailsList[];
  totalCurrency: number;
  branchList: TDetailsList[];
  totalBranch: number;
};

export type TSummaryBalanceDetails = {
  id: string;
  name: string;
  balanceLocal: number;
  accountTotals: number;
  details: TDetails;
};

export type GetSummaryBalance = {
  balanceLocal: number;
  corporateTotals: number;
  details: TSummaryBalanceDetails[];
};

export type GetSummaryBalanceResponse = APIResponse<GetSummaryBalance>;

export type TSummaryBranches = {
  name: string;
  balanceLocal: number;
  current: number;
  deposito: number;
  saving: number;
};

export type TSummaryCurrencies = {
  balanceLocal: number;
  balanceOri: number;
  name: string;
  percentage: number;
};

export type GetSummaryBalanceAll = {
  branches: TSummaryBranches[];
  currencies: TSummaryCurrencies[];
  totalBranch: number;
  totalCurrency: number;
};

export type GetSummaryBalanceAllResponse = APIResponse<GetSummaryBalanceAll>;

export type TUseSummaryCurrentParams = {
  corporateId: string;
};

export type TUseSummarySavingParams = {
  corporateId: string;
};

export type TUseSummaryBalanceAllParams = {
  corporateId: string;
  needGetChildCif: boolean;
};
