import { Box, Flex, Text } from '@chakra-ui/react';
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
} from 'chart.js';
import type { ScriptableTooltipContext } from 'chart.js';
import { isEqual } from 'lodash';
import { useMemo, useRef, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';

import ChartLegend from 'lib/components/shared/widgets/legend';
import { colors } from 'lib/styles/customTheme/colors';

import { barChartStyles, lineChartStyles } from './styles';
import { formatNumber } from 'lib/utils/currency';

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

export type BaseChartProps = {
  labels?: string[];
  inDatasets?: number[];
  outDatasets?: number[];
  inDatasetLabel?: string;
  outDatasetLabel?: string;
  chartType?: 'bar' | 'line';
};

const BaseChart = ({
  labels,
  inDatasets,
  outDatasets,
  outDatasetLabel,
  inDatasetLabel,
  chartType = 'line',
}: BaseChartProps) => {
  const data = useMemo(() => {
    return {
      labels,
      datasets: [
        ...(inDatasets
          ? [
              {
                label: inDatasetLabel,
                data: inDatasets,

                backgroundColor: colors.teal?.[500],
                ...(chartType === 'line'
                  ? {
                      borderColor: colors.teal?.[500],
                      ...lineChartStyles,
                    }
                  : barChartStyles),
              },
            ]
          : [
              {
                label: inDatasetLabel,
                data: [],

                backgroundColor: colors.teal?.[500],
              },
            ]),
        ...(outDatasets
          ? [
              {
                label: outDatasetLabel,
                data: outDatasets,
                backgroundColor: colors.orange?.[500],
                ...(chartType === 'line'
                  ? {
                      borderColor: colors.orange?.[500],
                      ...lineChartStyles,
                    }
                  : barChartStyles),
              },
            ]
          : [
              {
                label: outDatasetLabel,
                data: [],
                backgroundColor: colors.orange?.[500],
              },
            ]),
      ],
    };
  }, [
    labels,
    outDatasets,
    outDatasetLabel,
    chartType,
    inDatasets,
    inDatasetLabel,
  ]);

  const chartRef = useRef<ChartJS<never>>(null);
  const [tooltip, setTooltip] = useState({
    opacity: 0,
    top: 0,
    left: 0,
    date: '',
    label: '',
    value: 0,
    tooltipColor : ''
  });

  const options = {
    maintainAspectRatio: false,
    maxBarThickness: 14,
    plugins: {
      legend: {
        display: false,
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        enabled: false,
        // eslint-disable-next-line
        external: (context: ScriptableTooltipContext<any>) => {
          const tooltipModel = context.tooltip;
          if (!chartRef || !chartRef.current) return;

          if (tooltipModel.opacity === 0) {
            if (tooltip.opacity !== 0)
              setTooltip((prev) => ({ ...prev, opacity: 0 }));
            return;
          }
          const position = context.chart.canvas.getBoundingClientRect();
          const newTooltip = {
            opacity: 1,
            left: position.left + tooltipModel.caretX + 10,
            top: position.top + tooltipModel.caretY - 20 + window.scrollY,
            date: tooltipModel.dataPoints[0].label,
            label: tooltipModel.dataPoints[0].dataset.label,
            value: Number((Number(tooltipModel.dataPoints[0].raw) / 1000000).toFixed(2)),
            tooltipColor : tooltipModel.dataPoints[0].dataset.backgroundColor
          };
          if (!isEqual(tooltip, newTooltip)) setTooltip(newTooltip);
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
            return formatNumber(String(Number(yValue) / 1000000));
          },
        },
      },
    },
  };

  const tooltipStyles = {
    content: '""',
    position: 'absolute',
    borderTop: '8px solid transparent',
    borderBottom: '8px solid transparent',
    top: '0',
    marginTop: '10px',
  };

  const legendItems = chartRef?.current?.legend?.legendItems;

  return (
    <Box>
      <Box height={320}>
        {chartType === 'line' ? (
          <Line options={options} data={data} ref={chartRef} />
        ) : (
          <Bar options={options} data={data} ref={chartRef} />
        )}
        <Flex
          className="tooltip"
          position="absolute"
          top={tooltip.top}
          left={tooltip.left}
          opacity={tooltip.opacity}
          boxShadow={`0px 8px 16px -8px ${tooltip.tooltipColor}`}
          bg="white"
          border={`1px solid ${tooltip.tooltipColor}`}
          borderRadius={8}
          p={2}
          _before={{
            ...tooltipStyles,
            left: '-9px',
            borderRight: `8px solid ${tooltip.tooltipColor}`,
          }}
          _after={{
            ...tooltipStyles,
            left: '-2',
            borderRight: '8px solid white',
            zIndex: 1,
          }}
        >
          {chartType === 'line' && (
            <Text color="gray.400" mr={1}>
              {tooltip.label}:
            </Text>
          )}
          <Text>IDR {formatNumber(String(tooltip.value))}</Text>
        </Flex>
      </Box>
      {/* {legendItems?.length !== 0 && ( */}
      <Flex flexDir="row-reverse" mt={4}>
        <ChartLegend legend={legendItems} />
      </Flex>
      {/* )} */}
    </Box>
  );
};

export default BaseChart;
