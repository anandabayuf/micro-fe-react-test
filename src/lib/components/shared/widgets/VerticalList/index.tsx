import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import { FormattedMessage } from "react-intl";

type VerticalListDataset = {
  name: string;
  amount: string;
};

type VerticalListProps = {
  title?: string;
  datasets: VerticalListDataset[] | undefined;
  total: string;
  isHeaderMultiline?: boolean;
};

const VerticalList = ({
  title,
  datasets,
  total,
  isHeaderMultiline = false,
}: VerticalListProps) => {
  return (
    <Box>
      <Flex
        justifyContent="space-between"
        flexDirection={isHeaderMultiline ? { base: "row", md: "column" } : {}}
        py={3}
      >
        {title && (
          <Text fontSize={14} mb={isHeaderMultiline ? { base: 0, md: 1 } : {}}>
            {title}
          </Text>
        )}
        <Text fontSize={18} fontWeight={700}>
          IDR {total}
        </Text>
      </Flex>
      <Flex justifyContent={isHeaderMultiline ? "start" : "end"}>
        <Text fontSize="sm" color="gray.500" mb={3}>
          <FormattedMessage id="tableLegend" />
        </Text>
      </Flex>
      <Divider />
      {datasets?.map((d, i) => (
        <Fragment key={d.name}>
          <Flex justifyContent="space-between" py={3}>
            <Text fontSize={14}>{d.name}</Text>
            <Text fontSize={14} fontWeight={700}>
              {d.amount}
            </Text>
          </Flex>
          {i + 1 !== datasets?.length && <Divider />}
        </Fragment>
      ))}
    </Box>
  );
};

export default VerticalList;
