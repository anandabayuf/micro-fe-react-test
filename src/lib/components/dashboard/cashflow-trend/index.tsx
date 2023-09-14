import { Box } from '@chakra-ui/react';
import * as React from 'react';

import type { BaseChartProps } from 'lib/components/shared/widgets/BaseChart';
import BaseChart from 'lib/components/shared/widgets/BaseChart';
import { useCashflowTrend } from 'lib/services/api/cashflow/getCashflow';

import CashflowTrendController from './components/CashflowTrendController';
import CashFlowTrendChart from './cashflow-trend-chart';

type CashflowTrendChartProps = {
	cifNo?: string | null;
	href?: string;
	id?: string;
};

const CashflowTrendChart = ({ cifNo = null, id }: CashflowTrendChartProps) => {
	const [period, setPeriod] = React.useState<string>();
	const [balanceInOutType, setBalanceInOutType] = React.useState<string>();
	const { data } = useCashflowTrend({
		cifNo,
		period,
		balanceInOutType,
		needGetChildCif: false,
	});

	const cashflowTrendData: BaseChartProps = React.useMemo(() => {
		const content = data?.content;
		return {
			labels: content?.map((cashflowEntry) => cashflowEntry.barName),
			inDatasets: content?.map(
				(cashflowEntry) => cashflowEntry.balanceIn
			),
			outDatasets: content?.map(
				(cashflowEntry) => cashflowEntry.balanceOut
			),
		};
	}, [data]);

	return (
		<Box
			bg="white"
			rounded="xl"
			p={6}
		>
			<CashflowTrendController
				id={`${id}-cashflow-trend`}
				period={period}
				balanceInOutType={balanceInOutType}
				onSelectPeriod={setPeriod}
				onSelectBalanceType={setBalanceInOutType}
			/>
			<CashFlowTrendChart
				id={`${id}-cashflow-trend-chart`}
				labels={cashflowTrendData.labels}
				dataSetsLabel={['CashIn', 'CashOut']}
				inDatasets={cashflowTrendData.inDatasets}
				outDatasets={cashflowTrendData.outDatasets}
			/>
		</Box>
	);
};

export default CashflowTrendChart;
