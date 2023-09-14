import {
	Container,
	Heading,
	VStack,
	Box,
	Text,
	SimpleGrid,
	Button,
	useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useParams, useNavigate } from 'react-router-dom';

import DetailMyApprovalGroup from 'lib/components/MyApproval/DetailMyApprovalGroup';
import DetailMyApprovalUser from 'lib/components/MyApproval/DetailMyApprovalUser';
import { ModalReject } from 'lib/components/MyApproval/ModalReject';
import { approveTask } from 'lib/services/api/myApproval/approve';
import { useMyApprovalGetDetail } from 'lib/services/api/myApproval/getMyApprovalDetail';
import {
	NewValueUser,
	OldValueUser,
} from 'lib/services/api/myApproval/getMyApprovalDetail/types';
import DetailMyApprovalOtherBankAccount from 'lib/components/MyApproval/DetailMyApprovalOtherBankAccount';
import { ValueOtherBankAccount } from '../../services/api/myApproval/getMyApprovalDetail/types';

const MyApprovalDetail = () => {
	const intl = useIntl();
	const router = useParams();
	const toast = useToast();
	const navigate = useNavigate();
	const [isLoadingButton, setIsloadingButton] = useState(false);
	const { data: myApprovalDetail } = useMyApprovalGetDetail(router?.id ?? '');

	const handleApprove = () => {
		const body = {
			id: router?.id,
		};
		setIsloadingButton(true);

		approveTask(body)
			.then(() => {
				toast({
					description: intl.formatMessage({
						id: 'approveTaskSuccess',
					}),
					status: 'success',
					duration: 5000,
					isClosable: true,
				});
			})
			.finally(() => {
				setIsloadingButton(false);
				navigate('/my-approval');
			});
	};

	const handleRedirect = () => navigate('/my-approval');
	const newValue = myApprovalDetail?.content?.newValue;
	const oldValue = myApprovalDetail?.content?.oldValue;
	if (!myApprovalDetail) {
		return null;
	}

	return (
		<Container
			minHeight="80vh"
			w="full"
			maxW="full"
			px={{ base: 5, md: 12 }}
		>
			<VStack>
				<Heading
					fontSize={{ base: 24, md: 32 }}
					py={8}
					fontWeight="bold"
					color="black"
				>
					<FormattedMessage id="detailApproval" />
				</Heading>

				<Text fontSize="md">
					{intl.formatMessage({
						id: myApprovalDetail?.content?.moduleName,
					})}
				</Text>
				<Box
					borderRadius="lg"
					bgColor="white"
					p={8}
				>
					{myApprovalDetail?.content?.moduleName?.split('.')[3] ===
					'usergroup' ? (
						<DetailMyApprovalGroup
							newValue={newValue as NewValueUser}
							oldValue={oldValue as OldValueUser}
						/>
					) : myApprovalDetail?.content?.moduleName?.split('.')[3] ===
					  'user' ? (
						<DetailMyApprovalUser
							newValue={newValue as NewValueUser}
							oldValue={oldValue as OldValueUser}
						/>
					) : myApprovalDetail?.content?.moduleName?.split('.')[3] ===
					  'otherbank' ? (
						<DetailMyApprovalOtherBankAccount
							newValue={newValue as ValueOtherBankAccount}
							oldValue={oldValue as ValueOtherBankAccount}
						/>
					) : null}
					<SimpleGrid
						columns={2}
						gap={4}
						pt={8}
					>
						<ModalReject
							id={router?.id as string}
							redirect={handleRedirect}
							componentId="detail-my-approval"
						/>
						<Button
							id="detail-my-approval-approve-btn"
							onClick={handleApprove}
							isLoading={isLoadingButton}
						>
							<FormattedMessage id="approve" />
						</Button>
					</SimpleGrid>
				</Box>
			</VStack>
		</Container>
	);
};

export default MyApprovalDetail;
