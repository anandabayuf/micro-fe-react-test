import create from 'zustand';

import type { ConnectServiceRequest } from 'lib/services/api/cxo/connectservice/types';
import type { ChannelEntry } from 'lib/services/api/cxo/getChannelSelection/types';

export type SelectChannelForm = {
  channel: ChannelEntry;
};
export type UserAuthenticationForm = Omit<ConnectServiceRequest, 'channelId'>;

const connectServiceFormStep = {
  2: 'stepTwo',
  3: 'stepThree',
};

type ConnectServiceFormFields = {
  stepTwo: SelectChannelForm | null;
  stepThree: UserAuthenticationForm | null;
  currentStep: number;
  isLoading: boolean;
};

type SetConnectServiceFormDataType =
  | { step: 2; data: SelectChannelForm }
  | { step: 3; data: UserAuthenticationForm };

type ConnectServiceFormStore = ConnectServiceFormFields & {
  setFormData: (data: SetConnectServiceFormDataType) => void;
  setCurrentStep: (step: number) => void;
  resetStore: () => void;
  setIsLoading: (isLoading: boolean) => void;
};

const INITIAL_STORE_VALUE: ConnectServiceFormFields = {
  stepTwo: null,
  stepThree: null,
  currentStep: 1,
  isLoading: false,
};

export const useConnectServiceFormStore = create<ConnectServiceFormStore>(
  (set) => ({
    ...INITIAL_STORE_VALUE,
    setFormData: ({ step, data }) =>
      set((state) => ({ ...state, [connectServiceFormStep[step]]: data })),
    setCurrentStep: (step) => set({ currentStep: step }),
    resetStore: () => set({ ...INITIAL_STORE_VALUE }),
    setIsLoading: (isLoading) => set({ isLoading }),
  })
);
