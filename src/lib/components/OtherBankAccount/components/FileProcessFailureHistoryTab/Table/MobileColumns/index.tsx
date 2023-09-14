import { Column } from 'react-table';

export const MobileColumns = (): readonly Column<object>[] => {
	return [
		{
			Header: 'fileProcessFailureHistory.label.processDate',
			accessor: 'processDate',
			minWidth: 120,
			width: '50%',
		},
		{
			Header: 'fileProcessFailureHistory.label.fileName',
			accessor: 'fileName',
			width: '45%',
		},
		{
			Header: '',
			id: 'expander',
			width: 10,
		},
	];
};
