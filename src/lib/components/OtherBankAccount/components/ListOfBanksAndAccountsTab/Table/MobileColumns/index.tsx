import { Column } from 'react-table';

export const MobileColumns = (): readonly Column<object>[] => {
	return [
		{
			Header: 'listOfBanksAndAccounts.label.bankName',
			accessor: 'bankName',
			minWidth: 120,
			width: '50%',
		},
		{
			Header: 'listOfBanksAndAccounts.label.accountNo',
			accessor: 'accountNumber',
			width: '45%',
		},
		{
			Header: '',
			id: 'expander',
			width: 10,
		},
	];
};
