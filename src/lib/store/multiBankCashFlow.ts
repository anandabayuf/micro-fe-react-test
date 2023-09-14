import {
	MultiBankCashFlowStore,
	MultiBankCashFlowStoreVariable,
} from 'lib/components/MultiBankCashFlow/types';
import create from 'zustand';
import { persist } from 'zustand/middleware';

const INITIAL_VALUE: MultiBankCashFlowStoreVariable = {
	needGetChildCif: false,
	corporateId: undefined,
	bankCode: 'all',
};

export const useMultiBankCashFlow = create<MultiBankCashFlowStore>()(
	persist(
		(set) => ({
			...INITIAL_VALUE,
			setNeedGetChildCif: (value) => set({ needGetChildCif: value }),
			setCorporateId: (value) => set({ corporateId: value }),
			setBankCode: (value) => set({ bankCode: value }),
		}),
		{ name: 'multiBankCashFlow' }
	)
);
