import { TMultiBankCashflowCorporateListApi } from 'lib/components/MultiBankCashFlow/types';
import { useSecuredAPISWRHook } from 'lib/services/api/configs';
import { HTTPMethod } from 'lib/services/api/constants';

const GET_CORPORATE_LIST_PATH = 'dashboardotherbank/corporatelist';

export const useGetCorporateList = () =>
	useSecuredAPISWRHook<TMultiBankCashflowCorporateListApi, null>({
		path: GET_CORPORATE_LIST_PATH,
		method: HTTPMethod.GET,
	});
