import { useSecuredAPISWRHook } from 'lib/services/api/configs';
import { HTTPMethod } from 'lib/services/api/constants';
import { TBankNameListApi } from '../../../../../components/OtherBankAccount/types';

const GET_BANK_NAME_LIST_PATH = 'otherbankstatement/getBankNameList';

export const useGetListOfBankName = (isReady = true) =>
	useSecuredAPISWRHook<TBankNameListApi, unknown>({
		path: GET_BANK_NAME_LIST_PATH,
		isReady,
		refreshInterval: 10000,
		method: HTTPMethod.GET,
	});
