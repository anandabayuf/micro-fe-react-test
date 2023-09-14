import { Container } from '@chakra-ui/react';
import React from 'react';
import { useIntl } from 'react-intl';
import PageTitle from '../shared/PageTitle';
import CashFlowTrend from './components/CashFlowTrend';
import Filter from './components/Filter';

const MultiBankCashFlow: React.FC = () => {
	const { formatMessage } = useIntl();

	return (
		<Container
			maxW="full"
			pt={{ base: '7', md: '10' }}
			px={{ base: 5, md: 12 }}
		>
			<PageTitle
				id="cashflow-page"
				title={formatMessage({
					id: 'multiBankCashFlow.page.title',
				})}
			/>

			<Filter />

			<CashFlowTrend />
		</Container>
	);
};

export default MultiBankCashFlow;
