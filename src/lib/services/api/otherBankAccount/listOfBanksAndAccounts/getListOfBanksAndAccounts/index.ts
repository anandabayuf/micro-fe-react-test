import { useSecuredAPISWRHook } from 'lib/services/api/configs';
import { HTTPMethod } from 'lib/services/api/constants';
import {
	TBanksAndAccountsApi,
	TBanksAndAccountsParams,
} from '../../../../../components/OtherBankAccount/types';

const GET_LIST_OF_BANKS_AND_ACCOUNTS_PATH = 'otherbankstatementview';

export const useGetListOfBanksAndAccounts = (
	params: TBanksAndAccountsParams,
	isReady = true
) =>
	useSecuredAPISWRHook<TBanksAndAccountsApi, unknown>({
		path: GET_LIST_OF_BANKS_AND_ACCOUNTS_PATH,
		isReady,
		params,
		refreshInterval: 10000,
		method: HTTPMethod.GET,
	});
