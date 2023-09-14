import React from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import { CashFlowTrendFilterProps } from 'lib/components/MultiBankCashFlow/types';
import PeriodFilter from './PeriodFilter';

const CashFlowTrendFilter: React.FC<CashFlowTrendFilterProps> = ({
	optionalFilter,
	withPeriod,
	params,
	setParams,
}) => {
	const [maxMd] = useMediaQuery('not all and (min-width: 768px)');
	const [md] = useMediaQuery('(min-width: 768px)');

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				flexWrap: 'wrap',
				marginTop: '1rem',
				columnGap: maxMd ? '0px' : md ? '1rem' : undefined,
			}}
		>
			{optionalFilter}
			{withPeriod && (
				<PeriodFilter
					params={params}
					setParams={setParams}
				/>
			)}
		</div>
	);
};

export default CashFlowTrendFilter;
