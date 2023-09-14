import { Box, Select, Text } from "@chakra-ui/react";
import { useAggregateBankStore } from "lib/store/useAggregateBank";
import { useOtherBankFilter } from "lib/store/useOtherBankFilter";
import React from "react";
import { FormattedMessage } from "react-intl";
import shallow from "zustand/shallow";

const SelectBank: React.FC = ({}) => {
  const { selectedBank, setSelectedBank } = useAggregateBankStore();
  const { bankList } = useOtherBankFilter((state) => state, shallow);

  return (
    <Box display="flex" gap={2} w={"100%"} alignItems={"center"}>
      <Text whiteSpace={"nowrap"} fontWeight={"bold"}>
        <FormattedMessage id="aggregateBank.select.bank" />
      </Text>
      <Select
        onChange={(e) => setSelectedBank(e.target.value)}
        value={selectedBank}
      >
        {[{ bankName: "All" }, ...(bankList || [])]?.map(({ bankName }) => (
          <option value={bankName} key={bankName}>
            {bankName}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default SelectBank;
