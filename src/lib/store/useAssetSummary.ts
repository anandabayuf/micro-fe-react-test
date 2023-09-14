import { ISummaryAssetCIf } from "lib/services/api/asset/summaryassetcif/types";
import create from "zustand";

interface ISummaryAssetCifActions {
  addSummaryAssetCif: (values: ISummaryAssetCIf) => void;
  resetSummaryAssetCif: () => void;
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

export const useAssetSummaryStore = create<
  ISummaryAssetCifActions & ISummaryAssetCIf
>((set) => ({
  balanceLocal: "0",
  details: {
    summary: [] as TSummary[],
  },

  addSummaryAssetCif: (values) => set((state) => ({ ...state, ...values })),
  resetSummaryAssetCif: () =>
    set((state) => ({ ...state, balanceLocal: "0", details: { summary: [] } })),
}));
