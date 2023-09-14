export const hello = 'hi';

// User Management Constants
export const userManagementTabs = ['group', 'user'];
export const defaultTabIndex = 0;
export const defaultItemPerPage = 10;
export const defaultPageNumber = 1;
export const limitShowingRoleAccess = 3;
export const limitShowingRoleAccessMobile = 3;
export const limitTotalPageIndexList = 4;
export const roleTableHeaders = [
	{
		Header: 'groupId',
		accessor: 'code',
		width: '100%',
	},
	{
		Header: 'group',
		accessor: 'name',
		width: '100%',
	},
	{
		Header: 'menu',
		accessor: 'details',
		id: 'userManagementGroup',
		disableSortBy: true,
		width: '100%',
	},
	{
		Header: '',
		accessor: 'actions',
		disableSortBy: true,
		width: '30%',
	},
];

export const backgroundColor = [
	'#E55300',
	'#006677',
	'#E59700',
	'#004C77',
	'#E53700',
	'#007753',
	'#E3BF00',
	'#62B5C4',
	'#538DAD',
	'#A73C00',
];

export const roleTableHeadersMobile = [
	{
		Header: 'groupId',
		accessor: 'id',
		width: '95%',
	},
	{
		Header: 'group',
		accessor: 'name',
		width: '95%',
	},
	{
		Header: '',
		id: 'expander',
		width: 10,
	},
];

export const userTableHeaders = [
	{
		Header: 'userIdLoginLabel',
		accessor: 'userId',
		width: '100%',
	},
	{
		Header: 'role',
		accessor: 'role',
		width: '100%',
	},
	{
		Header: 'name',
		accessor: 'name',
		width: '100%',
	},
	{
		Header: 'email',
		accessor: 'email',
		width: '100%',
	},
	{
		Header: 'status',
		accessor: 'status',
		width: '100%',
	},
	{
		Header: '',
		accessor: 'actions',
		disableSortBy: true,
		width: 80,
	},
];

export const userTableHeadersMobile = [
	{
		Header: 'userIdLoginLabel',
		accessor: 'userId',
		minWidth: 120,
		width: '50%',
	},
	{
		Header: 'role',
		accessor: 'role',
		width: '45%',
	},
	{
		Header: '',
		id: 'expander',
		width: 10,
	},
];
