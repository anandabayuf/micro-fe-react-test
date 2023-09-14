import type { ColorProps } from '@chakra-ui/react';
import type { KeyedMutator } from 'swr';

import type { GetCalendarResponse } from 'lib/services/api/calendar/getEvents/types';

export interface CalendarModel {
	id: string;
	name: string;
	description: string;
	startDate: Date;
	endDate: Date;
	startTime: string;
	endTime: string;
	date: Date;
	bo: boolean;
	allDay: boolean;
}

export interface CalendarProps {
	data?: CalendarModel[];
	colorToday?: ColorProps['color'];
	colorSelect?: ColorProps['color'];
	colorEvents?: ColorProps['color'];
	componentId?: string;
}

export interface EventsProps {
	data: CalendarModel[];
	date: string;
}

export interface ModalCalendarProps {
	isOpen: boolean;
	onClose: () => void;
	id: string | null;
	events: CalendarModel[] | [];
	mutate: KeyedMutator<GetCalendarResponse>;
	componentId?: string;
}
