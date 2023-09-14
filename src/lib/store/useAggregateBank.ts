import create from "zustand";

interface ISummaryBalanceWidget {
  label: string;
  balanceLocal: number | undefined;
  backgroundColor: string;
}

interface IAggregateBank {
  summaryBalanceWidget: ISummaryBalanceWidget[];
  selectedCorporate: string;
  selectedBank: string;
  selectedPeriod: string;
}

interface IAggregateBankActions {
  addSummaryBalanceWidget: (values: ISummaryBalanceWidget[]) => void;
  resetSummaryBalanceWidget: () => void;
  setSelectedPeriod: (values: string) => void;
  setSelectedCorporate: (values: string) => void;
  setSelectedBank: (values: string) => void;
}

export const useAggregateBankStore = create<
  IAggregateBankActions & IAggregateBank
>((set) => ({
  summaryBalanceWidget: [],
  selectedCorporate: "",
  selectedBank: "All",
  selectedPeriod: "",

  addSummaryBalanceWidget: (values) =>
    set((state) => ({ ...state, summaryBalanceWidget: values })),
  resetSummaryBalanceWidget: () =>
    set((state) => ({ ...state, summaryBalanceWidget: [] })),
  setSelectedPeriod: (values) =>
    set((state) => ({ ...state, selectedPeriod: values })),
  setSelectedCorporate: (values) =>
    set((state) => ({ ...state, selectedCorporate: values })),
  setSelectedBank: (values) =>
    set((state) => ({ ...state, selectedBank: values })),
}));
