import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
	Title,
	ChartData,
} from 'chart.js';

import ChartLabels from 'chartjs-plugin-datalabels';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useAssetSummaryStore } from 'lib/store/useAssetSummary';
import shallow from 'zustand/shallow';
import { parseMoney } from 'lib/utils/currency';
import { formatPercentage } from 'lib/utils/number';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

type DoughnutChartSummaryProps = {
	id?: string;
};

const DoughnutChartSummary: React.FC<DoughnutChartSummaryProps> = ({ id }) => {
	const { details } = useAssetSummaryStore(
		(state) => ({ details: state.details }),
		shallow
	);

	const data: ChartData<'doughnut', number[], string> = {
		labels: details.summary.map((data) => data.currency),
		datasets: [
			{
				data: details.summary.map((data) => Number(data.percentage)),
				backgroundColor: details.summary.map((data) => data.color),
			},
		],
	};
	return (
		<Box
			maxW={400}
			maxH={400}
		>
			{details.summary.length === 0 ? (
				<>
					<Flex
						alignItems="center"
						justifyContent="center"
						w="100%"
						h="20"
					>
						<Text
							fontSize={12}
							color="gray.400"
							fontStyle="italic"
						>
							No Data
						</Text>
					</Flex>
				</>
			) : (
				<Doughnut
					data={data}
					options={{
						elements: {
							arc: {
								borderWidth: 0,
							},
						},
						plugins: {
							legend: {
								display: false,
							},
							tooltip: {
								enabled: false,
								external: (context) => {
									// Tooltip Element
									let tooltipEl: HTMLElement | null =
										document.getElementById(
											`${id}-tooltip`
										);

									// Create element on first render
									if (!tooltipEl) {
										tooltipEl =
											document.createElement('div');
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
										tooltipEl.classList.add(
											tooltipModel.yAlign
										);
									} else {
										tooltipEl.classList.add('no-transform');
									}

									// Set Text
									if (tooltipModel.body) {
										let innerHtml = '<tbody>';
										const indexTooltip =
											tooltipModel.dataPoints[0]
												.dataIndex;
										const tooltipBackground =
											tooltipModel.dataPoints[0].dataset
												.backgroundColor[indexTooltip];
										const label =
											tooltipModel.dataPoints[0].label;
										const value = Number(
											tooltipModel.dataPoints[0].raw
										);
										const balance =
											details.summary[indexTooltip]
												?.balance;

										let style = 'background: white';
										style += '; position : relative';
										style += '; padding : 8px 16px';
										style += '; border-radius : 8px';
										style +=
											'; border-color : ' +
											tooltipBackground;
										style += '; border-width: 1px';
										style += '; z-index : 2';
										style += '; white-space : nowrap;';
										innerHtml += `<tr>
                      <td>
                        <div style="${style}" class="">
                          <span style="color: ${tooltipBackground};font-weight:bold">${label}</span><br/>
                          <span style="font-weight:bold">${parseMoney(
								balance
							)}</span><br/>
                          <span>${formatPercentage(value)}</span>
                        </div>
                      </td>
                    </tr>`;

										let tableRoot: HTMLElement | null =
											tooltipEl.querySelector('table');
										if (tableRoot)
											tableRoot.innerHTML = innerHtml;
									}

									const position =
										context.chart.canvas.getBoundingClientRect();

									// Display, position, and set styles for font
									tooltipEl.style.opacity = '1';
									tooltipEl.style.position = 'absolute';
									tooltipEl.style.left =
										position.left +
										window.pageXOffset +
										tooltipModel.caretX +
										'px';
									tooltipEl.style.top =
										position.top +
										window.pageYOffset -
										40 +
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
							datalabels: {
								formatter: (value, context) => {
									return `${
										context.chart.data.labels?.[
											context.dataIndex
										]
									}\n ${formatPercentage(value)}`;
								},
								textAlign: 'center',
								font: {
									weight: 'bold',
								},
								color: 'white',
							},
						},
					}}
					plugins={[ChartLabels]}
				/>
			)}
		</Box>
	);
};

export default DoughnutChartSummary;
