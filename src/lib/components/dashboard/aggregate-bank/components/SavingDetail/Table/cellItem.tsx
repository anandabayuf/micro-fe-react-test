import { Flex, Text } from "@chakra-ui/react";
import { format } from "date-fns";

import type { CellItemPropsType } from "./types";

const CellItem = ({ cell, isFirstColumn, id }: CellItemPropsType) => {
  return (
    <Flex
      alignItems="center"
      w={cell.column.width}
      maxW={cell.column.maxWidth}
      minW={cell.column.minWidth}
      my={{ base: 1, md: 2 }}
      overflow="hidden"
    >
      <Text
        noOfLines={1}
        color="gray.900"
        fontSize={{ base: 14, md: 16 }}
        mr={4}
        maxW={cell.column.width}
        fontWeight={isFirstColumn ? "bold" : 400}
      >
        {cell.column.id === "createdDate"
          ? format(new Date(cell.value), "yyyy-MMM-dd")
          : cell.render("Cell")}
      </Text>
    </Flex>
  );
};

export default CellItem;
