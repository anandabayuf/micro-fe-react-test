export const parseAccountType = (accountType: string) => {
	switch (accountType) {
		case 'S':
			return 'listOfBanksAndAccounts.accountType.savings';
		case 'C':
			return 'listOfBanksAndAccounts.accountType.giro';
		case 'TD':
			return 'listOfBanksAndAccounts.accountType.deposit';
		default:
			return accountType;
	}
};
