import { Flex, Box, Text, Button, Collapse } from '@chakra-ui/react';
import { format } from 'date-fns';
import { id as inID, enUS } from 'date-fns/locale';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FormattedMessage } from 'react-intl';

import type { CalendarModel } from 'lib/components/calendar/interface';
import { useAuth } from 'lib/store/auth';
import { useLocale } from 'lib/store/locale';

interface EventItemProps {
	setColapse: (val: Array<string>) => void;
	colSelect: Array<string>;
	item: CalendarModel;
	onDelete: () => void;
	onEdit: () => void;
	isWidget?: boolean;
	componentId?: string;
}

const EventItem = ({
	setColapse,
	colSelect,
	item,
	onEdit,
	onDelete,
	isWidget,
	componentId,
}: EventItemProps) => {
	const { locale } = useLocale();
	const { user } = useAuth();

	const handleSelect = (id: string) => {
		const check = colSelect.find((col) => col === id);
		if (check) {
			const newArr = colSelect.filter((col) => col !== id);
			setColapse(newArr);
		} else {
			setColapse([...colSelect, id]);
		}
	};

	const readOnly = user?.additionalInfo?.menuList.find(
		(i) => i.id === 'MNU_CUST_HUB_CALENDAR'
	);

	const handleSelectId = () => handleSelect(item.id);

	return (
		<>
			<Flex
				id={`${componentId}-open-close-btn`}
				justify="space-between"
				alignItems="center"
				cursor="pointer"
				onClick={handleSelectId}
			>
				<Box>
					<Text
						textTransform="capitalize"
						fontWeight={600}
					>
						{item.name}
					</Text>
					<Text>
						{format(
							new Date(item?.startDate ?? ''),
							'yyyy MMM dd',
							{
								locale: locale === 'id' ? inID : enUS,
							}
						)}{' '}
						-{' '}
						{format(new Date(item?.endDate ?? ''), 'yyyy MMM dd', {
							locale: locale === 'id' ? inID : enUS,
						})}
					</Text>
				</Box>
				{colSelect.includes(item.id) ? (
					<IoIosArrowDown />
				) : (
					<IoIosArrowUp />
				)}
			</Flex>
			<Collapse
				id={`${componentId}-collapse`}
				startingHeight={0}
				in={colSelect.includes(item.id)}
				animateOpacity
			>
				<Box>
					<Text
						mt={2}
						mb={3}
					>
						{item.description}
					</Text>
					{!isWidget && !readOnly?.viewOnly && !item.bo && (
						<Flex
							w="full"
							flexDirection="row-reverse"
						>
							<Button
								id={`${componentId}-delete-event-btn`}
								variant="outline"
								border="0px"
								color="gray.400"
								onClick={onDelete}
							>
								<FormattedMessage id="deleteEventButton" />
							</Button>
							<Button
								id={`${componentId}-edit-event-btn`}
								variant="outline"
								border="0px"
								onClick={onEdit}
							>
								<FormattedMessage id="editEventButton" />
							</Button>
						</Flex>
					)}
				</Box>
			</Collapse>
		</>
	);
};

export default EventItem;
