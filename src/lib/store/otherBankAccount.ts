import create from 'zustand';
import { persist } from 'zustand/middleware';
import {
	OtherBankAccountStoreVariable,
	OtherBankAccountStore,
} from '../components/OtherBankAccount/types';

const INITIAL_VALUE: OtherBankAccountStoreVariable = {
	formBanksAndAccounts: null,
	activeStep: 0,
	selectedBankAndAccount: null,
	modal: {
		isOpen: false,
		message: null,
		type: null,
	},
	bankName: null,
	currency: null,
};

export const useOtherBankAccount = create<OtherBankAccountStore>()(
	persist(
		(set) => ({
			...INITIAL_VALUE,
			setSelectedBankAndAccount: (value) =>
				set({ selectedBankAndAccount: value }),
			setFormBanksAndAccounts: (formBanksAndAccounts) =>
				set({ formBanksAndAccounts }),
			setActiveSteps: (activeStep) => set({ activeStep }),
			resetFormBanksAndAccounts: () =>
				set({
					formBanksAndAccounts: null,
				}),
			setModalState: (value) => set({ modal: value }),
			closeModal: () =>
				set({ modal: { isOpen: false, message: null, type: null } }),
			setBankName: (value) => set({ bankName: value }),
			setCurrency: (value) => set({ currency: value }),
		}),
		{ name: 'otherBankAccount' }
	)
);
