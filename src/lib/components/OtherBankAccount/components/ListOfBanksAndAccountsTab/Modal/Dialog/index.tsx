import React from 'react';
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalOverlay,
	useBreakpointValue,
	Text,
	Button,
	Flex,
} from '@chakra-ui/react';
import { FormattedMessage } from 'react-intl';
import { useOtherBankAccount } from 'lib/store/otherBankAccount';
import SuccessIcon from 'lib/components/icons/SuccessIcon';

const DialogModal: React.FC = () => {
	const modalSize = useBreakpointValue({ base: 'full', md: 'md' });
	const {
		modal: { isOpen, message, type },
		closeModal,
	} = useOtherBankAccount();

	const handleClose = () => {
		closeModal();
	};

	return (
		<Modal
			isOpen={isOpen ?? false}
			size={modalSize}
			onClose={handleClose}
			isCentered
		>
			<ModalOverlay />
			<ModalContent>
				<ModalBody padding={'24px'}>
					<Flex justifyContent={'center'}>
						{type === 'SUCCESS' ? <SuccessIcon /> : <></>}
					</Flex>
					<Flex
						justifyContent={'center'}
						marginTop="4px"
						marginBottom="6px"
					>
						<Text
							fontWeight={'700'}
							fontSize="24px"
						>
							<FormattedMessage
								id={
									type === 'SUCCESS'
										? 'listOfBanksAndAccounts.label.success'
										: 'listOfBanksAndAccounts.label.failed'
								}
							/>
						</Text>
					</Flex>

					<Text
						textAlign={'center'}
						mb="10px"
					>
						<FormattedMessage id={message || ''} />
					</Text>

					<Button
						onClick={handleClose}
						w="full"
					>
						<FormattedMessage id="listOfBanksAndAccounts.button.ok" />
					</Button>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default DialogModal;
