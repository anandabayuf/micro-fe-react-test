import { color, Td, Text, Tr, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useIntl } from "react-intl";
import { Cell, Row } from "react-table";

interface TableRowInterface {
  row: Row<object>;
}

const TableRow: React.FC<TableRowInterface> = ({ row }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(true);
  const { formatMessage } = useIntl();

  return (
    <>
      <Tr {...row.getRowProps()}>
        {row.cells.map((cell: Cell<object>) => {
          if (
            isMobile &&
            (cell.column.Header === formatMessage({ id: "accountType" }) ||
              cell.column.Header === formatMessage({ id: "currency" }))
          )
            return null;
          return (
            <Td
              borderBottom={"1px"}
              borderBottomColor="orange.100"
              {...cell.getCellProps()}
            >
              <Text fontWeight={isMobile ? "bold" : "normal"}>
                {cell.render("Cell")}
              </Text>
            </Td>
          );
        })}
        {isMobile ? (
          <Td
            onClick={() => setIsCollapsed(!isCollapsed)}
            borderBottom={"1px"}
            borderBottomColor="orange.100"
          >
            {isCollapsed ? (
              <FiChevronDown style={{ cursor: "pointer", color: "#E55300" }} />
            ) : (
              <FiChevronUp style={{ cursor: "pointer", color: "#E55300" }} />
            )}
          </Td>
        ) : null}
      </Tr>
      {isMobile && !isCollapsed ? (
        <>
          <Tr>
            <Td
              borderBottomColor="transparent"
              fontSize="xs"
              fontWeight="bold"
              color="grey"
            >
              Jenis Rekening
            </Td>
            <Td borderBottomColor="transparent" fontSize="xs" fontWeight="bold">
              {row.cells[1]?.value}
            </Td>
          </Tr>
          <Tr>
            <Td
              borderBottomColor="transparent"
              fontSize="xs"
              fontWeight="bold"
              color="grey"
            >
              Mata Uang
            </Td>
            <Td borderBottomColor="transparent" fontSize="xs" fontWeight="bold">
              {row.cells[2]?.value}
            </Td>
          </Tr>
        </>
      ) : null}
    </>
  );
};

export default TableRow;
