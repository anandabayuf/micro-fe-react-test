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
import withAddNewBankAndAccount from '../../hocs/withAddNewBankAndAccount';
import AppSteps from '../../Steps';

const AddNewBankAndAccount = withAddNewBankAndAccount(AppSteps);

const AddModal: React.FC<ModalProps> = ({ isOpen, handleClose }) => {
	const modalSize = useBreakpointValue({ base: 'full', md: 'md' });

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
					<FormattedMessage id="listOfBanksAndAccounts.title.modal.add" />
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<AddNewBankAndAccount handleClose={handleClose} />
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default AddModal;
