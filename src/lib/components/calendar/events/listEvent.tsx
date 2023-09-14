import {
	Box,
	Heading,
	List,
	ListItem,
	Flex,
	Text,
	Stack,
	Skeleton,
} from '@chakra-ui/react';
import { format, isSameMonth, subMonths } from 'date-fns';
import { id as inID, enUS } from 'date-fns/locale';
import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { FormattedMessage, useIntl } from 'react-intl';

import type { CalendarModel } from 'lib/components/calendar/interface';
import {
	ModalCreate,
	ModalDelete,
	ModalEdit,
} from 'lib/components/calendar/modal';
import { useConnectNextEventCalendar } from 'lib/services/api/calendar/getNextEvents';
import { useCalendar } from 'lib/store/calendar';
import { useLocale } from 'lib/store/locale';

import EventItem from './eventItem';
import { changeIntoIdFormat } from 'lib/utils/id';

export interface ActionProps {
	edit: string | null;
	delete: string | null;
}

type ListEventsProps = {
	isWidget?: boolean;
	componentId?: string;
};

const ListEvents = ({ isWidget = false, componentId }: ListEventsProps) => {
	const intl = useIntl();
	const { locale } = useLocale();
	const { selectDate, resetSelect, currentData } = useCalendar();
	const [colSelect, setColapse] = useState<Array<string> | []>([]);
	const [action, setAction] = useState<ActionProps>({
		delete: null,
		edit: null,
	});

	const { data: eventsList, mutate } = useConnectNextEventCalendar(
		undefined,
		true
	);
	const events = eventsList?.content || [];

	const filterData = selectDate
		? currentData?.filter(
				(item) =>
					new Date(selectDate || '') <= new Date(item.endDate) &&
					new Date(item.startDate) <= new Date(selectDate || '')
		  )
		: events.filter(
				(event) =>
					isSameMonth(new Date(event.startDate), new Date()) ||
					subMonths(new Date(), 1)
		  );

	const eventsNotfound = () => {
		if (filterData?.length === 0 && selectDate) {
			return intl.formatMessage({ id: 'emptyDate' });
		}
		if (filterData?.length === 0) {
			return intl.formatMessage({ id: 'emptyMonth' });
		}
		return '';
	};

	filterData?.sort(
		(a: CalendarModel, b: CalendarModel) =>
			+new Date(a.startDate) - +new Date(b.startDate)
	);

	const handleDelete = (id: string) => () =>
		setAction({ ...action, delete: id });
	const handleEdit = (id: string) => () => setAction({ ...action, edit: id });

	const handleClose = (cls: string | 'edit' | 'delete') => () => {
		if (cls === 'edit') {
			setAction({ ...action, edit: null });
		}
		if (cls === 'delete') {
			setAction({ ...action, delete: null });
		}
	};

	return (
		<Box
			w={!isWidget ? { base: 'full', md: '2xl' } : 'full'}
			p={6}
			bg="white"
			maxH="lg"
			overflowY="scroll"
		>
			{selectDate && (
				<Flex
					id={`${componentId}-event-back-to-event-btn`}
					onClick={resetSelect}
					cursor="pointer"
					alignItems="center"
					gap={2}
					mb={3}
				>
					<IoIosArrowBack size={18} />
					<Text fontWeight="bold">
						<FormattedMessage id="backToEvents" />{' '}
						{format(
							new Date(selectDate ?? new Date()),
							'MMM yyyy',
							{
								locale: locale === 'id' ? inID : enUS,
							}
						)}{' '}
					</Text>
				</Flex>
			)}
			{!isWidget && (
				<Heading
					fontSize={{ base: 18, md: 21 }}
					mb={6}
				>
					{selectDate
						? ''
						: intl.formatMessage({ id: 'UpcomingEvents' })}
				</Heading>
			)}
			{!eventsList ? (
				<Stack>
					<Skeleton height="70px" />
					<Skeleton height="70px" />
					<Skeleton height="70px" />
				</Stack>
			) : (
				<List
					id={`${componentId}-event-list`}
					spacing={3}
					mt={!isWidget ? 8 : 0}
				>
					<Text textAlign="center">{eventsNotfound()}</Text>
					{filterData?.map((item) => (
						<ListItem
							id={`${componentId}-event-list-item-${changeIntoIdFormat(
								item.name
							)}`}
							key={item.id}
							border="1px solid"
							borderColor="orange.500"
							p={3}
						>
							<EventItem
								componentId={`${componentId}-event-list-item-${changeIntoIdFormat(
									item.name
								)}`}
								setColapse={setColapse}
								colSelect={colSelect ?? []}
								onDelete={handleDelete(item.id)}
								onEdit={handleEdit(item.id)}
								item={item}
								isWidget={isWidget}
							/>
						</ListItem>
					))}
				</List>
			)}
			{!isWidget && (
				<ModalCreate
					id={`${componentId}-event`}
					mutate={mutate}
				/>
			)}
			<ModalEdit
				componentId={`${componentId}-event`}
				isOpen={action.edit !== null}
				id={action.edit}
				events={events}
				onClose={handleClose('edit')}
				mutate={mutate}
			/>
			<ModalDelete
				componentId={`${componentId}-event`}
				isOpen={action.delete !== null}
				id={action.delete}
				events={events}
				mutate={mutate}
				onClose={handleClose('delete')}
			/>
		</Box>
	);
};

export default ListEvents;
