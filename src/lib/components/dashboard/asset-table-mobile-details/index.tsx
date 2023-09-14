import { Box, Divider, Grid, SimpleGrid, Text } from '@chakra-ui/react';
import { Fragment } from 'react';
import type { Key } from 'react';
import { FormattedMessage } from 'react-intl';
import { parseMoney } from 'lib/utils/currency';
import { AssetTableMobileDetailsProps } from './interfaces/interfaces';

const AssetTableMobileDetails: React.FC<AssetTableMobileDetailsProps> = ({
	tableHeaders,
	datasets,
}) => {
	return (
		<Box display={{ base: 'initial', md: 'initial', lg: 'none' }}>
			<Divider
				mb={2}
				borderColor={'orange.100'}
			/>
			{tableHeaders.map((heading, headerIndex) => (
				<Fragment key={heading as Key}>
					<Text
						fontWeight={700}
						textTransform="capitalize"
						mb={4}
					>
						<FormattedMessage id={heading} />
					</Text>

					<SimpleGrid
						columns={2}
						display={{ base: 'grid', md: 'grid', lg: 'none' }}
						columnGap={4}
					>
						{datasets.map((data) => (
							<Grid
								key={data.currency}
								templateColumns="1fr 2fr"
							>
								<Text color="gray.500">{data.currency}</Text>
								<Text textAlign="right">
									{parseMoney(
										data[tableHeaders[headerIndex]][
											'balance'
										]
									) ?? '-'}
								</Text>
							</Grid>
						))}
					</SimpleGrid>
					<Divider
						display={
							tableHeaders.length === headerIndex + 1
								? 'none'
								: 'block'
						}
						borderColor={'orange.100'}
						py={2}
						mb={2}
					/>
				</Fragment>
			))}
		</Box>
	);
};

export default AssetTableMobileDetails;
