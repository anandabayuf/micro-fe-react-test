import React from 'react';
import WidgetWrapper from 'lib/components/shared/widgets/WidgetWrapper';
import { useIntl } from 'react-intl';
import CashFlowTrendFilter from './Filter';
import { useLocale } from 'lib/store/locale';
import { useAuth } from '../../../../store/auth';
import { useMultiBankCashFlow } from 'lib/store/multiBankCashFlow';
import { TMultiBankCashflowPayload } from '../../types';
import { DEFAULT_PERIOD } from '../../constants';
import { ChartData } from 'chart.js';
import { useGetDashboardOtherBankTransaction } from 'lib/services/api/multiBankCashFlow/getDashboardOtherBankTransaction';
import { colors } from 'lib/styles/customTheme/colors';
import MultiBankCashFlowChart from '../Chart';
import ShowFilter from './Filter/ShowFilter';
import Loading from '../Loading';

const CashFlowTrend: React.FC = () => {
	const { formatMessage } = useIntl();

	const { locale } = useLocale();
	const { companyId } = useAuth();

	const {
		needGetChildCif,
		corporateId: selectedCorpId,
		bankCode,
	} = useMultiBankCashFlow();
	const corpId = selectedCorpId || companyId;

	const [showBy, setShowBy] = React.useState<string>('IN_OUT');
	const [params, setParams] = React.useState<TMultiBankCashflowPayload>({
		corporate: (corpId === 'all' ? companyId : corpId) || '',
		period: DEFAULT_PERIOD,
		needGetChildCif,
		bankCode: bankCode === 'all' ? undefined : bankCode,
	});

	React.useEffect(() => {
		if (
			params.corporate === corpId &&
			params.needGetChildCif === needGetChildCif &&
			params.bankCode === bankCode
		)
			return;

		setParams({
			...params,
			corporate: (corpId === 'all' ? companyId : corpId) || '',
			needGetChildCif,
			bankCode: bankCode === 'all' ? undefined : bankCode,
		});
	}, [corpId, bankCode, needGetChildCif]);

	const { data: chartData, isLoading } =
		useGetDashboardOtherBankTransaction(params);

	const data: ChartData<'line', number[], string> = React.useMemo(() => {
		const labels = chartData?.content?.map((item) => item?.barName);

		const debitDataset = {
			label: 'multiBankCashFlow.label.cashIn',
			data: chartData?.content?.map((item) => item?.data?.Debit) || [],
			backgroundColor: colors.teal?.[500],
			borderColor: colors.teal?.[500],
			pointStyle: 'circle',
			pointRadius: 5,
		};

		const creditDataset = {
			label: 'multiBankCashFlow.label.cashOut',
			data: chartData?.content?.map((item) => item?.data?.Credit) || [],
			backgroundColor: colors.orange?.[500],
			borderColor: colors.orange?.[500],
			pointStyle: 'circle',
			pointRadius: 5,
		};

		const datasets =
			showBy === 'IN'
				? [debitDataset]
				: showBy === 'OUT'
				? [creditDataset]
				: [debitDataset, creditDataset];

		return {
			labels,
			datasets,
		};
	}, [showBy, locale, chartData]);

	return (
		<WidgetWrapper
			title={formatMessage({
				id: 'multiBankCashFlow.card.title.cashFlowTrend',
			})}
			subtitle={'multiBankCashFlow.card.subtitle.cashFlowTrend'}
		>
			<CashFlowTrendFilter
				withPeriod
				params={params}
				setParams={setParams}
				optionalFilter={
					<ShowFilter
						value={showBy}
						setValue={setShowBy}
					/>
				}
			/>

			{isLoading ? <Loading /> : <MultiBankCashFlowChart data={data} />}
		</WidgetWrapper>
	);
};

export default CashFlowTrend;
