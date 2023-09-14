import create from "zustand";

interface ISummaryLoanCifActions {
  addSummaryLoanCif: (values: any) => void;
  resetSummaryLoanCif: () => void;
}

type TSummary = {
  currency: string;
  color: string;
  balance: string;
  localBalance: string;
  percentage: string;
  totalAccount: string;
  details: TSummaryDetail[];
  accounts: TSummaryAccounts[];
};

type TSummaryDetail = {
  accountType: string;
  balance: string;
  localBalance: string;
  percentage: string;
  totalAccount: string;
};

type TSummaryAccounts = {
  account: string;
  accountType: string;
  accountCurrency: string;
  accountBalance: string;
};

export const useLoanSummary = create<
  ISummaryLoanCifActions & {
    balanceLocal: string;
    details: { summary: TSummary[] };
  }
>((set) => ({
  balanceLocal: "0",
  details: {
    summary: [],
  },

  addSummaryLoanCif: (values) => set((state) => ({ ...state, ...values })),
  resetSummaryLoanCif: () =>
    set((state) => ({
      ...state,
      balanceLocal: "0",
      details: { summary: [] },
    })),
}));
