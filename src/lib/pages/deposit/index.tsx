import { Box, Container, Grid } from '@chakra-ui/react';
import { useState } from 'react';
import { useIntl } from 'react-intl';

import AssetDetails from 'lib/components/dashboard/asset-details';
import AssetSummary from 'lib/components/dashboard/asset-summary';
import AssetTrendChart from 'lib/components/dashboard/asset-trend';
import CIFDroplist from 'lib/components/dashboard/cif-droplist';
import PageTitle from 'lib/components/shared/PageTitle';
import WidgetWrapper from 'lib/components/shared/widgets/WidgetWrapper';

const DepositPage = () => {
	const [cifNo, setCifNo] = useState('');
	const intl = useIntl();

	return (
		<>
			<Container
				maxW="full"
				pt={{ base: '7', md: '10' }}
				px={{ base: 5, md: 12 }}
			>
				<PageTitle
					id="deposit-page"
					title={intl.formatMessage({ id: 'Deposit' })}
					controlComponent={
						<CIFDroplist
							componentId="deposit-page"
							onSelectCIF={setCifNo}
						/>
					}
				/>
			</Container>

			<Container
				maxW="full"
				px={{ base: 0, md: 12 }}
				pb={12}
			>
				<Grid
					templateColumns={{ base: '1fr', md: '1fr' }}
					gap={5}
				>
					<WidgetWrapper
						title={intl.formatMessage({ id: 'summary' })}
						subtitle="depositSubtitle"
					>
						<AssetSummary
							id="deposit-page"
							cifNo={cifNo}
						/>
					</WidgetWrapper>
				</Grid>

				<Box w="100%">
					<AssetTrendChart
						id="deposit-page"
						cifNo={cifNo}
					/>
				</Box>
				<Box w="100%">
					<AssetDetails cifNo={cifNo} />
				</Box>
			</Container>
		</>
	);
};

export default DepositPage;
