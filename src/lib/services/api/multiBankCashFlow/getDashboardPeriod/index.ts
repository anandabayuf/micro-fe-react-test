import { TMultiBankCashflowPeriodApi } from 'lib/components/MultiBankCashFlow/types';
import { useSecuredAPISWRHook } from 'lib/services/api/configs';
import { HTTPMethod } from 'lib/services/api/constants';

const GET_DASHBOARD_PERIOD_PATH = 'dashboardotherbank/getdashboardperiod';

export const useGetDashboardPeriod = () =>
	useSecuredAPISWRHook<TMultiBankCashflowPeriodApi, null>({
		path: GET_DASHBOARD_PERIOD_PATH,
		method: HTTPMethod.GET,
	});
