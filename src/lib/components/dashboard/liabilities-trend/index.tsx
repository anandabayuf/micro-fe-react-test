import { useMemo, useState } from 'react';
import { useIntl } from 'react-intl';

import DashboardPeriod from 'lib/components/dashboard/dashboard-period';
import WidgetWrapper from 'lib/components/shared/widgets/WidgetWrapper';
import { useLiabilitiesTrend } from 'lib/services/api/liabilities/getliabilitiestrend';
import type { LiabilitiesTrendContent } from 'lib/services/api/liabilities/getliabilitiestrend/types';
import LiabilitiesTrendChart from './liabilities-trend-chart';

type LiabilitiesTrendProps = {
	cifNo: string;
	id?: string;
};

const LiabilitiesTrend = ({ cifNo, id }: LiabilitiesTrendProps) => {
	const intl = useIntl();
	const [period, setPeriod] = useState('');
	const { data } = useLiabilitiesTrend({ cifNo, period });
	const liabilitiesTrend = useMemo(() => {
		const content = data?.content;
		const labels = content?.map(
			(bar: LiabilitiesTrendContent) => bar.barName
		);
		const availableDataSets = content?.map(
			(bar: LiabilitiesTrendContent) => bar.available
		);
		const outstandingDataSets = content?.map(
			(bar: LiabilitiesTrendContent) => bar.outstanding
		);

		return {
			labels,
			availableDataSets,
			outstandingDataSets,
		};
	}, [data?.content]);

	return (
		<WidgetWrapper
			title={intl.formatMessage({ id: 'loanTrend' })}
			additionalTitle={intl.formatMessage({
				id: 'TrendCashFlowSubtitle',
			})}
			subtitle="TrendLiabilitiesNewSubtitle"
			controlComponent={
				<DashboardPeriod
					id={`${id}-liabilities-trend`}
					onSelectPeriod={setPeriod}
				/>
			}
		>
			<LiabilitiesTrendChart
				id={`${id}-liablities-trend-chart`}
				labels={liabilitiesTrend.labels}
				dataSetsLabel={['AvailableBalance', 'OutstandingAmount']}
				availableDataSets={liabilitiesTrend.availableDataSets}
				outstandingDataSets={liabilitiesTrend.outstandingDataSets}
			/>
		</WidgetWrapper>
	);
};

export default LiabilitiesTrend;
