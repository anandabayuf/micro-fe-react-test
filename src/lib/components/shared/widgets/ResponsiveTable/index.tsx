import {
  Box,
  Divider,
  Grid,
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
} from '@chakra-ui/react';
import { get } from 'lodash';
import { Fragment } from 'react';
import type { Key } from 'react';
import { FormattedMessage } from 'react-intl';
import { formatNumber } from 'lib/utils/currency';

type ResponsiveTableProps = {
  tableHeaders: string[];
  datasets: Record<string,string | number | undefined | null>[];
  percentages? : Record<string,string | number | undefined | null>
};

const ResponsiveTable = ({ tableHeaders, datasets, percentages }: ResponsiveTableProps) => {
  const tableDataProps = {
    fontSize: 14,
    fontWeight: 700,
    isNumeric: true,
  }
  
  const renderTableBody = () => {
    return datasets.map((data, i) => {
      const borderBottomWidth = datasets.length - 1 === i ? 0 : 1;
      return (
          <Tr key={data.currency}>
            <Td px={0} borderBottomWidth={borderBottomWidth}>
              {data.currency}
            </Td>
            {tableHeaders.map((_, headerIndex) => (
              <Td {...tableDataProps} borderBottomWidth={borderBottomWidth} key={headerIndex}>
                {formatNumber(get(data, tableHeaders[headerIndex]) as string) ?? '-'}
              </Td>
            ))}
          </Tr>
      );
    });
  };

  const renderPercentage = () => {
    return (
      <Tr>
        <Td px={0} borderBottomWidth={0} isNumeric={false}>
          <FormattedMessage id={"Percentage"}/>
        </Td>
        {tableHeaders.map((header) => (
          <Td {...tableDataProps} borderBottomWidth={0} key={header}>
            {percentages && formatNumber(String(percentages[header]))}%
          </Td>
        ))}
      </Tr>
    )
  }

  return (
    <>
      <TableContainer maxW={"100%"} display={{ base: 'none', md: 'initial' }}>
        <Box overflowX="auto">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th />
                {tableHeaders.map((heading) => (
                  <Th
                    key={heading as Key}
                    color="gray.500"
                    fontWeight={500}
                    textTransform="capitalize"
                    textAlign="right"
                  >
                    <FormattedMessage id={heading} />
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {renderTableBody()}
              {percentages && renderPercentage()}
            </Tbody>
          </Table>
        </Box>
      </TableContainer>

      {/* Mobile Version */}
      <Box display={{ base: 'initial', md: 'none' }}>
        <Divider mb={2} />

        {tableHeaders.map((heading, i) => (
          <Fragment key={heading as Key}>
            <Text fontWeight={700} textTransform="capitalize" mb={4}>
              <FormattedMessage id={heading} />
            </Text>

            <SimpleGrid
              columns={2}
              display={{ base: 'grid', md: 'none' }}
              columnGap={4}
            >
              {datasets.map((data) => (
                <Grid key={data.currency} templateColumns="1fr 2fr">
                  <Text color="gray.500">{data.currency}</Text>
                  <Text textAlign="right">
                    {formatNumber(String(get(data, tableHeaders[i]) ?? '-'))}
                  </Text>
                </Grid>
              ))}
            </SimpleGrid>
            <Divider
              display={tableHeaders.length === i + 1 ? 'none' : 'block'}
              py={2}
              mb={2}
            />
          </Fragment>
        ))}
      </Box>
    </>
  );
};

export default ResponsiveTable;
