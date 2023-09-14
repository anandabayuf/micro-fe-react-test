import { GetBankList } from "lib/services/api/aggregate-bank/getBank/type";
import { GetCorporateList } from "lib/services/api/aggregate-bank/getCorporateList/type";
import { GetDashboardPeriod } from "lib/services/api/aggregate-bank/getDashboardPeriod/type";
import create from "zustand";

interface IOtherBankCorpList {
  otherBankCorporateList: GetCorporateList[] | undefined;
  bankList: GetBankList[] | undefined;
  dashboardPeriod: GetDashboardPeriod[] | undefined;
}

interface IOtherBankCorpListActions {
  addOtherBankCorporateList: (values: GetCorporateList[] | undefined) => void;
  addBankList: (values: GetBankList[] | undefined) => void;
  addDashboardPeriod: (values: GetDashboardPeriod[] | undefined) => void;
}

export const useOtherBankFilter = create<
  IOtherBankCorpListActions & IOtherBankCorpList
>((set) => ({
  otherBankCorporateList: [],
  bankList: [],
  dashboardPeriod: [],

  addOtherBankCorporateList: (values) =>
    set((state) => ({ ...state, otherBankCorporateList: values })),
  addBankList: (values) => set((state) => ({ ...state, bankList: values })),
  addDashboardPeriod: (values) =>
    set((state) => ({ ...state, dashboardPeriod: values })),
}));
