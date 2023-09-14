import { Column } from 'react-table';

const Columns = (): Column<object>[] => [
	{
		Header: 'listOfBanksAndAccounts.label.id',
		accessor: 'id',
		width: '30%',
	},
	{
		Header: 'listOfBanksAndAccounts.label.bankName',
		accessor: 'bankName',
		width: '30%',
	},
	{
		Header: 'listOfBanksAndAccounts.label.accountNo',
		accessor: 'accountNumber',
		width: '50%',
	},
	{
		Header: 'listOfBanksAndAccounts.label.accountType',
		accessor: 'accountType',
		width: '50%',
	},
	{
		Header: 'listOfBanksAndAccounts.label.currency',
		accessor: 'currency',
		width: '30%',
	},
	{
		Header: 'listOfBanksAndAccounts.label.status',
		accessor: 'status',
		width: '20%',
	},
	{
		Header: '',
		accessor: 'actions',
		disableSortBy: true,
		width: 80,
	},
];

export default Columns;
