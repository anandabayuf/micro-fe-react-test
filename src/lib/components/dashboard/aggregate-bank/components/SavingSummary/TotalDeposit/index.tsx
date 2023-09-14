import { Flex, Text } from "@chakra-ui/react";
import { parseMoney } from "lib/utils/currency";
import React from "react";
import { useIntl } from "react-intl";

interface TotalDepositProps {
  balanceLocal?: number;
}

const TotalDeposit: React.FC<TotalDepositProps> = ({ balanceLocal }) => {
  const intl = useIntl();

  return (
    <Flex
      flexDirection={{ base: "row", md: "column" }}
      justifyContent="space-between"
    >
      <Text fontSize={14}>{intl.formatMessage({ id: "totalDeposit" })}</Text>
      <Text fontSize={18} fontWeight={700}>
        IDR {parseMoney(String(balanceLocal)) ?? "-"}
      </Text>
    </Flex>
  );
};

export default TotalDeposit;
