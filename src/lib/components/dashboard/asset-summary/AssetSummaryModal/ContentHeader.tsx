import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface ContentHeaderProps {
  type: string | React.ReactNode;
  amount: string | React.ReactNode;
  conversionAmount?: string | React.ReactNode;
  totalAccount: string;
  currency: string;
}

const ContentHeader: React.FC<any> = ({
  type,
  amount,
  conversionAmount,
  totalAccount,
  currency,
}) => {
  return (
    <Flex direction={"column"}>
      <Text fontSize="xs" fontWeight="semibold" color="orange.500">
        {type}
      </Text>
      <Text fontWeight="extrabold">
        {currency} {amount}
      </Text>
      {conversionAmount && currency !== "IDR" ? (
        <Text fontWeight="bold">IDR {conversionAmount}</Text>
      ) : null}
      <Text fontSize="sm" fontWeight="bold" color="grey">
        {totalAccount}
      </Text>
    </Flex>
  );
};

export default ContentHeader;
