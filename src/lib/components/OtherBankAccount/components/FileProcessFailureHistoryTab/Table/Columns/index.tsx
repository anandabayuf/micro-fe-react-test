import { Column } from 'react-table';

const Columns = (): readonly Column<object>[] => [
	{
		Header: 'fileProcessFailureHistory.label.processDate',
		accessor: 'processDate',
		width: '80%',
	},
	{
		Header: 'fileProcessFailureHistory.label.fileName',
		accessor: 'fileName',
		width: '70%',
	},
	{
		Header: 'fileProcessFailureHistory.label.bank',
		accessor: 'bank',
		width: '50%',
	},
	{
		Header: 'fileProcessFailureHistory.label.status',
		accessor: 'status',
		width: '25%',
	},
	{
		Header: 'fileProcessFailureHistory.label.additionalInformation',
		accessor: 'additionalInformation',
		width: '100%',
	},
];

export default Columns;
