import React from 'react';
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	useBreakpointValue,
	ModalCloseButton,
} from '@chakra-ui/react';
import { FormattedMessage } from 'react-intl';
import { ModalProps } from '../../../../types';
import ActivateDeactivateConfirmationView from '../../ConfirmationView/ActivateDeactivate';
import { useOtherBankAccount } from '../../../../../../store/otherBankAccount';

const ActivateDeactivateModal: React.FC<ModalProps> = ({
	isOpen,
	handleClose,
}) => {
	const modalSize = useBreakpointValue({ base: 'full', md: 'md' });
	const { selectedBankAndAccount } = useOtherBankAccount();

	return (
		<Modal
			isOpen={isOpen ?? false}
			size={modalSize}
			onClose={handleClose}
			isCentered
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>
					<FormattedMessage
						id={
							selectedBankAndAccount?.status === '0'
								? 'listOfBanksAndAccounts.title.modal.deactivate'
								: 'listOfBanksAndAccounts.title.modal.activate'
						}
					/>
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<ActivateDeactivateConfirmationView
						handleClose={handleClose}
					/>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default ActivateDeactivateModal;
