import {
	Box,
	Button,
	SimpleGrid,
	FormControl,
	Textarea,
	useDisclosure,
	VStack,
	FormErrorMessage,
	useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import type { KeyedMutator } from 'swr';

import ModalWrapper from 'lib/components/shared/ModalWrapper';
import type { GetMyApprovalResponse } from 'lib/services/api/myApproval/getMyApproval/types';
import type { GetMyApprovalDetailResponse } from 'lib/services/api/myApproval/getMyApprovalDetail/types';
import { rejectTask } from 'lib/services/api/myApproval/reject';

interface ModalRejectProps {
	id: string;
	mutate?:
		| KeyedMutator<GetMyApprovalResponse>
		| KeyedMutator<GetMyApprovalDetailResponse>;
	redirect?: () => void;
	componentId?: string;
}

export const ModalReject = ({
	id,
	mutate,
	redirect,
	componentId = '',
}: ModalRejectProps) => {
	const intl = useIntl();
	const toast = useToast();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [reason, setReason] = useState('');
	const [isLoadingButton, setIsLoadingButton] = useState(false);
	const isError = reason === '';
	const handleReasonChange = (e: any) => setReason(e.target.value);
	const handleReject = () => {
		const body = {
			id,
			reason,
		};
		setIsLoadingButton(true);

		rejectTask(body)
			.then(() => {
				if (mutate) mutate();
				toast({
					description: intl.formatMessage({
						id: 'rejectTaskSuccess',
					}),
					status: 'success',
					duration: 5000,
					isClosable: true,
				});
			})
			.finally(() => {
				setIsLoadingButton(false);
				if (redirect) redirect();
			});
	};
	return (
		<>
			<Button
				id={`${componentId}-reject-btn`}
				w="full"
				variant="outline"
				minW="120px"
				onClick={onOpen}
			>
				<FormattedMessage id="reject" />
			</Button>
			<ModalWrapper
				id="reject"
				isOpen={isOpen}
				onClose={onClose}
				closeOnOverlayClick
				header={<FormattedMessage id="rejectTitle" />}
				body={
					<VStack align="flex-start">
						<Box>
							<FormattedMessage id="reason" />
						</Box>
						<Box width="full">
							<FormControl isInvalid={isError}>
								<Textarea
									id="reject-modal-form-text-area-reason"
									name="reason"
									isRequired
									width="full"
									placeholder={intl.formatMessage({
										id: 'reasonPlaceholder',
									})}
									value={reason}
									onChange={handleReasonChange}
								/>
								{isError && (
									<FormErrorMessage>
										<FormattedMessage id="reasonRequired" />
									</FormErrorMessage>
								)}
							</FormControl>
						</Box>
					</VStack>
				}
				footer={
					<SimpleGrid
						columns={2}
						spacing={4}
						width="full"
					>
						<Button
							id="reject-modal-cancel-btn"
							variant="outline"
							onClick={onClose}
						>
							<FormattedMessage id="cancel" />
						</Button>
						<Button
							id="reject-modal-send-btn"
							onClick={handleReject}
							isLoading={isLoadingButton}
							disabled={isError}
						>
							<FormattedMessage id="send" />
						</Button>
					</SimpleGrid>
				}
			/>
		</>
	);
};
