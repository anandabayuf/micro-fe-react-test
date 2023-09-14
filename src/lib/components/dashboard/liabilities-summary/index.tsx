import { useLocation } from "react-router-dom";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import TotalLoan from "./TotalLoan";
import LoanSummaryTable from "./LoanSummaryTable";
import DoughnutLoanChart from "./DoughnutLoanChart";
import { useSummaryLiabilitiesCIF } from "lib/services/api/liabilities/summaryliabilitiescif";
import { FormattedMessage, useIntl } from "react-intl";
import React from "react";
import { backgroundColor } from "lib/constants";
import { useLoanSummary } from "lib/store/useLoanSummary";
import shallow from "zustand/shallow";

type LiabilitiesSummaryProps = {
  cifNo: string | null;
  isHomepage?: boolean;
  id?: string;
};

const LiabilitiesSummary = ({
  cifNo,
  isHomepage,
  id,
}: LiabilitiesSummaryProps) => {
  const { pathname } = useLocation();

  const { data } = useSummaryLiabilitiesCIF({
    cifNo,
  });

  const { addSummaryLoanCif, resetSummaryLoanCif, details } = useLoanSummary(
    (state) => state,
    shallow
  );

  React.useEffect(() => {
    if (data?.content === undefined) return resetSummaryLoanCif();
    const manipulatedData = {
      ...data.content,
      details: {
        ...data.content.details,
        summary: [
          ...data.content.details.summary.map((summaryItem, index) => ({
            ...summaryItem,
            color: backgroundColor[Number(index.toString()[0])],
          })),
        ],
      },
    };

    return addSummaryLoanCif(manipulatedData);
  }, [data, cifNo]);

  const { formatMessage } = useIntl();

  return (
    <>
      <Flex flexDirection="column">
        <TotalLoan
          balanceLocal={data?.content?.balanceLocal || ""}
          isHomePage={isHomepage}
        />
        {isHomepage && (
          <Text fontSize="sm" color="gray.500" mb={3} textAlign="right">
            <FormattedMessage id="tableLegend" />
          </Text>
        )}
        <Grid
          my="4"
          templateColumns={{
            base: "1fr",
            md: pathname?.split("/")[1] ? "6fr 6fr" : "1fr",
          }}
          gap={4}
        >
          <Box overflow={"hidden"}>
            <LoanSummaryTable
              id={`${id}-liabilities-summary`}
              data={data?.content}
              columns={[
                {
                  accessor: "currency",
                  Header: formatMessage({
                    id: "headerSummaryCurrency",
                  }),
                },
                {
                  accessor: "balance",
                  Header: formatMessage({
                    id: "headerSummaryBalance",
                  }),
                },
                {
                  accessor: "localBalance",
                  Header: formatMessage({
                    id: "headerSummaryLocalBalance",
                  }),
                },
                {
                  accessor: "percentage",
                  Header: formatMessage({
                    id: "headerSummaryPercentage",
                  }),
                },
                {
                  accessor: "color",
                },
              ]}
              datasets={details.summary}
              isHomepage={isHomepage}
            />
          </Box>
          {pathname?.split("/")[1] && (
            <Box mx="auto">
              <Box position={"sticky"} top="32">
                <Text align={"center"} fontWeight="bold" mb={2}>
                  <FormattedMessage id="titleAssetLoanGraph" /> (%)
                </Text>
                <DoughnutLoanChart id={`${id}-liabilities-summary-chart`} />
              </Box>
            </Box>
          )}
        </Grid>
        {!isHomepage && (
          <Text
            fontSize="sm"
            color="gray.500"
            mb={3}
            display={{ base: "none", md: "initial" }}
          >
            <FormattedMessage id="tableLegend" />
          </Text>
        )}
      </Flex>
    </>
  );
};

export default LiabilitiesSummary;
