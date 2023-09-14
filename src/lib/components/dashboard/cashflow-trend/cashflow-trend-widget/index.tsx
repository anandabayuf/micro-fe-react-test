import { Box } from '@chakra-ui/react';
import { BaseChartProps } from 'lib/components/shared/widgets/BaseChart';
import { useCashflowTrend } from 'lib/services/api/cashflow/getCashflow';
import React from 'react';
import CashFlowTrendChart from '../cashflow-trend-chart';

type CashflowTrendWidgetProps = {
	id?: string;
};

const CashflowTrendWidget: React.FC<CashflowTrendWidgetProps> = ({ id }) => {
	const { data } = useCashflowTrend({
		cifNo: null,
		period: 'ONE_WEEK',
		balanceInOutType: 'IN_OUT',
		needGetChildCif: true,
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
		<Box>
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

export default CashflowTrendWidget;
