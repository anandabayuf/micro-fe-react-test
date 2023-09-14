import {
	Flex,
	Select,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useMediaQuery,
} from '@chakra-ui/react';
import { parseAccountType } from 'lib/utils/parser';
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
	const { formatMessage } = useIntl();
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

	const onSearchAccount = (values: string) => {
		setSearchValue(values);
		setFilter('accountNo', () => {
			return values;
		});
	};

	const onSelectAccountType = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setFilter('accountType', () => {
			const targetValue = event.target.value;

			if (targetValue === '0') return '';

			return parseAccountType(targetValue);
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
							<FormattedMessage id="currencyIndication" />
						</Text>
					) : null}
				</div>

				<Flex
					alignItems="center"
					w={isMobile ? '100%' : 'initial'}
					flexWrap={isMobile ? 'wrap' : 'nowrap'}
				>
					<Text
						whiteSpace="nowrap"
						marginRight="5"
						fontWeight="extrabold"
					>
						<FormattedMessage id="accountType" />
					</Text>
					<Select
						id={`${id}-select-account-type`}
						marginY={isMobile ? '3' : 'initial'}
						marginX={isMobile ? 'initial' : '2'}
						onChange={onSelectAccountType}
					>
						<option
							value={0}
							id={`${id}-select-account-type-option-all`}
						>
							<FormattedMessage id="all" />
						</option>
						<option
							value={1}
							id={`${id}-select-account-type-option-current-account`}
						>
							<FormattedMessage id="CurrentAccount" />
						</option>
						<option
							value={2}
							id={`${id}-select-account-saving-account`}
						>
							<FormattedMessage id="SavingAccount" />
						</option>
						<option
							value={3}
							id={`${id}-select-account-type-deposit-account`}
						>
							<FormattedMessage id="DepositAccount" />
						</option>
						<option
							value={4}
							id={`${id}-select-account-type-kustodial-account`}
						>
							<FormattedMessage id="KustodialAccount" />
						</option>
					</Select>
					<SearchBox
						id={`${id}-search-account`}
						placeHolder={formatMessage({
							id: 'searchAccount',
							defaultMessage: 'Search account',
						})}
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
													id: 'accountType',
												}) ||
												col.Header ===
													formatMessage({
														id: 'currency',
													}))
										)
											return null;
										return (
											<Th
												borderBottomWidth={'1px'}
												borderBottomColor="orange.100"
												{...col.getHeaderProps()}
											>
												{col.render('Header')}
											</Th>
										);
									})}
									{isMobile && (
										<Th
											borderBottomWidth={'1px'}
											borderBottomColor="orange.100"
										></Th>
									)}
								</Tr>
							);
						})}
					</Thead>
					<Tbody {...getTableBodyProps()}>
						{rows.map((row: Row<object>, index) => {
							prepareRow(row);
							return (
								<TableRow
									row={row}
									key={index}
								/>
							);
						})}
					</Tbody>
				</Table>
			</TableContainer>
		</>
	);
};

export default ContentTable;
