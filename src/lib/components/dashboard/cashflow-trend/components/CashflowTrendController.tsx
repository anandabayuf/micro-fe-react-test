import { Box, Flex, Heading, Select, Skeleton, Text } from '@chakra-ui/react';
import * as React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { useDashboardPeriod } from 'lib/services/api/asset/getdashboardperiod';
import { useBalanceTypeList } from 'lib/services/api/cashflow/getBalanceInOutType';
import Subtitle from 'lib/components/shared/widgets/WidgetWrapper/Subtitle';
import { changeIntoIdFormat } from 'lib/utils/id';

type CashflowTrendControllerProps = {
	balanceInOutType?: string;
	period?: string;
	onSelectBalanceType: (balanceInOuType: string) => void;
	onSelectPeriod: (period: string) => void;
	id?: string;
};

const CashflowTrendController = ({
	balanceInOutType,
	period,
	onSelectBalanceType,
	onSelectPeriod,
	id,
}: CashflowTrendControllerProps) => {
	const { data, isLoading } = useBalanceTypeList();
	const { data: dashboardPeriodData } = useDashboardPeriod();
	const balanceTypeList = React.useMemo(() => data?.content, [data?.content]);
	// const selectW = useBreakpointValue({ base: 'full', md: 'sm' });
	const periodList = React.useMemo(
		() => dashboardPeriodData?.content,
		[dashboardPeriodData?.content]
	);

	React.useEffect(() => {
		if (balanceTypeList) {
			onSelectBalanceType(balanceTypeList?.[0]?.code);
		}
	}, [balanceTypeList, onSelectBalanceType]);

	React.useEffect(() => {
		if (periodList) {
			// TODO: remove this when endpoint have its own correct default
			const oneMonth = periodList.find(
				(periodSelection) => periodSelection.code === 'ONE_MONTH'
			);
			onSelectPeriod(oneMonth?.code ?? periodList?.[0]?.code);
		}
	}, [periodList, onSelectPeriod]);

	const handleSelectBalanceType: React.ChangeEventHandler<
		HTMLSelectElement
	> = (e) => onSelectBalanceType(e.target.value);

	const handleSelectPeriod: React.ChangeEventHandler<HTMLSelectElement> = (
		e
	) => onSelectPeriod(e.target.value);

	const intl = useIntl();

	return (
		<Flex
			display={{ base: 'grid', md: 'flex' }}
			justifyContent="space-between"
			alignItems="center"
		>
			<Box>
				<Heading fontSize={{ base: 'lg', md: '2xl' }}>
					{intl.formatMessage({ id: 'TrendCashFlow' })}
				</Heading>
				<Subtitle
					additionalTitle={intl.formatMessage({
						id: 'TrendCashFlowSubtitle',
					})}
					subtitle={''}
				/>
			</Box>
			<Flex
				display={{ base: 'grid', md: 'flex' }}
				alignItems="center"
				justifyContent="flex-end"
				mb={4}
				gridTemplateColumns="repeat(2, 1fr)"
				gridGap={{ base: 4, md: 6 }}
				width={{ base: 'full', md: 'initial' }}
			>
				<Flex
					display={{ base: 'grid', md: 'flex' }}
					direction={{ base: 'column', md: 'row' }}
					gap={{ base: 2, md: 6 }}
					alignItems="center"
				>
					<Heading fontSize="md">
						<FormattedMessage id="show" />
					</Heading>
					<Skeleton isLoaded={!isLoading}>
						<Select
							id={`${id}-select-balance-type`}
							w={{ base: 'unset', md: 'max-content' }}
							value={balanceInOutType}
							onChange={handleSelectBalanceType}
						>
							{balanceTypeList?.map((balanceType) => (
								<option
									value={balanceType.code}
									key={balanceType.code}
									id={`${id}-select-balance-type-option-${changeIntoIdFormat(
										balanceType.name
									)}`}
								>
									<FormattedMessage id={balanceType.code} />
								</option>
							))}
						</Select>
					</Skeleton>
				</Flex>

				<Flex
					display={{ base: 'grid', md: 'flex' }}
					direction={{ base: 'column', md: 'row' }}
					gap={{ base: 2, md: 6 }}
					alignItems="center"
				>
					<Heading fontSize="md">
						<FormattedMessage id="period" />
					</Heading>
					<Select
						id={`${id}-select-period`}
						w={{ base: 'unset', md: 'max-content' }}
						value={period}
						onChange={handleSelectPeriod}
					>
						{periodList?.map((periodType) => (
							<option
								id={`${id}-select-period-option-${changeIntoIdFormat(
									periodType.name
								)}`}
								value={periodType.code}
								key={periodType.code}
							>
								<FormattedMessage id={periodType.code} />
							</option>
						))}
					</Select>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default CashflowTrendController;
