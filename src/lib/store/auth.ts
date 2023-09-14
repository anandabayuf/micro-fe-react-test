import create from 'zustand';
import { persist } from 'zustand/middleware';

import type { User } from 'lib/types/user';

export type AuthStoreVariables = {
  companyId?: string;
  token?: string;
  user?: User;
  firstTimeLogin: boolean;
};

export const INITIAL_AUTH_STORE_VALUE: AuthStoreVariables = {
  companyId: undefined,
  token: undefined,
  user: undefined,
  firstTimeLogin: false,
};

export type AuthStore = AuthStoreVariables & {
  setCompanyId: (token: string) => void;
  setToken: (token: string) => void;
  setUser: (user: User) => void;
  setFirstTimeLogin: (isFirstTime: boolean) => void;
  clearAuth: () => void;
};

export const useAuth = create<AuthStore>()(
  persist(
    (set) => ({
      setCompanyId: (companyId) => set({ companyId }),
      setToken: (token) => set({ token }),
      setUser: (user) => set({ user }),
      clearAuth: () => set(INITIAL_AUTH_STORE_VALUE),
      setFirstTimeLogin: (isFirstTime) => set({ firstTimeLogin: isFirstTime }),
      firstTimeLogin: false,
    }),
    { name: 'auth' }
  )
);
