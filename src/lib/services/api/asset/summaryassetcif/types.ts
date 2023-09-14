import type { APIResponse } from "lib/services/api/types";

export type SummaryAssetCIFParams = {
  cifNo: string | null;
  needGetChildCif?: boolean;
};

type AccountType = string | "S" | "D" | "L";
export interface ISummaryDetail {
  accountType: AccountType;
  balance: string;
  localBalance: string;
  percentage: string;
  totalAccount: string;
}
export interface IAccount {
  account: string;
  accountType: AccountType;
  accountCurrency: string;
  accountBalance: string;
}
export interface ISummary {
  color: string;
  currency: string;
  balance: string;
  localBalance: string;
  percentage: string;
  totalAccount: string;
  details: ISummaryDetail[];
  accounts: IAccount[];
}

export interface ISummaryAssetCIf {
  balanceLocal: string;
  details: {
    summary: ISummary[];
  };
}

export type SummaryAssetCIFResponse = APIResponse<ISummaryAssetCIf>;
