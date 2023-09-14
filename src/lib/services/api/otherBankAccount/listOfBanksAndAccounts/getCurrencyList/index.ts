import { useSecuredAPISWRHook } from 'lib/services/api/configs';
import { HTTPMethod } from 'lib/services/api/constants';
import { TCurrencyListApi } from '../../../../../components/OtherBankAccount/types';

const GET_CURRENCY_LIST_PATH = 'otherbankstatement/getCurrencyList';

export const useGetListOfCurrency = (isReady = true) =>
	useSecuredAPISWRHook<TCurrencyListApi, unknown>({
		path: GET_CURRENCY_LIST_PATH,
		isReady,
		refreshInterval: 10000,
		method: HTTPMethod.GET,
	});
