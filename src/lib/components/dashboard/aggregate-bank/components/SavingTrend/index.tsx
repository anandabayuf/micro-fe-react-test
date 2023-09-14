import { Box, Flex, Select, Text } from "@chakra-ui/react";
import React from "react";
import TrendChart from "./Chart";
import SelectPeriod from "./SelectPeriod";
import { FormattedMessage } from "react-intl";
import { useGetBalanceTrend } from "lib/services/api/aggregate-bank/getBalanceTrend";
import { useAggregateBankStore } from "lib/store/useAggregateBank";
import shallow from "zustand/shallow";
import { useAuth } from "lib/store/auth";

const Trend: React.FC = () => {
  const { selectedCorporate, selectedPeriod } = useAggregateBankStore(
    (state) => state,
    shallow
  );
  const { companyId } = useAuth((state) => state, shallow);

  const { data: balanceTrendData } = useGetBalanceTrend({
    corporate:
      selectedCorporate !== "all" ? selectedCorporate : (companyId as string),
    period: selectedPeriod,
    needGetChildCif: selectedCorporate !== "all" ? false : true,
  });

  const chartData = React.useMemo(() => {
    return {
      labels: balanceTrendData?.content?.map(({ barName }) => barName) || [],
      dataSets: balanceTrendData?.content?.map(({ balance }) => balance) || [],
    };
  }, [balanceTrendData]);

  return (
    <Box
      bg="white"
      rounded="xl"
      p={6}
      mt={8}
      display="flex"
      flexDirection={"column"}
      gap={8}
    >
      <Flex
        gap={4}
        direction={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
      >
        <Flex direction={"column"} gap={1} w={"100%"}>
          <Text fontSize={24} fontWeight={"bold"}>
            <FormattedMessage id="aggregateBank.card.trend.title" />
          </Text>
          <Text fontSize={14}>
            <FormattedMessage id="aggregateBank.card.trend.subtitle" />
          </Text>
        </Flex>
        <SelectPeriod />
      </Flex>
      <TrendChart
        id="trend-chart"
        labels={chartData?.labels}
        dataSets={chartData?.dataSets}
      />
    </Box>
  );
};

export default Trend;
