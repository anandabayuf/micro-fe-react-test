import { useBreakpoint, useDisclosure } from '@chakra-ui/react';
import { SummaryLiabilitiesCIF } from 'lib/services/api/liabilities/summaryliabilitiescif/types';
import React, { useEffect } from 'react';
import { useFilters, useSortBy, useTable } from 'react-table';
import LoanSummaryModal from '../LoanSummaryModal';
import ContentTable from './ContentTable';
import ContentTableMobile from './ContentTableMobile';

type ContentTableProps = {
	columns: any[];
	datasets: any[];
	data: SummaryLiabilitiesCIF | undefined;
	isHomepage?: boolean;
	id?: string;
};

const LoanSummaryTable: React.FC<ContentTableProps> = ({
	columns = [],
	datasets = [],
	data,
	isHomepage,
	id,
}) => {
	const { isOpen, onClose, onOpen } = useDisclosure();
	const breakpointValue = useBreakpoint();
	const dataColumns = React.useMemo(() => columns, [columns]);
	const dataSets = React.useMemo(() => datasets, [datasets]);
	const [selectedData, setSelectedData] = React.useState<any>({});

	const { headerGroups, rows, setSortBy } = useTable(
		{
			columns: dataColumns,
			data: dataSets,
		},
		useSortBy
	);

	useEffect(() => {
		setSortBy([{ id: 'percentage', desc: true }]);
	}, [dataSets]);

	return (
		<>
			<LoanSummaryModal
				id={id}
				data={data}
				isOpen={isOpen}
				onClose={onClose}
				selectedData={selectedData}
				datasets={dataSets}
			/>

			<ContentTableMobile
				id={`${id}-table`}
				onOpen={onOpen}
				headerGroups={headerGroups}
				setSelectedData={setSelectedData}
				rows={rows}
				isHomepage={isHomepage}
			/>
		</>
	);
};

export default LoanSummaryTable;
