import { securedAPI } from 'lib/services/api/configs';
import { TPayloadAddOtherBank } from '../../../../../components/OtherBankAccount/types';

const ADD_BANK_AND_ACCOUNT_PATH = 'otherbankstatement/add';

const addBankAndAccount = (body: TPayloadAddOtherBank) => {
	return securedAPI(ADD_BANK_AND_ACCOUNT_PATH, 'POST', '', body);
};

export default addBankAndAccount;
