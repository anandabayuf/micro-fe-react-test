import { Box, Flex } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { useMemo, useRef } from "react";
import { Line } from "react-chartjs-2";
import { colors } from "lib/styles/customTheme/colors";
import { formatNumber, parseMoney } from "lib/utils/currency";
import ChartLegend from "./ChartLegend";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type TrendChartProps = {
  labels?: string[];
  dataSets?: number[];
  id?: string;
};

const TrendChart: React.FC<TrendChartProps> = ({
  labels,
  dataSets = [],
  id,
}) => {
  const data = useMemo(() => {
    return {
      labels,
      datasets: [
        {
          label: labels?.[0],
          data: dataSets,
          backgroundColor: colors.teal?.[500],
          borderColor: colors.teal?.[500],
          pointStyle: "circle",
          pointRadius: 5,
        },
      ],
    };
  }, [labels, dataSets]);

  const chartRef = useRef<ChartJS<never>>(null);

  const options: ChartOptions<"line"> = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        // Disable the on-canvas tooltip
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
            const tooltipBackground =
              tooltipModel.dataPoints[0].dataset.backgroundColor;
            const value = Number(
              (Number(tooltipModel.dataPoints[0].raw) / 1000000).toFixed(2)
            );
            // document.head.innerHTML += `
            //   <style>
            //     #chartjs-tooltip::before{
            //       content: "";
            //       position: absolute;
            //       width: 0;
            //       height: 0;
            //       border-top: 15px solid transparent;
            //       border-bottom: 15px solid transparent;
            //       border-right: 15px solid ${tooltipBackground};
            //       top: -2px;
            //       left: -9px;
            //       z-index: 2;
            //     }

            //     #chartjs-tooltip::after{
            //       content: "";
            //       position: absolute;
            //       width: 0;
            //       height: 0;
            //       border-top: 15px solid transparent;
            //       border-bottom: 15px solid transparent;
            //       border-right: 15px solid #fff;
            //       top : -2px;
            //       left: -6px;
            //       z-index: 3;
            //     }
            //   </style>
            // `;
            let style = "background: white";
            style += "; position : relative";
            style += "; border-color:" + tooltipBackground;
            style += "; box-shadow : 0px 8px 16px -8px" + tooltipBackground;
            style += "; padding : 8px";
            style += "; border-radius : 8px";
            style += "; border : 1px solid " + tooltipBackground;
            style += "; border-width: 2px";
            style += "; z-index : 2";
            style += "; white-space : nowrap;";
            const span =
              '<span style="' +
              style +
              ' class=""> IDR ' +
              parseMoney(String(value)) +
              "</span>";
            innerHtml += "<tr><td>" + span + "</td></tr>";
            innerHtml += "</tbody>";

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
            10 +
            tooltipModel.caretX +
            "px";
          tooltipEl.style.top =
            position.top + window.pageYOffset - 10 + tooltipModel.caretY + "px";
          // tooltipEl.style.font = bodyFont.string;
          tooltipEl.style.padding =
            tooltipModel.padding + "px " + tooltipModel.padding + "px";
          tooltipEl.style.pointerEvents = "none";
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
            return parseMoney(String(Number(yValue) / 1000000));
          },
        },
      },
    },
  };

  return (
    <Box width={"100%"}>
      <Box height={320}>
        <Line options={options} data={data} ref={chartRef} />
      </Box>
      {data?.datasets?.length > 0 && (
        <Flex flexDir="row-reverse" mt={4}>
          <ChartLegend />
        </Flex>
      )}
    </Box>
  );
};

export default TrendChart;
