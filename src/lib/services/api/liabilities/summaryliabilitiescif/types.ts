import type { APIResponse } from "lib/services/api/types";

export type SummaryLiabilitiesCIFParams = {
  cifNo: string | null;
  needGetChildCif?: boolean;
};

interface IAccount {
  account: string;
  accountCurrency: string;
  outstandingAmount: string;
  availableBalance: string;
}

interface ISummaryDetails {
  outstandingAmount: string;
  outstandingAmountLocal: string;
  availableBalance: string;
  availableBalanceLocal: string;
}

export interface ISummary {
  currency: string;
  balance: string;
  localBalance: string;
  percentage: string;
  totalAccount: string;
  details: ISummaryDetails;
  accounts: IAccount[];
}

export interface SummaryLiabilitiesCIF {
  balanceLocal: string;
  details: {
    summary: ISummary[];
  };
}

export type SummaryLiabilitiesCIFResponse = APIResponse<SummaryLiabilitiesCIF>;
