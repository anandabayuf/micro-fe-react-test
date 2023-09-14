import create from 'zustand';
import { persist } from 'zustand/middleware';

export type LocaleStoreVariables = {
  locale?: string;
};

export type LocaleStore = LocaleStoreVariables & {
  setLocale: (locale: string) => void;
};

export const useLocale = create<LocaleStore>()(
  persist(
    (set) => ({
      setLocale: (locale) => set({ locale }),
    }),
    { name: 'locale' }
  )
);
