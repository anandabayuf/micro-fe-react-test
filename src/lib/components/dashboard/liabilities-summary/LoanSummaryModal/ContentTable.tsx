import {
	Flex,
	Table,
	TableContainer,
	Tbody,
	Text,
	Th,
	Thead,
	Tr,
	useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Row, useTable, useFilters } from 'react-table';
import TableRow from './TableRow';
import SearchBox from '../../../shared/SearchBar/index';

interface ContentTableProps {
	columns: any;
	dataSets: any;
	currency: string;
	id?: string;
}

const ContentTable: React.FC<ContentTableProps> = ({
	dataSets = [],
	columns = [],
	currency,
	id,
}) => {
	const tableColumns = React.useMemo(() => columns, [columns]);
	const data = React.useMemo(() => dataSets, [dataSets]);
	const [isMobile] = useMediaQuery('(max-width: 768px)');

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		setFilter,
	} = useTable({ columns: tableColumns, data: data }, useFilters);
	const [searchValue, setSearchValue] = React.useState<string>('');
	const { formatMessage } = useIntl();

	const onSearchAccount = (values: string) => {
		setSearchValue(values);
		setFilter('accountNo', () => {
			return values;
		});
	};

	return (
		<>
			<Flex
				justifyContent={'space-between'}
				flexDirection={'row'}
				flexWrap="wrap"
				marginY="6"
				alignItems="center"
			>
				<div>
					{currency !== 'IDR' ? (
						<Text color="grey">
							<FormattedMessage id="tableLegend" />
						</Text>
					) : null}
				</div>

				<Flex
					w={isMobile ? '100%' : 'initial'}
					alignItems="center"
					flexWrap={isMobile ? 'wrap' : 'nowrap'}
				>
					<SearchBox
						id={`${id}-search-account-number`}
						placeHolder="Cari Rekening..."
						value={searchValue}
						onChange={onSearchAccount}
					/>
				</Flex>
			</Flex>

			<TableContainer
				maxHeight="300"
				overflowY="scroll"
			>
				<Table {...getTableProps()}>
					<Thead>
						{headerGroups.map((headerGroup) => {
							return (
								<Tr {...headerGroup.getHeaderGroupProps()}>
									{headerGroup.headers.map((col) => {
										if (
											isMobile &&
											(col.Header ===
												formatMessage({
													id: 'limitLoan',
												}) ||
												col.Header ===
													formatMessage({
														id: 'currency',
													}))
										)
											return null;
										return (
											<Th
												{...col.getHeaderProps()}
												borderBottom={'1px'}
												borderBottomColor="orange.100"
											>
												{col.render('Header')}
											</Th>
										);
									})}
									{isMobile && (
										<Th
											borderBottom={'1px'}
											borderBottomColor="orange.100"
										/>
									)}
								</Tr>
							);
						})}
					</Thead>
					<Tbody {...getTableBodyProps()}>
						{rows.map((row: Row<object>) => {
							prepareRow(row);
							return <TableRow row={row} />;
						})}
					</Tbody>
				</Table>
			</TableContainer>
		</>
	);
};

export default ContentTable;
