import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Grid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSortBy, useTable } from "react-table";
import { columns } from "./constants";
import { backgroundColor } from "lib/constants";
import { changeIntoIdFormat } from "lib/utils/id";
import { formatDecimal, parseMoney } from "lib/utils/currency";
import { useIntl } from "react-intl";
import { TSummaryCurrencies } from "lib/services/api/aggregate-bank/getSummaryBalance/type";

type ContentTableProps = {
  id?: string;
  data: TSummaryCurrencies[];
};

const AssetSummaryTable: React.FC<ContentTableProps> = ({ id, data }) => {
  const intl = useIntl();

  const dataSets = React.useMemo(
    () =>
      data?.map((data: TSummaryCurrencies, index: number) => {
        return {
          currency: data.name,
          balance: String(data.balanceOri),
          localBalance: String(data.balanceLocal),
          percentage: String(data.percentage),
          color: backgroundColor[index],
        };
      }) || [],
    [data]
  );

  const { headerGroups, rows, setSortBy } = useTable(
    {
      columns: columns as any[],
      data: dataSets,
    },
    useSortBy
  );

  useEffect(() => {
    setSortBy([{ id: "percentage", desc: true }]);
  }, [dataSets]);

  return (
    <>
      <Grid
        templateColumns="6fr 6fr"
        borderBottom={"1px"}
        borderBottomColor="orange.100"
        pb="1"
      >
        {headerGroups[0]?.headers?.map((header, index) => {
          if (header.id === "currency" || header.id === "balance")
            return (
              <Box fontSize={12} color="gray.500" key={index}>
                {intl.formatMessage({ id: header.render("Header") as string })}
              </Box>
            );
        })}
      </Grid>
      <Accordion id={`${id}-accordion`} allowToggle pointerEvents={"initial"}>
        {rows.length === 0 ? (
          <Flex alignItems="center" justifyContent="center" w="100%" h="20">
            <Text fontSize={12} color="gray.400" fontStyle="italic">
              No Data
            </Text>
          </Flex>
        ) : (
          <>
            {rows.map((row, index) => {
              return (
                <AccordionItem
                  id={`${id}-accordion-item-${changeIntoIdFormat(
                    row.values.currency
                  )}`}
                  key={`${index}-Accordion`}
                  borderBottom={"1px"}
                  borderTop="1px"
                  borderBottomColor="orange.100"
                  borderTopColor="orange.100"
                >
                  <AccordionButton
                    id={`${id}-accordion-item-${changeIntoIdFormat(
                      row.values.currency
                    )}-btn`}
                    px={0}
                    py={2}
                  >
                    <Grid
                      textAlign="left"
                      w="full"
                      templateColumns="4fr 4fr"
                      fontSize={14}
                    >
                      <Flex alignItems="center">
                        <Box
                          width="14px"
                          height="14px"
                          marginRight={2}
                          rounded="full"
                          bgColor={row.values.color}
                        />
                        <Text>{row.values.currency}</Text>
                      </Flex>
                      <Flex justifyContent="space-between">
                        <Box fontWeight={700}>
                          {parseMoney(row.values.balance)}
                        </Box>
                        {<AccordionIcon color="orange.500" />}
                      </Flex>
                    </Grid>
                  </AccordionButton>
                  <AccordionPanel px={0}>
                    <Flex flexDirection="column">
                      {headerGroups[0]?.headers?.map((header, index) => {
                        if (
                          header.id !== "currency" &&
                          header.id !== "balance" &&
                          header.id !== "color"
                        )
                          return (
                            <Grid
                              key={index}
                              textAlign="left"
                              w="full"
                              templateColumns="4fr 4fr"
                              mb="2"
                            >
                              <Box fontSize={12} color="gray.500" key={index}>
                                {intl.formatMessage({
                                  id: header.render("Header") as string,
                                })}
                              </Box>
                              <Box fontSize={14}>
                                {header.id === "localBalance"
                                  ? parseMoney(row.values[header.id])
                                  : header.id === "percentage"
                                  ? `${formatDecimal(row.values[header.id])} %`
                                  : row.values[header.id]}
                              </Box>
                            </Grid>
                          );
                      })}
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>
              );
            })}
          </>
        )}
      </Accordion>
    </>
  );
};

export default AssetSummaryTable;
