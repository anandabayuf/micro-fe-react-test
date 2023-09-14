import {
	Box,
	Stack,
	VStack,
	Flex,
	Text,
	Button,
	useToast,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import type { KeyedMutator } from 'swr';

import { ModalReject } from '../ModalReject';
import { approveTask } from 'lib/services/api/myApproval/approve';
import type {
	GetMyApprovalResponse,
	MyApprovalContentModel,
} from 'lib/services/api/myApproval/getMyApproval/types';

interface MyApprovalProps {
	myApprovalList: MyApprovalContentModel;
	mutate: KeyedMutator<GetMyApprovalResponse>;
	id?: string;
}

const MyApprovalCard = ({ myApprovalList, mutate, id }: MyApprovalProps) => {
	const intl = useIntl();
	const toast = useToast();
	const [isLoadingButton, setIsLoadingButton] = useState(false);
	const handleApprove = () => {
		setIsLoadingButton(true);
		const body = {
			id: myApprovalList.id,
		};

		approveTask(body)
			.then(() => {
				mutate();
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
				setIsLoadingButton(false);
			});
	};
	return (
		<Box
			boxShadow="0px 8px 16px -8px #FCECE2"
			backgroundColor="white"
			borderRadius={{ base: 0, md: 16 }}
			p={6}
		>
			<VStack>
				<Box width="full">
					<Text
						color="black"
						fontSize={18}
						fontWeight="bold"
					>
						<FormattedMessage id={myApprovalList.moduleName} />
					</Text>
				</Box>
				<Flex
					width="full"
					flexWrap="wrap"
					justifyContent="space-between"
				>
					<Stack spacing={2}>
						<Text
							fontSize="sm"
							opacity="50%"
						>
							<FormattedMessage id="date" />
						</Text>
						<Text fontSize="md">
							{format(
								new Date(myApprovalList.createdDate),
								'dd-MMMM-yyyy'
							)}
						</Text>
					</Stack>
					<Stack spacing={2}>
						<Text
							fontSize="sm"
							opacity="50%"
						>
							<FormattedMessage id="id" />
						</Text>
						<Text fontSize="md">{myApprovalList.orderId}</Text>
					</Stack>
					<Stack spacing={2}>
						<Text
							fontSize="sm"
							opacity="50%"
						>
							<FormattedMessage id="createdby" />
						</Text>
						<Text fontSize="md">
							{myApprovalList.createdByUsername}
						</Text>
					</Stack>
				</Flex>
				<Flex
					pt={4}
					w="full"
					justifyContent="flex-end"
				>
					<Stack
						w={['full', 'auto']}
						alignItems="center"
						direction={['column', 'column', 'row']}
						spacing={4}
					>
						<Box
							mt={[4, 4, 0]}
							w="full"
						>
							<Link to={`/my-approval/${myApprovalList.id}`}>
								<Button
									id={`${id}-detail-btn`}
									w="full"
									variant="outline"
									color="teal.500"
									borderColor="teal.500"
									fontWeight={700}
								>
									<FormattedMessage id="detail" />
								</Button>
							</Link>
						</Box>
						<Stack
							spacing={4}
							w="full"
							direction="row"
						>
							<ModalReject
								id={myApprovalList.id}
								mutate={mutate}
								componentId={id}
							/>
							<Button
								id={`${id}-approve-btn`}
								minW="120px"
								w="full"
								onClick={handleApprove}
								isLoading={isLoadingButton}
							>
								<FormattedMessage id="approve" />
							</Button>
						</Stack>
					</Stack>
				</Flex>
			</VStack>
		</Box>
	);
};

export default MyApprovalCard;
