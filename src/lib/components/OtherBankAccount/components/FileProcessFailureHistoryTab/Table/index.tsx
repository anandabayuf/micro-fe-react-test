import { useMediaQuery } from '@chakra-ui/react';
import { dummyDataFileProcessFailureHistory } from 'lib/components/OtherBankAccount/dummyData';
import React from 'react';
import CustomTable from '../CustomTable';
import Columns from './Columns';
import { MobileColumns } from './MobileColumns';
import { RenderMobileTable } from './RenderMobileTable';

const FileProcessFailureHistoryTable: React.FC = () => {
	const [IS_MOBILE] = useMediaQuery('(max-width: 1077px)');

	const columns = () => {
		if (IS_MOBILE) return MobileColumns();

		return Columns();
	};

	return (
		<CustomTable
			columns={columns()}
			tableData={dummyDataFileProcessFailureHistory || []}
			defaultItemPerPage={10}
			defaultPageNumber={0}
			totalPage={dummyDataFileProcessFailureHistory?.length}
			renderRowSubComponent={(row) => <RenderMobileTable row={row} />}
		/>
	);
};

export default FileProcessFailureHistoryTable;
