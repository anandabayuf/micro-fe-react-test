import { Flex, Button, Box, Heading } from '@chakra-ui/react';
import { useMonthlyCalendar } from '@ibnu890/react-calendar';
import { subMonths, addMonths, format } from 'date-fns';
import { id, enUS } from 'date-fns/locale';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { useCalendar } from 'lib/store/calendar';
import { useLocale } from 'lib/store/locale';

type MonthlyNavProps = {
	componentId?: string;
};

const MonthlyNav = ({ componentId }: MonthlyNavProps) => {
	const { currentMonth, onCurrentMonthChange } = useMonthlyCalendar();
	const { resetSelect, setParams } = useCalendar();
	const { locale } = useLocale();

	const changeMonth = (date: Date) => {
		onCurrentMonthChange(date);
		setParams(date);
		resetSelect();
	};

	const handleSubMonth = () => changeMonth(subMonths(currentMonth, 1));
	const handleAddMonth = () => changeMonth(addMonths(currentMonth, 1));

	return (
		<Flex
			margin={8}
			justify="center"
		>
			<Flex
				direction="row"
				gap={6}
				alignItems="center"
			>
				<Button
					id={`${componentId}-previous-month-btn`}
					onClick={handleSubMonth}
					className="cursor-pointer"
					variant="outline"
				>
					<IoIosArrowBack size={21} />
				</Button>
				<Box>
					<Heading fontSize={{ base: 'md', md: 'xl' }}>
						{format(new Date(currentMonth ?? ''), 'LLLL yyyy', {
							locale: locale === 'id' ? id : enUS,
						})}
					</Heading>
				</Box>
				<Button
					id={`${componentId}-next-month-btn`}
					onClick={handleAddMonth}
					className="cursor-pointer"
					variant="outline"
				>
					<IoIosArrowForward size={21} />
				</Button>
			</Flex>
		</Flex>
	);
};

export default MonthlyNav;
