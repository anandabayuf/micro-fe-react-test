import { useMemo } from "react";

import WidgetWrapper from "lib/components/shared/widgets/WidgetWrapper";
import { useIntl } from "react-intl";
import AssetGridDetails from "../asset-grid-details";
import { DataSets, PercentagesResult } from "./interfaces/interfaces";
import AssetTableDetails from "../asset-table-details";
import AssetTableMobileDetails from "../asset-table-mobile-details";
import { useAssetSummaryStore } from "lib/store/useAssetSummary";
import shallow from "zustand/shallow";
import { sum } from "lodash";
import {
  ISummary,
  ISummaryDetail,
} from "lib/services/api/asset/summaryassetcif/types";

type AssetDetailsProps = {
  cifNo: string;
};

const AssetDetails = ({ cifNo }: AssetDetailsProps) => {
  const intl = useIntl();
  const { details } = useAssetSummaryStore(
    (state) => ({ details: state.details }),
    shallow
  );

  const headers: string[] = [
    "CurrentAccount",
    "SavingAccount",
    "DepositAccount",
    "KustodialAccount",
  ];
  const backgroundColors: string[] = [
    "orange.500",
    "orange.300",
    "teal.500",
    "teal.300",
  ];
  const accountTypePrefix: Record<string, string> = {
    CA: "1",
    SA: "2",
    D: "3",
    K: "4",
  };
  const checkAccountType = (
    item: ISummaryDetail,
    accountCode: string
  ): boolean => {
    if (item.accountType === accountCode) return true;
    if (item.accountType.startsWith(accountTypePrefix[accountCode]))
      return true;
    return false;
  };

  const datasets = useMemo((): DataSets[] | undefined => {
    return details.summary.map((item: ISummary) => ({
      currency: item.currency,
      DepositAccount: {
        balance: item.details.find((item: ISummaryDetail) =>
          checkAccountType(item, "D")
        )?.balance,
        percentage: item.details.find((item: ISummaryDetail) =>
          checkAccountType(item, "D")
        )?.percentage,
      },
      SavingAccount: {
        balance: item.details.find((item: ISummaryDetail) =>
          checkAccountType(item, "SA")
        )?.balance,
        percentage: item.details.find((item: ISummaryDetail) =>
          checkAccountType(item, "SA")
        )?.percentage,
      },
      CurrentAccount: {
        balance: item.details.find((item: ISummaryDetail) =>
          checkAccountType(item, "CA")
        )?.balance,
        percentage: item.details.find((item: ISummaryDetail) =>
          checkAccountType(item, "CA")
        )?.percentage,
      },
      KustodialAccount: {
        balance: item.details.find((item: ISummaryDetail) =>
          checkAccountType(item, "K")
        )?.balance,
        percentage: item.details.find((item: ISummaryDetail) =>
          checkAccountType(item, "K")
        )?.percentage,
      },
    }));
  }, [details]);

  const percentages = useMemo(() => {
    let result: PercentagesResult = {
      DepositAccount: 0,
      SavingAccount: 0,
      CurrentAccount: 0,
      KustodialAccount: 0,
    };
    if (datasets) {
      result["DepositAccount"] =
        sum(
          datasets.map((res) =>
            Number(res["DepositAccount"]["percentage"] || 0)
          )
        ) || 0;
      result["SavingAccount"] =
        sum(
          datasets.map((res) => Number(res["SavingAccount"]["percentage"] || 0))
        ) || 0;
      result["CurrentAccount"] =
        sum(
          datasets.map((res) =>
            Number(res["CurrentAccount"]["percentage"] || 0)
          )
        ) || 0;
      result["KustodialAccount"] =
        sum(
          datasets.map((res) =>
            Number(res["KustodialAccount"]["percentage"] || 0)
          )
        ) || 0;
    }
    return result;
  }, [datasets]);

  return (
    <WidgetWrapper
      title={intl.formatMessage({ id: "availableDeposit" })}
      subtitle="infoAvailableDeposit"
    >
      <AssetGridDetails
        backgroundColors={backgroundColors}
        headers={headers}
        data={percentages}
      />
      <AssetTableDetails tableHeaders={headers} datasets={datasets || []} />
      {/* Mobile Version */}
      <AssetTableMobileDetails
        tableHeaders={headers}
        datasets={datasets || []}
      />
    </WidgetWrapper>
  );
};

export default AssetDetails;
