import React from 'react';
import { Container, Flex } from '@chakra-ui/react';
import SearchBar from './SearchBar';
import AddButton from './AddButton';
import ListOfBanksAndAccountsTable from './Table';
import SuccessModal from './Modal/Dialog';
import { useGetListOfBanksAndAccounts } from '../../../../services/api/otherBankAccount/listOfBanksAndAccounts/getListOfBanksAndAccounts/index';
import Loading from './Loading';
import EmptyView from './EmptyView';
import { SortProps } from '../../types';

const ListOfBanksAndAccountsTab: React.FC = () => {
	const [searchValue, setSearchValue] = React.useState<string | undefined>();
	const [page, setPage] = React.useState(0);
	const [size, setSize] = React.useState(10);
	const [sort, setSort] = React.useState<SortProps['sortBy']>([
		{ id: 'id', desc: false },
	]);

	const { data, isLoading } = useGetListOfBanksAndAccounts({
		page,
		size,
		searchValue,
		sortBy: sort[0]?.id || 'id',
		direction: sort[0]?.desc ? 'DESC' : 'ASC',
	});

	const handleSort = React.useCallback(
		({ sortBy, pageSize, pageIndex }: SortProps) => {
			setSort(sortBy);
			setPage(pageIndex);
			setSize(pageSize);
		},
		[]
	);

	return (
		<Container
			backgroundColor={'white'}
			w="full"
			maxW="full"
			minH={'50vh'}
			p={4}
			rounded={8}
			boxShadow={'sm'}
		>
			<Flex
				direction={{ base: 'column', md: 'row' }}
				justifyContent="space-between"
				alignItems="center"
				gap={4}
				mb={4}
			>
				<SearchBar setSearchValue={setSearchValue} />

				<AddButton />
			</Flex>
			{isLoading ? (
				<Loading />
			) : (
				<>
					{!data ||
					data?.content === null ||
					data?.totalRecord === 0 ? (
						<EmptyView />
					) : (
						<>
							<ListOfBanksAndAccountsTable
								data={data}
								handleSort={handleSort}
								page={page}
								size={size}
							/>
							<SuccessModal />
						</>
					)}
				</>
			)}
		</Container>
	);
};

export default ListOfBanksAndAccountsTab;
