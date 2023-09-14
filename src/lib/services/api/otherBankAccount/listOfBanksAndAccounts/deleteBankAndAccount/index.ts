import { securedAPI } from 'lib/services/api/configs';
import { TPayloadDeleteOtherBank } from '../../../../../components/OtherBankAccount/types';

const DELETE_BANK_AND_ACCOUNT_PATH = 'otherbankstatement/delete';

const deleteBankAndAccount = (body: TPayloadDeleteOtherBank) => {
	return securedAPI(DELETE_BANK_AND_ACCOUNT_PATH, 'POST', '', body);
};

export default deleteBankAndAccount;
