import * as yup from 'yup';
import { FormBankAndAccountType } from './types';

export const parseAccountType = (accountType: string) => {
	try {
		switch (accountType) {
			case 'S':
				return 'listOfBanksAndAccounts.accountType.savings';
			case 'C':
				return 'listOfBanksAndAccounts.accountType.giro';
			case 'TD':
				return 'listOfBanksAndAccounts.accountType.deposit';
			default:
				return '-';
		}
	} catch (error) {
		return accountType;
	}
};

export const bankAndAccountFormValidationSchema: yup.SchemaOf<FormBankAndAccountType> =
	yup.object({
		accountNumber: yup.string().required(),
		accountType: yup.string().required(),
		bankName: yup.string().required(),
		currency: yup.string().required(),
	});

let timer: ReturnType<typeof setTimeout>;

export const debounce = (fn: () => void, delay: number): void => {
	try {
		return ((): void => {
			clearTimeout(timer);
			timer = setTimeout(() => fn(), delay);
		})();
	} catch (error) {
		console.log(error);
		throw new Error('Something went wrong during debounce');
	}
};
