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
import { formatNumber, formatDecimal } from "lib/utils/currency";
import { changeIntoIdFormat } from "lib/utils/id";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { TableContentProps } from "./interfaces";
import Pagination from "lib/components/pagination/pagination";
import { useExpanded, usePagination, useSortBy, useTable } from "react-table";
import HeaderItem from "../Table/headerItem";

const ContentTableMobile: React.FC<TableContentProps> = ({
  onSort,
  columns,
  tableData,
  defaultItemPerPage,
  defaultPageNumber,
  totalPage = 0,
  id,
}) => {
  const {
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, sortBy },
  } = useTable(
    {
      columns,
      data: tableData,
      initialState: {
        pageIndex: defaultPageNumber,
        pageSize: defaultItemPerPage,
      },
      manualPagination: true,
      manualSortBy: true,
      pageCount: Math.ceil(totalPage / defaultItemPerPage),
    },
    useSortBy,
    useExpanded,
    usePagination
  );

  React.useEffect(() => {
    if (onSort) {
      onSort({ sortBy, pageIndex, pageSize });
    }
  }, [onSort, sortBy, pageIndex, pageSize]);

  const onItemPerPagePress = (number: number) => setPageSize(number);

  const onPreviousPagePress = () => previousPage();

  const onNextPagePress = () => nextPage();

  return (
    <>
      <Grid
        templateColumns="6fr 6fr"
        borderBottom={"1px"}
        borderBottomColor="orange.100"
        pb="1"
        mt="6"
      >
        {headerGroups[0]?.headers?.map((header, index) => {
          if (header.id === "bank" || header.id === "accountNumber")
            return (
              <HeaderItem
                id={`${id}-table-header-item-${
                  header.Header === "" ? "action" : header.Header
                }`}
                header={header}
                {...header.getHeaderProps()}
              />
            );
        })}
      </Grid>
      <Accordion id={`${id}-accordion`} allowToggle pointerEvents={"initial"}>
        {page.length === 0 ? (
          <Flex alignItems="center" justifyContent="center" w="100%" h="20">
            <Text fontSize={12} color="gray.400" fontStyle="italic">
              No Data
            </Text>
          </Flex>
        ) : (
          <>
            {page.map((row, index) => {
              prepareRow(row);
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
                        <Text>{row.values.bank}</Text>
                      </Flex>
                      <Flex justifyContent="space-between">
                        <Box fontWeight={700} ml={0}>
                          {row.values.accountNumber}
                        </Box>
                        <AccordionIcon color="orange.500" />
                      </Flex>
                    </Grid>
                  </AccordionButton>
                  <AccordionPanel px={0}>
                    <Flex flexDirection="column">
                      {headerGroups[0]?.headers?.map((header, index) => {
                        if (
                          header.id !== "bank" &&
                          header.id !== "accountNumber"
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
                                <FormattedMessage
                                  id={header.render("Header") as string}
                                />
                              </Box>
                              <Box fontSize={14}>
                                {header.id === "localBalance"
                                  ? formatNumber(row.values[header.id])
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
      <Box mb="4" />
      <Pagination
        countData={totalPage}
        currentPageSize={pageSize}
        currentPageIndex={pageIndex}
        listPageSize={totalPage && totalPage > 10 ? [10, 20, 30] : [10]}
        selectPageIndex={gotoPage}
        selectedListperPage={setPageSize}
        onNextPage={onNextPagePress}
        onPrevPage={onPreviousPagePress}
      />
    </>
  );
};

export default ContentTableMobile;
