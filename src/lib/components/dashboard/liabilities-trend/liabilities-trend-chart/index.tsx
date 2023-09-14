import { Box, Flex } from '@chakra-ui/react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	Title,
	Tooltip,
	Legend,
	LegendItem,
	ChartOptions,
} from 'chart.js';
import { useMemo, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import ChartLegend from 'lib/components/shared/widgets/legend';
import { colors } from 'lib/styles/customTheme/colors';
import { LiabilitiesTrendChartProps } from './interfaces/interfaces';
import { parseMoney } from '../../../../utils/currency';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const LiabilitiesTrendChart: React.FC<LiabilitiesTrendChartProps> = ({
	labels,
	availableDataSets = [],
	outstandingDataSets = [],
	dataSetsLabel = [],
	id,
}) => {
	const data = useMemo(() => {
		return {
			labels,
			datasets: [
				{
					label: dataSetsLabel[0],
					data: availableDataSets,
					backgroundColor: colors.teal?.[500],
					borderColor: colors.teal?.[500],
					pointStyle: 'circle',
					pointRadius: 5,
				},
				{
					label: dataSetsLabel[1],
					data: outstandingDataSets,
					backgroundColor: colors.orange?.[500],
					borderColor: colors.orange?.[500],
					pointStyle: 'circle',
					pointRadius: 5,
				},
			],
		};
	}, [labels, availableDataSets, outstandingDataSets, dataSetsLabel]);

	const chartRef = useRef<ChartJS<never>>(null);

	const options: ChartOptions<'line'> = {
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false,
				labels: {
					usePointStyle: true,
				},
			},
			tooltip: {
				enabled: false,
				external: (context) => {
					// Tooltip Element
					let tooltipEl: HTMLElement | null = document.getElementById(
						`${id}-tooltip`
					);

					// Create element on first render
					if (!tooltipEl) {
						tooltipEl = document.createElement('div');
						tooltipEl.id = `${id}-tooltip`;
						tooltipEl.innerHTML = '<table></table>';
						document.body.appendChild(tooltipEl);
					}

					// Hide if no tooltip
					const tooltipModel: any = context.tooltip;
					if (tooltipModel.opacity === 0) {
						tooltipEl.style.opacity = '0';
						return;
					}

					// Set caret Position
					tooltipEl.classList.remove(
						'above',
						'below',
						'no-transform'
					);
					if (tooltipModel.yAlign) {
						tooltipEl.classList.add(tooltipModel.yAlign);
					} else {
						tooltipEl.classList.add('no-transform');
					}

					// Set Text
					if (tooltipModel.body) {
						let innerHtml = '<tbody>';
						const tooltipBackground =
							tooltipModel.dataPoints[0].dataset.backgroundColor;
						const value = Number(
							(
								Number(tooltipModel.dataPoints[0].raw) / 1000000
							).toFixed(2)
						);
						let style = 'background: white';
						style += '; position : relative';
						style += '; border-color:' + tooltipBackground;
						style +=
							'; box-shadow : 0px 8px 16px -8px' +
							tooltipBackground;
						style += '; padding : 8px';
						style += '; border-radius : 8px';
						style += '; border : 1px solid ' + tooltipBackground;
						style += '; border-width: 2px';
						style += '; z-index : 2';
						style += '; white-space : nowrap;';
						const span =
							'<span style="' +
							style +
							' class=""> IDR ' +
							parseMoney(value) +
							'</span>';
						innerHtml += '<tr><td>' + span + '</td></tr>';
						innerHtml += '</tbody>';

						let tableRoot: HTMLElement | null =
							tooltipEl.querySelector('table');
						if (tableRoot) tableRoot.innerHTML = innerHtml;
					}

					const position =
						context.chart.canvas.getBoundingClientRect();

					// Display, position, and set styles for font
					tooltipEl.style.opacity = '1';
					tooltipEl.style.position = 'absolute';
					tooltipEl.style.left =
						position.left +
						window.pageXOffset +
						10 +
						tooltipModel.caretX +
						'px';
					tooltipEl.style.top =
						position.top +
						window.pageYOffset -
						10 +
						tooltipModel.caretY +
						'px';
					// tooltipEl.style.font = bodyFont.string;
					tooltipEl.style.padding =
						tooltipModel.padding +
						'px ' +
						tooltipModel.padding +
						'px';
					tooltipEl.style.pointerEvents = 'none';
				},
			},
		},
		scales: {
			x: {
				grid: {
					display: false,
					drawBorder: false,
				},
			},
			y: {
				grid: {
					drawBorder: false,
					borderDash: [8, 4],
				},
				ticks: {
					callback: (yValue: unknown) => {
						return parseMoney(Number(yValue) / 1000000);
					},
				},
			},
		},
	};

	const legendItems: LegendItem[] | undefined =
		chartRef?.current?.legend?.legendItems;

	return (
		<Box width={'95%'}>
			<Box height={320}>
				<Line
					options={options}
					data={data}
					ref={chartRef}
				/>
			</Box>
			<Flex
				flexDir="row-reverse"
				mt={4}
			>
				<ChartLegend legend={legendItems} />
			</Flex>
		</Box>
	);
};

export default LiabilitiesTrendChart;
