import create from 'zustand';
import { persist } from 'zustand/middleware';

import type { WidgetManagementType } from 'lib/services/api/widget/getWidget/types';

export type LocaleStoreVariables = {
	listWidget: WidgetManagementType[];
	oldListWidget: WidgetManagementType[];
	modified: boolean;
};

export type LocaleStore = LocaleStoreVariables & {
	setWidgetList: (listWidget: LocaleStoreVariables['listWidget']) => void;
	setModified: (listWidget: boolean) => void;
	setOldListWidget: (listWidget: LocaleStoreVariables['listWidget']) => void;
	resetSelect: () => void;
};

const INITIAL_STATE = {
	oldListWidget: [],
	modified: false,
	listWidget: [
		{
			id: 'WIDGET_SIMPANAN',
			name: 'Simpanan',
			desc: 'Core Dashboard1',
		},
		{
			id: 'WIDGET_UPCOMING_EVENTS',
			name: 'Agenda',
			desc: 'Core Dashboard2',
		},
		{
			id: 'WIDGET_PINJAMAN',
			name: 'Pinjaman',
			desc: 'Core Dashboard2',
		},
		{
			id: 'WIDGET_TREN_ARUS_KAS',
			name: 'Tren Arus Kas',
			desc: 'Core Dashboard4',
		},
	],
};

export const useWidget = create<LocaleStore>()(
	persist(
		(set) => ({
			...INITIAL_STATE,
			setOldListWidget: (oldListWidget) => set({ oldListWidget }),
			setWidgetList: (listWidget) => set({ listWidget }),
			setModified: (modified) => set({ modified }),
			resetSelect: () => set(INITIAL_STATE),
		}),
		{ name: 'adjustWidget' }
	)
);
