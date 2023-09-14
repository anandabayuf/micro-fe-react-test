export interface CashFlowTrendChartProps {
	labels?: string[];
	inDatasets?: number[];
	outDatasets?: number[];
	dataSetsLabel?: string[];
	id?: string;
}

export interface ChartTooltip {
	opacity: number;
	top: number;
	left: number;
	date: string;
	label: string;
	value: number;
	tooltipColor: string;
}
