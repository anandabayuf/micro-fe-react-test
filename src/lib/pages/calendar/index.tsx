import '@ibnu890/react-calendar/dist/calendar-tailwind-no-reset.css';

import { Container, Heading, Flex } from '@chakra-ui/react';
import { FormattedMessage } from 'react-intl';

import Calendar from 'lib/components/calendar';
import ListEvents from 'lib/components/calendar/events/listEvent';

const CalendarPage = () => {
	return (
		<Container
			maxW="full"
			pt={{ base: '7', md: '10' }}
			px={{ base: 5, md: 12 }}
		>
			{'DARI MODULE...'}
			<Heading>
				<FormattedMessage id="calendar" />
			</Heading>

			<Flex
				mt={8}
				wrap={{ base: 'wrap', lg: 'nowrap' }}
			>
				<Calendar componentId="calendar-page" />
				<ListEvents componentId="calendar-page" />
			</Flex>
		</Container>
	);
};

export default CalendarPage;
