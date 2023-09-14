import ListEvents from 'lib/components/calendar/events/listEvent';
import AssetSummary from 'lib/components/dashboard/asset-summary';
import CashflowTrendWidget from 'lib/components/dashboard/cashflow-trend/cashflow-trend-widget';
import KursWidget from 'lib/components/dashboard/kurs/kurs-widget';
import LiabilitiesSummary from 'lib/components/dashboard/liabilities-summary';
import MultiBankCashFlowWidget from 'lib/components/dashboard/multi-bank-cash-flow';
import AggregateBankWidget from 'lib/components/dashboard/aggregate-bank/aggregate-bank-widget';
import CashflowTrendChart from 'lib/components/dashboard/cashflow-trend';

type WidgetProps = {
	[key: string]: {
		title: string | null;
		subTitle: string | null;
		component: React.ReactNode;
		href: string | null;
		subtitle?: string;
		hasSeeMore?: boolean;
	};
};

export const listWidgetComponent: WidgetProps = {
	WIDGET_UPCOMING_EVENTS: {
		title: 'UpcomingEvents',
		subTitle: null,
		href: '/calendar',
		subtitle: 'agendaSubtitle',
		component: (
			<ListEvents
				componentId="dashboard-calendar-event-widget"
				isWidget
			/>
		),
	},
	WIDGET_SIMPANAN: {
		title: 'Deposit',
		subTitle: null,
		href: '/deposit',
		subtitle: 'depositSubtitle',
		component: (
			<AssetSummary
				id="dashboard-deposit-widget"
				cifNo={null}
				isHomepage
			/>
		),
	},
	WIDGET_PINJAMAN: {
		title: 'Loan',
		subTitle: null,
		href: '/loan',
		subtitle: 'loanSubtitle',
		component: (
			<LiabilitiesSummary
				id="dashboard-loan-widget"
				cifNo={null}
				isHomepage
			/>
		),
	},
	WIDGET_TREN_ARUS_KAS: {
		title: 'TrendCashFlow',
		subTitle: null,
		subtitle: 'TrendCashFlowSubtitle',
		href: '/cashflow',
		component: <CashflowTrendWidget id="dashboard-cashflow-trend-widget" />,
	},
	WIDGET_EXCHANGE_RATE: {
		title: 'exchangeRate',
		subTitle: '',
		subtitle: 'kursSubtitle',
		href: '/kurs',
		hasSeeMore: false,
		component: <KursWidget isHomepage />,
	},
	WIDGET_AGGREGATE_BALANCE: {
		title: 'aggregateBank.widget.title',
		subTitle: null,
		subtitle: 'aggregateBank.widget.subtitle',
		href: '/aggregate-bank',
		component: <AggregateBankWidget />,
	},
	WIDGET_MULTI_CASHFLOW: {
		title: 'multiBankCashFlow.page.title',
		subTitle: '',
		subtitle: 'multiBankCashFlow.card.subtitle.cashFlowTrend',
		href: '/multi-bank-cash-flow',
		component: <MultiBankCashFlowWidget />,
	},
};
