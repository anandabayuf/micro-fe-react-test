import { Box, Select, Text } from "@chakra-ui/react";
import { useAggregateBankStore } from "lib/store/useAggregateBank";
import { useOtherBankFilter } from "lib/store/useOtherBankFilter";
import React from "react";
import { FormattedMessage } from "react-intl";
import shallow from "zustand/shallow";

const SelectCorporate: React.FC = ({}) => {
  const { selectedCorporate, setSelectedCorporate } = useAggregateBankStore();
  const { otherBankCorporateList } = useOtherBankFilter(
    (state) => state,
    shallow
  );

  return (
    <Box display="flex" gap={2} w={"100%"} alignItems={"center"}>
      <Text whiteSpace={"nowrap"} fontWeight={"bold"}>
        <FormattedMessage id="aggregateBank.select.customerId" />
      </Text>
      <Select
        onChange={(e) => setSelectedCorporate(e.target.value)}
        value={selectedCorporate}
      >
        {[
          { cif: "all", id: "all", name: "All" },
          ...(otherBankCorporateList || []),
        ]?.map(({ id, name }) => (
          <option value={id} key={id}>
            {id !== "all" ? `${id} - ${name}` : name}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default SelectCorporate;
