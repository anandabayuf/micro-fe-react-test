import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useLocation } from "react-router-dom";
import shallow from "zustand/shallow";
import SavingSummaryTable from "./Table";
import DoughnutChartSummary from "./Chart";
import TotalDeposit from "./TotalDeposit";
import { useSummaryBalanceAll } from "lib/services/api/aggregate-bank/getSummaryBalance";
import { useAggregateBankStore } from "lib/store/useAggregateBank";
import { useAuth } from "lib/store/auth";

const SavingSummary: React.FC = ({}) => {
  const { pathname } = useLocation();
  const { selectedCorporate } = useAggregateBankStore(
    (state) => state,
    shallow
  );
  const { companyId } = useAuth((state) => state, shallow);

  const { data: summaryBalanceData } = useSummaryBalanceAll({
    corporateId:
      selectedCorporate !== "all" ? selectedCorporate : (companyId as string),
    needGetChildCif: selectedCorporate !== "all" ? false : true,
  });

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
      <Flex flexDirection={"column"}>
        <Flex
          gap={4}
          direction={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          mb={8}
        >
          <Flex direction={"column"} gap={1} w={"100%"}>
            <Text fontSize={24} fontWeight={"bold"}>
              <FormattedMessage id="aggregateBank.card.summary.title" />
            </Text>
            <Text fontSize={14}>
              <FormattedMessage id="aggregateBank.card.summary.subtitle" />
            </Text>
          </Flex>
        </Flex>
        <TotalDeposit
          balanceLocal={summaryBalanceData?.content?.totalCurrency}
        />
        <Grid
          my="4"
          templateColumns={{
            base: "1fr",
            lg: pathname?.split("/")[1] ? "6fr 6fr" : "1fr",
          }}
          gap={4}
        >
          <Box overflow={"hidden"}>
            <SavingSummaryTable
              id={`saving-summary`}
              data={summaryBalanceData?.content?.currencies || []}
            />
          </Box>
          {pathname?.split("/")[1] && (
            <Box mx="auto">
              <Box position={"sticky"} top="32">
                <Text align={"center"} fontWeight="bold" mb={2}>
                  <FormattedMessage id="titleAssetDepositGraph" /> (%)
                </Text>
                <DoughnutChartSummary
                  id={`saving-summary-chart`}
                  data={summaryBalanceData?.content?.currencies || []}
                />
              </Box>
            </Box>
          )}
        </Grid>
        <Text fontSize="sm" color="gray.500" mb={3}>
          <FormattedMessage id="tableLegend" />
        </Text>
      </Flex>
    </Box>
  );
};

export default SavingSummary;
