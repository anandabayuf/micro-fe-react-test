import { Box, Flex, Skeleton, Stack, Text } from '@chakra-ui/react';
import {
	MonthlyCalendar,
	MonthlyBody,
	MonthlyDay,
} from '@ibnu890/react-calendar';
import { isSameDay } from 'date-fns';
import { enUS, id } from 'date-fns/locale';
import { useEffect } from 'react';
import shallow from 'zustand/shallow';

import { useConnectedCalendar } from 'lib/services/api/calendar/getEvents';
import { useCalendar } from 'lib/store/calendar';
import { useLocale } from 'lib/store/locale';

import MonthlyNav from './calendarNav';
import type { CalendarProps, EventsProps } from './interface';

const Calendar = ({
	colorToday = '#006677',
	colorSelect = '#E55300',
	colorEvents = '#006677',
	componentId,
}: CalendarProps) => {
	const { locale } = useLocale();
	const { selectDate, setSelectDate, params, setCurrentData } = useCalendar();

	const { data: eventsList } = useConnectedCalendar(params, true);

	useEffect(() => {
		if (eventsList?.content) setCurrentData(eventsList.content);
	}, [eventsList, setCurrentData]);

	const [selectMonth, setSelectMonth] = useCalendar(
		(state) => [state.selectMonth, state.setSelectMonth],
		shallow
	);

	function bgSelect(events: EventsProps, day: Date) {
		if (isSameDay(new Date(selectDate ?? ''), day)) {
			return colorSelect;
		}
		if (events.data.length > 0) {
			return colorEvents;
		}
		return 'transparent';
	}

	const handleSelectDate = (day: Date) => () =>
		setSelectDate(isSameDay(new Date(selectDate ?? ''), day) ? null : day);

	const handleSelectMonth = (date: Date) => setSelectMonth(date);

	const colorText = (events: EventsProps, day: Date) => {
		if (isSameDay(new Date(selectDate ?? ''), day)) {
			return 'white';
		}
		if (events.data.length > 0) {
			return 'white';
		}
		return 'black';
	};

	return (
		<Box
			bg="white"
			pb={8}
			w="full"
			maxH="lg"
		>
			<MonthlyCalendar
				currentMonth={selectMonth ? new Date(selectMonth) : new Date()}
				onCurrentMonthChange={handleSelectMonth}
				locale={locale === 'id' ? id : enUS}
			>
				<Box pt="4">
					<MonthlyNav
						componentId={`${componentId}-calendar-monthly-nav`}
					/>
				</Box>
				{!eventsList ? (
					<Stack>
						<Skeleton
							height="xs"
							ml={5}
						/>
					</Stack>
				) : (
					<MonthlyBody events={eventsList?.content || []}>
						<MonthlyDay
							// eslint-disable-next-line react/no-unstable-nested-components
							customRender={(day, dayNumber, today, events) => (
								<Flex
									alignItems="center"
									justify="center"
									justifyContent="center"
								>
									<Flex
										id={`${componentId}-calendar-date-${dayNumber}`}
										bg={bgSelect(events, day)}
										border={`1px solid ${
											today && colorToday
										}`}
										color={colorText(events, day)}
										h={{ base: 8, md: 10 }}
										w={10}
										alignItems="center"
										justifyContent="center"
										borderRadius="full"
										cursor="pointer"
										onClick={handleSelectDate(day)}
									>
										<Text
											textAlign="center"
											fontSize={{ base: 'md', md: 'lg' }}
										>
											{dayNumber}
										</Text>
									</Flex>
								</Flex>
							)}
						/>
					</MonthlyBody>
				)}
			</MonthlyCalendar>
		</Box>
	);
};

export default Calendar;
