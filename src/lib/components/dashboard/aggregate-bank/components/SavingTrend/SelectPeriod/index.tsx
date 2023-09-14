import { Box, Select, Text } from "@chakra-ui/react";
import { useAggregateBankStore } from "lib/store/useAggregateBank";
import { useOtherBankFilter } from "lib/store/useOtherBankFilter";
import React from "react";
import { FormattedMessage } from "react-intl";
import shallow from "zustand/shallow";

const SelectPeriod: React.FC = ({}) => {
  const { selectedPeriod, setSelectedPeriod } = useAggregateBankStore();
  const { dashboardPeriod } = useOtherBankFilter((state) => state, shallow);

  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      gap={2}
      alignItems={{ md: "center" }}
      width="100%"
      justifyContent="flex-end"
    >
      <Text whiteSpace={"nowrap"} fontWeight={"bold"}>
        <FormattedMessage id="aggregateBank.select.period" />
      </Text>
      <Select
        onChange={(e) => setSelectedPeriod(e.target.value)}
        value={selectedPeriod}
        maxWidth={{ base: "100%", md: 200 }}
      >
        {dashboardPeriod?.map(({ code, name }) => (
          <option value={code} key={code}>
            {name}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default SelectPeriod;
