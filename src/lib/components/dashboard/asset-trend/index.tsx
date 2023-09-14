import { useMemo, useState } from 'react';
import { useIntl } from 'react-intl';

import DashboardPeriod from 'lib/components/dashboard/dashboard-period';
import WidgetWrapper from 'lib/components/shared/widgets/WidgetWrapper';
import { useAssetTrend } from 'lib/services/api/asset/getassettrend';
import type { AssetTrendContent } from 'lib/services/api/asset/getassettrend/types';
import AssetTrendChart from './asset-trend-chart';

type AssetTrendProps = {
	cifNo: string;
	id?: string;
};

const AssetTrend = ({ cifNo, id }: AssetTrendProps) => {
	const intl = useIntl();
	const [period, setPeriod] = useState('');
	const { data } = useAssetTrend({ cifNo, period });
	const assetTrend = useMemo(() => {
		const content = data?.content;
		const labels = content?.map((bar: AssetTrendContent) => bar.barName);
		const datasets = content?.map((bar: AssetTrendContent) => bar.balance);

		return {
			labels,
			datasets,
		};
	}, [data?.content]);

	return (
		<WidgetWrapper
			title={intl.formatMessage({ id: 'depositTren' })}
			additionalTitle={intl.formatMessage({
				id: 'TrendCashFlowSubtitle',
			})}
			subtitle="TrendCashFlowNewSubtitle"
			controlComponent={
				<DashboardPeriod
					id={`${id}-asset-trend`}
					onSelectPeriod={setPeriod}
				/>
			}
		>
			<AssetTrendChart
				id={`${id}-asset-trend-chart`}
				labels={assetTrend.labels}
				dataSets={assetTrend.datasets}
				dataSetsLabel="depositAmount"
			/>
		</WidgetWrapper>
	);
};

export default AssetTrend;
