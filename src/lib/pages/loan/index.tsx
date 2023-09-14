import { Box, Container, Grid } from '@chakra-ui/react';
import { useState } from 'react';
import { useIntl } from 'react-intl';

import CIFDroplist from 'lib/components/dashboard/cif-droplist';
import LiabilitiesDetails from 'lib/components/dashboard/liabilities-details';
import LiabilitiesTrendChart from 'lib/components/dashboard/liabilities-trend';
import PageTitle from 'lib/components/shared/PageTitle';
import WidgetWrapper from 'lib/components/shared/widgets/WidgetWrapper';
import LiabilitiesSummary from 'lib/components/dashboard/liabilities-summary';

const LoanPage = () => {
	const intl = useIntl();
	const [cifNo, setCifNo] = useState('');
	return (
		<>
			<Container
				maxW="full"
				pt={{ base: '7', md: '10' }}
				px={{ base: 5, md: 12 }}
			>
				<PageTitle
					id="loan-page"
					title={intl.formatMessage({ id: 'Loan' })}
					controlComponent={
						<CIFDroplist
							componentId="loan-page"
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
				<Grid
					templateColumns={{ base: '1fr', md: '1fr' }}
					gap={5}
				>
					<WidgetWrapper
						title={intl.formatMessage({ id: 'summary' })}
						subtitle="loanSubtitle"
					>
						<LiabilitiesSummary
							id="loan-page"
							cifNo={cifNo}
						/>
					</WidgetWrapper>
				</Grid>

				<Box w="100%">
					<LiabilitiesTrendChart
						id="loan-page"
						cifNo={cifNo}
					/>
				</Box>
			</Container>
		</>
	);
};

export default LoanPage;
