import { securedAPI } from 'lib/services/api/configs';
import { TPayloadEditOtherBank } from '../../../../../components/OtherBankAccount/types';

const EDIT_BANK_AND_ACCOUNT_PATH = 'otherbankstatement/edit';

const editBankAndAccount = (body: TPayloadEditOtherBank) => {
	return securedAPI(EDIT_BANK_AND_ACCOUNT_PATH, 'POST', '', body);
};

export default editBankAndAccount;
