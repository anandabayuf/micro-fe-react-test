import { format, startOfMonth } from 'date-fns';
import { id } from 'date-fns/locale';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import type { CalendarModel } from 'lib/components/calendar/interface';
import type { GetCalendarParams } from 'lib/services/api/calendar/getEvents/types';

export type LocaleStoreVariables = {
  selectDate: Date | null;
  selectMonth: Date | null;
  params: GetCalendarParams;
  currentData: CalendarModel[] | null;
};

export type LocaleStore = LocaleStoreVariables & {
  setSelectDate: (selectDate: Date | null) => void;
  setSelectMonth: (selectMonth: Date) => void;
  setParams: (date: Date) => void;
  setCurrentData: (currentData: CalendarModel[]) => void;
  resetSelect: () => void;
};

const INITIAL_STATE = {
  selectDate: null,
  selectMonth: startOfMonth(new Date()),
  currentData: null,
  params: {
    month: +format(new Date(), 'MM', { locale: id }),
    year: +format(new Date(), 'yyyy', { locale: id }),
  },
};

export const useCalendar = create<LocaleStore>()(
  persist(
    (set) => ({
      ...INITIAL_STATE,
      setCurrentData: (currentData) => set({ currentData }),
      setSelectDate: (selectDate) => set({ selectDate }),
      resetSelect: () => set({ selectDate: null }),
      setSelectMonth: (selectMonth) => set({ selectMonth }),
      setParams: (date) =>
        set({
          params: {
            month: +format(date, 'MM', { locale: id }),
            year: +format(date, 'yyyy', { locale: id }),
          },
        }),
    }),
    { name: 'calendar' }
  )
);
