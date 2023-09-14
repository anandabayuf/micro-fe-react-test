import { Flex, Text, Box, IconButton, Button, Icon } from '@chakra-ui/react';
import { useEffect, useMemo } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FormattedMessage } from 'react-intl';
import type { HeaderGroup, Row, Cell } from 'react-table';
import { usePagination, useSortBy, useTable, useExpanded } from 'react-table';

import { limitTotalPageIndexList } from 'lib/constants';

import CellItem from './cellItem';
import HeaderItem from './headerItem';
import type { CustomTablePropsType } from './types';

const CustomTable = ({
	onSort,
	columns,
	tableData,
	defaultItemPerPage,
	defaultPageNumber,
	totalPage = 0,
	isUseMenu = false,
	handleSessionItem,
	handleStatusItem,
	handleEditItem,
	handleDeleteItem,
	handleDetailItem,
	renderRowSubComponent,
	id,
}: CustomTablePropsType) => {
	const tableColumns = useMemo(() => columns, [columns]);
	const data = useMemo(() => tableData, [tableData]);

	const {
		headerGroups,
		page,
		prepareRow,
		canPreviousPage,
		canNextPage,
		pageCount,
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

	const onItemPerPagePress = (number: number) => setPageSize(number);

	const onPreviousPagePress = () => previousPage();

	const onPageIndexPress = (index: number) => gotoPage(index);

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
											{...cell.getCellProps()}
											isUseMenu={isUseMenu}
											handleStatusItem={handleStatusItem}
											handleSessionItem={
												handleSessionItem
											}
											handleDetailItem={handleDetailItem}
											handleDeleteItem={handleDeleteItem}
											handleEditItem={handleEditItem}
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
			<Box
				display="flex"
				justifyContent={{ base: 'center', md: 'space-between' }}
				alignItems="center"
				my={8}
			>
				<Box
					display="flex"
					alignItems="center"
					fontWeight={400}
				>
					{totalPage > pageSize && (
						<Flex
							alignItems="center"
							display={{ base: 'none', md: 'flex' }}
						>
							<Text
								color="gray.600"
								mr={2}
								fontSize={14}
							>
								<FormattedMessage id="numberOfRows" />
							</Text>
							{[10, 20, 40].map((item: number) => {
								if (item < totalPage) {
									return (
										<Button
											id={`${id}-table-pagination-page-size-${item}`}
											p={0}
											key={`page-${item}`}
											onClick={() =>
												onItemPerPagePress(item)
											}
											variant="unstyled"
											_focus={{ boxShadow: 'none' }}
											display="flex"
											alignItems="center"
										>
											<Flex
												backgroundColor={
													item === pageSize
														? 'orange.500'
														: 'transparent'
												}
												color={
													item === pageSize
														? 'white'
														: 'gray.900'
												}
												w={8}
												h={8}
												justifyContent="center"
												alignItems="center"
												fontWeight={400}
											>
												<Text fontSize={14}>
													{item}
												</Text>
											</Flex>
										</Button>
									);
								}
								return null;
							})}
						</Flex>
					)}
				</Box>
				<Flex
					direction="column"
					alignItems="center"
				>
					<Flex alignItems="center">
						<IconButton
							id={`${id}-table-pagination-previous-page-btn`}
							p={0}
							variant="unstyled"
							_focus={{ boxShadow: 'none' }}
							display="flex"
							alignItems="center"
							onClick={onPreviousPagePress}
							isDisabled={!canPreviousPage}
							aria-label="Back Icon button"
						>
							<Icon
								as={FiChevronLeft}
								color="gray.900"
								fontSize={20}
							/>
						</IconButton>
						{Array.from(Array(pageCount).keys()).map(
							(pageItem: number) => {
								if (
									pageItem + 2 === limitTotalPageIndexList &&
									pageCount > limitTotalPageIndexList + 1
								) {
									return (
										<Flex
											key={`pageOptions-${pageItem}`}
											backgroundColor="transparent"
											color="gray.900"
											w={8}
											h={8}
											justifyContent="center"
											alignItems="center"
											fontWeight={400}
										>
											<Text fontSize={14}>...</Text>
										</Flex>
									);
								}
								if (
									pageItem + 2 > limitTotalPageIndexList &&
									pageItem + 2 < pageCount
								)
									return null;
								return (
									<Button
										id={`${id}-table-pagination-page-${
											pageItem + 1
										}-btn`}
										p={0}
										key={`pageOptions-${pageItem}`}
										variant="unstyled"
										_focus={{ boxShadow: 'none' }}
										display="flex"
										alignItems="center"
										onClick={() =>
											onPageIndexPress(pageItem)
										}
									>
										<Flex
											backgroundColor={
												pageIndex === pageItem
													? 'orange.500'
													: 'transparent'
											}
											color={
												pageIndex === pageItem
													? 'white'
													: 'gray.900'
											}
											w={8}
											h={8}
											justifyContent="center"
											alignItems="center"
											fontWeight={400}
										>
											<Text fontSize={14}>
												{pageItem + 1}
											</Text>
										</Flex>
									</Button>
								);
							}
						)}
						<IconButton
							id={`${id}-table-pagination-next-page-btn`}
							p={0}
							variant="unstyled"
							_focus={{ boxShadow: 'none' }}
							display="flex"
							alignItems="center"
							onClick={() => onNextPagePress()}
							isDisabled={!canNextPage}
							aria-label="Next Icon button"
						>
							<Icon
								as={FiChevronRight}
								color="gray.900"
								fontSize={20}
							/>
						</IconButton>
					</Flex>
					<Text
						color="gray.600"
						fontSize={14}
						mt={4}
						display={{ base: 'block', md: 'none' }}
					>
						{`Menampilkan halaman ${
							pageIndex + 1
						} dari ${pageCount}`}
					</Text>
				</Flex>
			</Box>
		</Box>
	);
};

export default CustomTable;
