import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { backgroundColor } from "lib/constants";
import { useSummaryAssetCIF } from "lib/services/api/asset/summaryassetcif";
import { useAssetSummaryStore } from "lib/store/useAssetSummary";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useLocation } from "react-router-dom";
import shallow from "zustand/shallow";
import AssetSummaryTable from "./AssetSummaryTable";
import DoughnutChartSummary from "./DoughnutChartSummary";
import TotalDeposit from "./TotalDeposit";

type AssetSummaryProps = {
  cifNo: string | null;
  isHomepage?: boolean;
  id?: string;
};

const AssetSummary: React.FC<AssetSummaryProps> = ({
  cifNo,
  isHomepage,
  id,
}) => {
  const { pathname } = useLocation();
  const { data } = useSummaryAssetCIF({ cifNo });
  const { addSummaryAssetCif, resetSummaryAssetCif } = useAssetSummaryStore(
    (state) => state,
    shallow
  );

  React.useEffect(() => {
    if (data?.content === undefined) return resetSummaryAssetCif();
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

    return addSummaryAssetCif(manipulatedData);
  }, [data, cifNo]);

  const { formatMessage } = useIntl();

  return (
    <>
      <Flex flexDirection={"column"}>
        <TotalDeposit isHomepage={isHomepage} />
        {isHomepage && (
          <Text textAlign={"right"} fontSize="sm" color="gray.500" mb={3}>
            <FormattedMessage id="tableLegend" />
          </Text>
        )}
        <Grid
          my="4"
          templateColumns={{
            base: "1fr",
            lg: pathname?.split("/")[1] ? "6fr 6fr" : "1fr",
          }}
          gap={4}
        >
          <Box overflow={"hidden"}>
            <AssetSummaryTable
              id={`${id}-asset-summary`}
              isHomepage={isHomepage}
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
            />
          </Box>
          {pathname?.split("/")[1] && (
            <Box mx="auto">
              <Box position={"sticky"} top="32">
                <Text align={"center"} fontWeight="bold" mb={2}>
                  <FormattedMessage id="titleAssetDepositGraph" /> (%)
                </Text>
                <DoughnutChartSummary id={`${id}-asset-summary-chart`} />
              </Box>
            </Box>
          )}
        </Grid>
        {!isHomepage && (
          <Text fontSize="sm" color="gray.500" mb={3}>
            <FormattedMessage id="tableLegend" />
          </Text>
        )}
      </Flex>
    </>
  );
};

export default AssetSummary;
