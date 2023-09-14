import { Box, Container, Text } from '@chakra-ui/react';
import * as React from 'react';

import CashflowTrendChart from 'lib/components/dashboard/cashflow-trend';
import CIFDroplist from 'lib/components/dashboard/cif-droplist';
import PageTitle from 'lib/components/shared/PageTitle';
import { useIntl } from 'react-intl';

const CashFlowPage = () => {
	const [cifNo, setCifNo] = React.useState('');
	const intl = useIntl();

	return (
		<>
			<Container
				maxW="full"
				pt={{ base: '7', md: '10' }}
				px={{ base: 5, md: 12 }}
			>
				<PageTitle
					id="cashflow-page"
					title={intl.formatMessage({ id: 'TrendCashFlow' })}
					controlComponent={
						<CIFDroplist
							componentId="cashflow-page"
							onSelectCIF={setCifNo}
						/>
					}
				/>
			</Container>

			<Container
				maxW="full"
				px={{ base: 0, md: 12 }}
				pb={48}
			>
				<Box
					w="100%"
					maxH={320}
				>
					<CashflowTrendChart
						id="cashflow-page"
						cifNo={cifNo}
					/>
				</Box>
			</Container>
		</>
	);
};

export default CashFlowPage;
