import {
	TMultiBankCashflowApi,
	TMultiBankCashflowPayload,
} from 'lib/components/MultiBankCashFlow/types';
import { useSecuredAPISWRHook } from 'lib/services/api/configs';
import { HTTPMethod } from 'lib/services/api/constants';

const GET_DASHBOARD_OTHERBANK_TRANSACTION_PATH =
	'dashboarotherbanktransaction/getdebitcredit';

export const useGetDashboardOtherBankTransaction = (
	payload: TMultiBankCashflowPayload
) =>
	useSecuredAPISWRHook<TMultiBankCashflowApi, TMultiBankCashflowPayload>({
		path: GET_DASHBOARD_OTHERBANK_TRANSACTION_PATH,
		method: HTTPMethod.POST,
		body: payload,
		refreshInterval: 1000,
	});
