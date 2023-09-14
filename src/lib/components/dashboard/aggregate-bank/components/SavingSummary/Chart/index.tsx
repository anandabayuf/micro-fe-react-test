import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  ChartData,
} from "chart.js";

import ChartLabels from "chartjs-plugin-datalabels";
import { Box, Flex, Text } from "@chakra-ui/react";
import { TSummaryCurrencies } from "lib/services/api/aggregate-bank/getSummaryBalance/type";
import { backgroundColor } from "lib/constants";
import { parseMoney } from "lib/utils/currency";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

type DoughnutChartSummaryProps = {
  id?: string;
  data: TSummaryCurrencies[];
};

const DoughnutChartSummary: React.FC<DoughnutChartSummaryProps> = ({
  id,
  data,
}) => {
  const chartData: ChartData<"doughnut", number[], string> = React.useMemo(
    () => ({
      labels: data.map(({ name }) => name),
      datasets: [
        {
          data: data.map(({ percentage }) => Number(percentage)),
          backgroundColor: data.map((_, index) => backgroundColor[index]),
        },
      ],
    }),
    [data]
  );

  return (
    <Box maxW={400} maxH={400}>
      {chartData.datasets.length === 0 ? (
        <>
          <Flex alignItems="center" justifyContent="center" w="100%" h="20">
            <Text fontSize={12} color="gray.400" fontStyle="italic">
              No Data
            </Text>
          </Flex>
        </>
      ) : (
        <Doughnut
          data={chartData}
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
                  let tooltipEl: HTMLElement | null = document.getElementById(
                    `${id}-tooltip`
                  );

                  // Create element on first render
                  if (!tooltipEl) {
                    tooltipEl = document.createElement("div");
                    tooltipEl.id = `${id}-tooltip`;
                    tooltipEl.innerHTML = "<table></table>";
                    document.body.appendChild(tooltipEl);
                  }

                  // Hide if no tooltip
                  const tooltipModel: any = context.tooltip;
                  if (tooltipModel.opacity === 0) {
                    tooltipEl.style.opacity = "0";
                    return;
                  }

                  // Set caret Position
                  tooltipEl.classList.remove("above", "below", "no-transform");
                  if (tooltipModel.yAlign) {
                    tooltipEl.classList.add(tooltipModel.yAlign);
                  } else {
                    tooltipEl.classList.add("no-transform");
                  }

                  // Set Text
                  if (tooltipModel.body) {
                    let innerHtml = "<tbody>";
                    const indexTooltip = tooltipModel.dataPoints[0].dataIndex;
                    const tooltipBackground =
                      tooltipModel.dataPoints[0].dataset.backgroundColor[
                        indexTooltip
                      ];
                    const label = tooltipModel.dataPoints[0].label;
                    const value = Number(tooltipModel.dataPoints[0].raw);
                    const balance = data[indexTooltip]?.balanceLocal;

                    let style = "background: white";
                    style += "; position : relative";
                    style += "; padding : 8px 16px";
                    style += "; border-radius : 8px";
                    style += "; border-color : " + tooltipBackground;
                    style += "; border-width: 1px";
                    style += "; z-index : 2";
                    style += "; white-space : nowrap;";
                    innerHtml += `<tr>
                      <td>
                        <div style="${style}" class="">
                          <span style="color: ${tooltipBackground};font-weight:bold">${label}</span><br/>
                          <span style="font-weight:bold">${parseMoney(
                            String(balance)
                          )}</span><br/>
                          <span>${value} %</span>
                        </div>
                      </td>
                    </tr>`;

                    let tableRoot: HTMLElement | null =
                      tooltipEl.querySelector("table");
                    if (tableRoot) tableRoot.innerHTML = innerHtml;
                  }

                  const position = context.chart.canvas.getBoundingClientRect();

                  // Display, position, and set styles for font
                  tooltipEl.style.opacity = "1";
                  tooltipEl.style.position = "absolute";
                  tooltipEl.style.left =
                    position.left +
                    window.pageXOffset +
                    tooltipModel.caretX +
                    "px";
                  tooltipEl.style.top =
                    position.top +
                    window.pageYOffset -
                    40 +
                    tooltipModel.caretY +
                    "px";
                  // tooltipEl.style.font = bodyFont.string;
                  tooltipEl.style.padding =
                    tooltipModel.padding + "px " + tooltipModel.padding + "px";
                  tooltipEl.style.pointerEvents = "none";
                },
              },
              datalabels: {
                formatter: (value, context) => {
                  return `${
                    context.chart.data.labels?.[context.dataIndex]
                  }\n ${value}%`;
                },
                textAlign: "center",
                font: {
                  weight: "bold",
                },
                color: "white",
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
