import React from "react";
import PageTitle from "lib/components/shared/PageTitle";
import { useIntl } from "react-intl";
import { Box, Flex } from "@chakra-ui/react";
import SelectCorporate from "./components/SelectCorporate";
import SelectBank from "./components/SelectBank";
import { useCorporateList } from "lib/services/api/aggregate-bank/getCorporateList";
import { useOtherBankFilter } from "lib/store/useOtherBankFilter";
import shallow from "zustand/shallow";
import { useBankList } from "lib/services/api/aggregate-bank/getBank";
import SavingTrend from "./components/SavingTrend";
import { useDashboardPeriod } from "lib/services/api/asset/getdashboardperiod";
import { useAggregateBankStore } from "lib/store/useAggregateBank";
import SavingSummary from "./components/SavingSummary";
import SavingDetail from "./components/SavingDetail";

const AggregateBank: React.FC = () => {
  const intl = useIntl();
  const { setSelectedPeriod, setSelectedCorporate } = useAggregateBankStore(
    (state) => state,
    shallow
  );

  const { data: corporateList } = useCorporateList();
  const { data: bankList } = useBankList();
  const { data: dashboardPeriod } = useDashboardPeriod();

  const { addOtherBankCorporateList, addBankList, addDashboardPeriod } =
    useOtherBankFilter((state) => state, shallow);

  React.useEffect(() => {
    addOtherBankCorporateList(corporateList?.content || []);
    addBankList(bankList?.content || []);
    addDashboardPeriod(dashboardPeriod?.content || []);
    setSelectedCorporate(corporateList?.content?.[0]?.id || "");
    setSelectedPeriod(dashboardPeriod?.content?.[0]?.code || "");
  }, [corporateList, bankList, dashboardPeriod]);

  return (
    <Box p={6}>
      <PageTitle
        id="cashflow-page"
        title={intl.formatMessage({ id: "aggregateBank.widget.title" })}
      />
      <Flex gap={{ base: 4, lg: 8 }} direction={{ base: "column", lg: "row" }}>
        <SelectCorporate />
        <SelectBank />
      </Flex>
      <SavingTrend />
      <SavingSummary />
      <SavingDetail />
    </Box>
  );
};

export default AggregateBank;
