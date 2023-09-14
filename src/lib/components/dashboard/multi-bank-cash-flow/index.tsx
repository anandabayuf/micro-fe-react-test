import { ChartData } from 'chart.js';
import { useGetDashboardOtherBankTransaction } from 'lib/services/api/multiBankCashFlow/getDashboardOtherBankTransaction';
import { useLocale } from 'lib/store/locale';
import { colors } from 'lib/styles/customTheme/colors';
import React from 'react';
import MultiBankCashFlowChart from 'lib/components/MultiBankCashFlow/components/Chart';
import Loading from 'lib/components/MultiBankCashFlow/components/Loading';
import { useAuth } from 'lib/store/auth';

const MultiBankCashFlowWidget: React.FC = () => {
	const { locale } = useLocale();
	const { companyId } = useAuth();

	const { data, isLoading } = useGetDashboardOtherBankTransaction({
		corporate: companyId || '',
		period: 'ONE_WEEK',
		needGetChildCif: true,
	});

	const dataChart: ChartData<'line', number[], string> = React.useMemo(() => {
		return {
			labels: data?.content?.map((item) => item?.barName),
			datasets: [
				{
					label: 'multiBankCashFlow.label.cashIn',
					data: data?.content?.map((item) => item?.data?.Debit) || [],
					backgroundColor: colors.teal?.[500],
					borderColor: colors.teal?.[500],
					pointStyle: 'circle',
					pointRadius: 5,
				},
				{
					label: 'multiBankCashFlow.label.cashOut',
					data:
						data?.content?.map((item) => item?.data?.Credit) || [],
					backgroundColor: colors.orange?.[500],
					borderColor: colors.orange?.[500],
					pointStyle: 'circle',
					pointRadius: 5,
				},
			],
		};
	}, [locale, data]);

	return isLoading ? (
		<Loading />
	) : (
		<MultiBankCashFlowChart data={dataChart} />
	);
};

export default MultiBankCashFlowWidget;
