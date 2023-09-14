import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { useGetKursIcons } from "lib/services/api/kurs/getKursIcon";
import { useGetKursList } from "lib/services/api/kurs/getKursList";
import { useKursStore } from "lib/store/kurs";
import { parseMoney } from "lib/utils/currency";
import React from "react";
import { useIntl } from "react-intl";
import { useTable } from "react-table";
import shallow from "zustand/shallow";
import KursConversion from "../kurs-conversion";
import { parseDate } from "../utils";

const KursWidget: React.FC<{ isHomepage?: boolean }> = ({ isHomepage }) => {
  const intl = useIntl();
  const { data: kursDataList, mutate } = useGetKursList();
  const { data: kursDataIcons } = useGetKursIcons();
  const { addKursData, resetKursData, listExchangeRate } = useKursStore(
    (state) => state,
    shallow
  );

  React.useEffect(() => {
    if (!kursDataIcons || !kursDataIcons.content) return;
    if (kursDataList?.content === undefined) return resetKursData();

    let mutatedKursList = kursDataList.content.listExchangeRate;
    let targetCurrency = "";
    for (let i = 0; i < kursDataIcons.content.length; i++) {
      targetCurrency = kursDataIcons.content[i].currency as string;
      const foundKurs = kursDataList.content.listExchangeRate.find(
        (exchangeRate) => exchangeRate.currency === targetCurrency
      );

      kursDataList.content.listExchangeRate.find((exchangeRate) => {
        return exchangeRate.currency === targetCurrency;
      });

      if (foundKurs) foundKurs.icon = kursDataIcons.content[i].icon;
    }

    return addKursData({
      latestUpdatedTime: kursDataList.content.latestUpdatedTime,
      listExchangeRate: mutatedKursList,
    });
  }, [kursDataList, kursDataIcons]);

  // const filteredKursData = isHomepage
  //   ? listExchangeRate.filter((_, index) => index < 5)
  //   : listExchangeRate || [];

  const filteredKursData = listExchangeRate || [];

  const tableColumns = React.useMemo(
    () => [
      {
        accessor: "currency",
        Header: "currency",
      },
      {
        accessor: "buy",
        Header: "buy",
      },
      {
        accessor: "sell",
        Header: "sell",
      },
    ],
    []
  );
  const tableData = React.useMemo(
    () =>
      filteredKursData?.map((exchangeRate) => {
        return {
          currency: exchangeRate.currency,
          buy: exchangeRate.buyRate,
          sell: exchangeRate.sellRate,
          icon: exchangeRate.icon,
        };
      }),
    [listExchangeRate, kursDataIcons]
  );

  const { headerGroups, rows } = useTable({
    columns: tableColumns as any,
    data: tableData,
  });
  return (
    <>
      <Text color="orange.500" fontWeight="bold" fontSize="md" marginBottom={5}>
        TT Counter
      </Text>
      <Grid
        templateColumns="1fr 1fr 1fr"
        borderBottom={"1px"}
        borderBottomColor="orange.100"
        pb={1}
      >
        {headerGroups[0]?.headers?.map((header, index) => {
          return (
            <Box fontSize={12} color="gray.500" key={index}>
              {intl.formatMessage({
                id: header.render("Header") as string,
              })}
            </Box>
          );
        })}
      </Grid>
      <Grid
        textAlign="left"
        w="full"
        templateColumns="1fr 1fr 1fr"
        maxH={200}
        overflow="scroll"
        fontSize={14}
      >
        {rows.map((row, index) => {
          return (
            <React.Fragment key={index}>
              <Flex
                alignItems="left"
                borderBottom={"1px"}
                borderTop="1px"
                borderBottomColor="orange.100"
                borderTopColor="orange.100"
              >
                <Box
                  width="14px"
                  height="14px"
                  rounded="full"
                  display={"block"}
                  textAlign="left"
                />
                <Flex
                  alignItems="center"
                  width="60px"
                  justifyContent="space-between"
                >
                  <Box marginRight="10px">{row.original.currency}</Box>
                  {row.original.icon ? (
                    <Image
                      w={18}
                      h={13}
                      src={"data:image/png;base64," + row.original.icon}
                    />
                  ) : null}
                </Flex>
              </Flex>
              <Flex
                justifyContent="space-between"
                borderBottom={"1px"}
                py={"8px"}
                borderTop="1px"
                borderBottomColor="orange.100"
                borderTopColor="orange.100"
              >
                <Box fontWeight={700}>
                  {parseMoney(row?.original?.buy, {
                    limited: true,
                  })}
                </Box>
              </Flex>
              <Flex
                justifyContent="space-between"
                borderBottom={"1px"}
                py={"8px"}
                borderTop="1px"
                borderBottomColor="orange.100"
                borderTopColor="orange.100"
              >
                <Box fontWeight={700}>
                  {parseMoney(row?.original?.sell, {
                    limited: true,
                  })}
                </Box>
              </Flex>
            </React.Fragment>
          );
        })}
      </Grid>
      <Grid mt={5}>
        <Flex fontSize={12} color={"#4d4d4d"}>
          {intl.formatMessage({ id: "lastUpdate" })}
        </Flex>
        <Flex fontSize={14}>
          {kursDataList?.content?.latestUpdatedTime &&
            parseDate(kursDataList?.content?.latestUpdatedTime)}{" "}
          WIB.
        </Flex>
      </Grid>

      {isHomepage ? (
        <Box mt={5}>
          <KursConversion mutate={mutate} />
        </Box>
      ) : null}
    </>
  );
};

export default KursWidget;
