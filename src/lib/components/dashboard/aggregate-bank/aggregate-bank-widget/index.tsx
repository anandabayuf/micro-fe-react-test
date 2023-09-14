import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { useIntl } from "react-intl";
import DoughnutLoanChart from "./Chart";
import ChartLegend from "./ChartLegend";
import {
  useSummaryCurrent,
  useSummarySaving,
} from "lib/services/api/aggregate-bank/getSummaryBalance";
import { useAuth } from "lib/store/auth";
import { useAggregateBankStore } from "lib/store/useAggregateBank";
import shallow from "zustand/shallow";
import { colors } from "lib/styles/customTheme/colors";
import { format } from "date-fns";

const AggregateBankWidget: React.FC = () => {
  const intl = useIntl();
  const { companyId } = useAuth();
  const [isDesktop] = useMediaQuery("(min-width: 1150px)");

  const { data: summaryCurrentData } = useSummaryCurrent({
    corporateId: companyId as string,
  });
  const { data: summarySavingData } = useSummarySaving({
    corporateId: companyId as string,
  });
  const { addSummaryBalanceWidget, resetSummaryBalanceWidget } =
    useAggregateBankStore((state) => state, shallow);

  React.useEffect(() => {
    if (!summaryCurrentData?.content || !summarySavingData?.content)
      return resetSummaryBalanceWidget();
    const summaryBalanceWidgetData = [
      {
        label: intl.formatMessage({ id: `aggregateBank.label.current` }),
        balanceLocal: summaryCurrentData?.content?.balanceLocal,
        backgroundColor: colors.orange?.[500] as string,
      },
      {
        label: intl.formatMessage({ id: `aggregateBank.label.saving` }),
        balanceLocal: summarySavingData?.content?.balanceLocal,
        backgroundColor: colors.teal?.[500] as string,
      },
    ];
    addSummaryBalanceWidget(summaryBalanceWidgetData);
  }, [summaryCurrentData, summarySavingData]);

  return (
    <div>
      <Box
        bg="white"
        rounded="xl"
        py={6}
        width={"100%"}
        display={"flex"}
        flexDirection={isDesktop ? "row" : "column"}
        alignItems={"center"}
        gap={8}
      >
        <DoughnutLoanChart />
        <ChartLegend />
      </Box>
    </div>
  );
};

export default AggregateBankWidget;
