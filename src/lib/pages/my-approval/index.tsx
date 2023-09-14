import { Container, Heading, VStack, Box, Center } from '@chakra-ui/react';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import MyApprovalCard from 'lib/components/MyApproval/MyApprovalCard';
import Pagination from 'lib/components/pagination/pagination';
import { useMyApprovalGetList } from 'lib/services/api/myApproval/getMyApproval';

const MyApproval = () => {
	const [pageIndex, setPageIndex] = useState<number>(0);
	const [listPerPage, setListPerPage] = useState<number>(10);
	const { data: myApprovalList, mutate } = useMyApprovalGetList({
		page: pageIndex,
		size: listPerPage,
	});
	const handleNextPage = () => setPageIndex(pageIndex + 1);
	const handlePrevPage = () => setPageIndex(pageIndex - 1);

	return (
		<Container
			minHeight="80vh"
			w="full"
			maxW="full"
			px={{ base: 5, md: 12 }}
		>
			<Heading
				fontSize={{ base: 24, md: 32 }}
				py={8}
				fontWeight="bold"
				color="black"
			>
				<FormattedMessage id="myApprovalTitle" />
			</Heading>
			<VStack
				spacing={4}
				align="stretch"
			>
				{myApprovalList?.content?.map((approval, index) => (
					<MyApprovalCard
						id={`my-approval-list-item-${index}`}
						key={approval.id}
						myApprovalList={approval}
						mutate={mutate}
					/>
				))}
			</VStack>
			{myApprovalList?.content && myApprovalList?.content?.length > 0 ? (
				<Box py={8}>
					<Pagination
						id="my-approval-list"
						countData={myApprovalList?.totalRecord ?? 0}
						selectPageIndex={setPageIndex}
						currentPageIndex={pageIndex}
						listPageSize={
							myApprovalList?.totalRecord &&
							myApprovalList.totalRecord > 10
								? [10, 20, 30]
								: [10]
						}
						currentPageSize={listPerPage}
						selectedListperPage={setListPerPage}
						onNextPage={handleNextPage}
						onPrevPage={handlePrevPage}
					/>
				</Box>
			) : (
				<Center>
					<FormattedMessage id="myApprovalEmpty" />
				</Center>
			)}
		</Container>
	);
};

export default MyApproval;
