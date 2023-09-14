import { useMemo } from "react";
import ResponsiveTable from "lib/components/shared/widgets/ResponsiveTable";
import { useSummaryLiabilitiesCIF } from "lib/services/api/liabilities/summaryliabilitiescif";
import { formatNumber } from "lib/utils/currency";

type LiabilitiesDetailsProps = {
  cifNo: string;
};

const LiabilitiesDetails = ({ cifNo }: LiabilitiesDetailsProps) => {
  const { data } = useSummaryLiabilitiesCIF({ cifNo });

  const tableHeaders = ["OutstandingAmount", "AvailableBalance"];
  const datasets = useMemo(() => {
    return data?.content?.details.summary.map((item) => ({
      currency: item.currency,
      OutstandingAmount: formatNumber(item.details.outstandingAmount),
      AvailableBalance: formatNumber(item.details.availableBalance),
    }));
  }, [data?.content]);

  return (
    <ResponsiveTable tableHeaders={tableHeaders} datasets={datasets || []} />
  );
};

export default LiabilitiesDetails;
