import { useBreakpoint, useDisclosure } from '@chakra-ui/react';
import { useAssetSummaryStore } from 'lib/store/useAssetSummary';
import React, { useEffect } from 'react';
import { useSortBy, useTable } from 'react-table';
import shallow from 'zustand/shallow';
import AssetSummaryModal from '../AssetSummaryModal';
import ContentTableMobile from './ContentTableMobile';

type ContentTableProps = {
	columns: any[];
	isHomepage?: boolean;
	id?: string;
};

const AssetSummaryTable: React.FC<ContentTableProps> = ({
	columns = [],
	isHomepage,
	id,
}) => {
	const { details } = useAssetSummaryStore(
		(state) => ({ details: state.details }),
		shallow
	);
	const { isOpen, onClose, onOpen } = useDisclosure();
	const breakpointValue = useBreakpoint();
	const dataColumns = React.useMemo(() => columns, [columns]);
	const dataSets = React.useMemo(() => {
		return details.summary.map((data) => {
			return {
				currency: data.currency,
				balance: data.balance,
				localBalance: data.localBalance,
				percentage: data.percentage,
				color: data.color,
			};
		});
	}, [details.summary]);

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
			<AssetSummaryModal
				id={id}
				isOpen={isOpen}
				onClose={onClose}
				selectedData={selectedData}
				datasets={dataSets}
			/>

			<ContentTableMobile
				id={`${id}-table`}
				onOpen={onOpen}
				headerGroups={headerGroups}
				rows={rows}
				setSelectedData={setSelectedData}
				isHomepage={isHomepage}
			/>
		</>
	);
};

export default AssetSummaryTable;
