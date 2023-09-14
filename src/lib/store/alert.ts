import create from 'zustand';

import type { AlertItem } from 'lib/components/alert/types';

type AlertStore = {
  alert: AlertItem | null;
  clear: () => void;
  setAlert: (alert: AlertItem) => void;
};

export const useAlert = create<AlertStore>((set) => ({
  alert: null,
  setAlert: (alertItem) => set({ alert: alertItem }),
  clear: () => set({ alert: null }),
}));
