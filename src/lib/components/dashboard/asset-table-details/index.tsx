import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import type { Key } from "react";
import { FormattedMessage } from "react-intl";
import { AssetTableDetailsProps } from "./interfaces/interfaces";
import TableBody from "./components/TableBody/TableBody";

const AssetTableDetails: React.FC<AssetTableDetailsProps> = ({
  tableHeaders,
  datasets,
}) => {

  return (
    <TableContainer display={{ base: "none", lg: "block", md : "none" }}>
        <Table variant="simple" style={{tableLayout:"fixed"}}>
          <Thead>
            <Tr>
              <Th borderBottom={"1px"} borderBottomColor="orange.100" w={1}/>
              {tableHeaders.map((heading) => (
                <Th
                  key={heading as Key}
                  color="gray.500"
                  fontWeight={500}
                  textTransform="capitalize"
                  textAlign="right"
                  borderBottom={"1px"}
                  borderBottomColor="orange.100"
                >
                  <FormattedMessage id={heading} />
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            <TableBody datasets={datasets} tableHeaders={tableHeaders} />
          </Tbody>
        </Table>
    </TableContainer>
  );
};

export default AssetTableDetails;
