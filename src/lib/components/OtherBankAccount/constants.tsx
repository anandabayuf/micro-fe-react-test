import { FormattedMessage } from 'react-intl';

export const OTHER_BANK_ACCOUNT_TABS = [
	'listOfBanksAndAccounts',
	'fileProcessFailureHistory',
];

export const OPTIONS_ACCOUNT_TYPE = [
	{
		label: (
			<FormattedMessage id="listOfBanksAndAccounts.accountType.giro" />
		),
		value: 'C',
	},
	{
		label: (
			<FormattedMessage id="listOfBanksAndAccounts.accountType.deposit" />
		),
		value: 'TD',
	},
];
