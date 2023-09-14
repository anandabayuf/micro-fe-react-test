import { Box, Flex } from '@chakra-ui/react';
import ChartLegend from 'lib/components/shared/widgets/legend';
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	LegendItem,
} from 'chart.js';
import { MULTI_BANK_CASH_FLOW_CHART_OPTIONS } from 'lib/components/MultiBankCashFlow/constants';
import { MultiBankCashFlowChartProps } from 'lib/components/MultiBankCashFlow/types';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const MultiBankCashFlowChart: React.FC<MultiBankCashFlowChartProps> = ({
	data,
}) => {
	const legend: LegendItem[] =
		data?.datasets?.map((item, index) => ({
			datasetIndex: index,
			text: item?.label || '',
			fillStyle: item?.backgroundColor?.toString(),
		})) || [];

	return (
		<Box width={'95%'}>
			<Box height={320}>
				<Line
					options={MULTI_BANK_CASH_FLOW_CHART_OPTIONS}
					data={data}
				/>
			</Box>
			<Flex
				flexDir="row-reverse"
				mt={4}
			>
				<ChartLegend legend={legend} />
			</Flex>
		</Box>
	);
};

export default MultiBankCashFlowChart;
