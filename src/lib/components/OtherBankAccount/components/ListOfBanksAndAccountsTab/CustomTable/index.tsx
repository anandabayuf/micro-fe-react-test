import { Flex, Box } from '@chakra-ui/react';
import { useEffect, useMemo } from 'react';
import type { HeaderGroup, Row, Cell } from 'react-table';
import { usePagination, useSortBy, useTable, useExpanded } from 'react-table';

import CellItem from './cellItem';
import HeaderItem from './headerItem';
import { CustomTablePropsType } from 'lib/components/OtherBankAccount/types';
import Pagination from 'lib/components/pagination/pagination';

const CustomTable: React.FC<CustomTablePropsType> = ({
	onSort,
	columns,
	tableData,
	defaultItemPerPage,
	defaultPageNumber,
	totalPage = 0,
	renderRowSubComponent,
	id,
	handleEdit,
	handleActivateDeactivate,
	handleDelete,
}) => {
	const tableColumns = useMemo(() => columns, [columns]);
	const data = useMemo(() => tableData, [tableData]);

	const {
		headerGroups,
		page,
		prepareRow,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		state: { pageIndex, pageSize, sortBy },
	} = useTable(
		{
			columns: tableColumns,
			data,
			initialState: {
				pageIndex: defaultPageNumber,
				pageSize: defaultItemPerPage,
				hiddenColumns: ['id'],
			},
			manualPagination: true,
			manualSortBy: true,
			pageCount: Math.ceil(totalPage / defaultItemPerPage),
		},
		useSortBy,
		useExpanded,
		usePagination
	);

	useEffect(() => {
		if (onSort) {
			onSort({ sortBy, pageIndex, pageSize });
		}
	}, [onSort, sortBy, pageIndex, pageSize]);

	const onPreviousPagePress = () => previousPage();

	const onNextPagePress = () => nextPage();

	return (
		<Box
			width="100%"
			overflowX="auto"
		>
			<Box
				my={6}
				w="100%"
			>
				{headerGroups.map((headerGroup: HeaderGroup<object>) => (
					<Flex
						borderTopWidth={1}
						borderColor="gray.100"
						{...headerGroup.getHeaderGroupProps()}
					>
						{headerGroup.headers.map(
							(header: HeaderGroup<object>, index) => (
								<HeaderItem
									id={`${id}-table-header-item-${
										header.Header === ''
											? 'action'
											: header.Header
									}`}
									header={header}
									{...header.getHeaderProps()}
								/>
							)
						)}
					</Flex>
				))}
				<Flex flexDirection="column">
					{page.map((row: Row<object>) => {
						prepareRow(row);
						return (
							<Flex
								direction="column"
								flex={1}
								{...row.getRowProps()}
							>
								<Flex
									borderTopWidth={1}
									borderColor="gray.100"
									py={1}
									gap={1}
								>
									{row.cells.map((cell: Cell<object>) => (
										<CellItem
											id={`${id}-table-row-${row.index}`}
											cell={cell}
											isFirstColumn={
												cell.column.id ===
												columns[0].accessor
											}
											handleEdit={handleEdit}
											handleActivateDeactivate={
												handleActivateDeactivate
											}
											handleDelete={handleDelete}
											{...cell.getCellProps()}
										/>
									))}
								</Flex>
								{row.isExpanded
									? renderRowSubComponent(row)
									: null}
							</Flex>
						);
					})}
				</Flex>
			</Box>
			<Pagination
				countData={totalPage}
				currentPageSize={pageSize}
				currentPageIndex={pageIndex}
				listPageSize={totalPage && totalPage > 10 ? [10, 20, 30] : [10]}
				selectPageIndex={gotoPage}
				selectedListperPage={setPageSize}
				onNextPage={onNextPagePress}
				onPrevPage={onPreviousPagePress}
			/>
		</Box>
	);
};

export default CustomTable;
