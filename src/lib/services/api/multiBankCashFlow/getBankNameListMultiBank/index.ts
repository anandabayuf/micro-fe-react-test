import {
	TMultiBankCashflowBankNameListApi,
	TMultiBankCashflowBankNameListParams,
} from 'lib/components/MultiBankCashFlow/types';
import { useSecuredAPISWRHook } from 'lib/services/api/configs';
import { HTTPMethod } from 'lib/services/api/constants';

const GET_BANK_NAME_LIST_MULTI_BANK_PATH = 'dashboardotherbank/getbank';

export const useGetBankNameListMultiBank = (
	corpId: TMultiBankCashflowBankNameListParams
) =>
	useSecuredAPISWRHook<
		TMultiBankCashflowBankNameListApi,
		TMultiBankCashflowBankNameListParams
	>({
		path: `${GET_BANK_NAME_LIST_MULTI_BANK_PATH}${
			corpId !== 'all' ? `/${corpId}` : ``
		}`,
		method: HTTPMethod.GET,
		refreshInterval: 1000,
	});
