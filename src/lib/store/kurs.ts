import { TKursContent } from "lib/components/dashboard/kurs/types";
import create from "zustand";

interface IKursActions {
  addKursData: (values: TKursContent) => void;
  resetKursData: () => void;
}

export const useKursStore = create<IKursActions & TKursContent>((set) => ({
  latestUpdatedTime: "",
  listExchangeRate: [],

  addKursData: (values) =>
    set((state) => ({
      ...state,
      latestUpdatedTime: values.latestUpdatedTime,
      listExchangeRate: values.listExchangeRate,
    })),
  resetKursData: () => set((state) => ({ ...state, kursData: [] })),
}));
