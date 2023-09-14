import { Box, Flex, Spinner, Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import CustomTable from './Table';
import { useGetBalanceDetail } from 'lib/services/api/aggregate-bank/getBalanceDetail';
import shallow from 'zustand/shallow';
import { useAggregateBankStore } from 'lib/store/useAggregateBank';
import { savingDetailHeaders, savingDetailHeadersMobile } from './constants';
import { parseMoney } from 'lib/utils/currency';
import { useAuth } from 'lib/store/auth';
import ContentTableMobile from './TableMobile';
import { format } from 'date-fns';
import { SortProps } from './Table/types';

const SavingDetail: React.FC = () => {
	const { selectedCorporate, selectedBank } = useAggregateBankStore(
		(state) => state,
		shallow
	);
	const { companyId } = useAuth((state) => state, shallow);
	const [isMobile] = useMediaQuery('(max-width: 768px)');

	const [sort, setSort] = React.useState<SortProps['sortBy']>([]);
	const [page, setPage] = React.useState<number>(0);
	const [pageSizeUser, setPageSize] = React.useState<number>(10);

	const { data } = useGetBalanceDetail({
		accountType: 'S',
		corporate: selectedCorporate !== 'all' ? selectedCorporate : companyId,
		page: page,
		needGetChildCif: selectedCorporate !== 'all' ? false : true,
		sortBy: sort[0]?.id ?? 'accountType',
		direction: sort[0]?.desc ? 'DESC' : 'ASC' ?? 'DESC',
		...(selectedBank !== 'All' && {
			bank: selectedBank,
		}),
	});

	const handleSort = React.useCallback(
		({ sortBy, pageSize, pageIndex }: SortProps) => {
			setSort(sortBy);
			setPage(pageIndex);
			setPageSize(pageSize);
		},
		[]
	);

	const tableDatas = React.useMemo(() => {
		return data?.content?.map((data) => ({
			...data,
			balanceLocal: parseMoney(String(data?.balanceLocal)),
			balanceOri: parseMoney(String(data?.balanceOri)),
			balanceDate: format(new Date(data?.balanceDate), 'dd-MM-yyyy'),
		}));
	}, [data]);

	return (
		<Box
			bg="white"
			rounded="xl"
			p={6}
			mt={8}
			display="flex"
			flexDirection={'column'}
		>
			{!data?.content ? (
				<Flex
					justifyContent="center"
					alignItems="center"
					minH="50vh"
				>
					<Spinner
						width={32}
						height={32}
					/>
				</Flex>
			) : (
				<>
					<Text
						fontSize={24}
						fontWeight={'bold'}
					>
						<FormattedMessage id="aggregateBank.card.detail.title" />
					</Text>
					{data?.content && data?.content?.length > 0 ? (
						<>
							{isMobile ? (
								<ContentTableMobile
									id={`table-saving-detail-mobile`}
									onSort={handleSort}
									columns={savingDetailHeadersMobile}
									tableData={tableDatas}
									defaultItemPerPage={pageSizeUser}
									defaultPageNumber={page}
									totalPage={data?.totalRecord || 0}
								/>
							) : (
								<CustomTable
									id={'table-saving-detail'}
									onSort={handleSort}
									columns={savingDetailHeaders}
									tableData={tableDatas}
									defaultItemPerPage={pageSizeUser}
									defaultPageNumber={page}
									totalPage={data?.totalRecord || 0}
								/>
							)}
						</>
					) : (
						<Flex
							flex={1}
							justifyContent="center"
							alignItems="center"
							flexDirection="column"
							minH="95vh"
							fontWeight={400}
							fontSize={16}
						>
							<Text
								color="gray.900"
								textAlign="center"
								my={8}
							>
								Empty Data
							</Text>
						</Flex>
					)}
				</>
			)}
		</Box>
	);
};

export default SavingDetail;
