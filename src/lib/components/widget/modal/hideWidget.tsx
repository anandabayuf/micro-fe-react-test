import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalFooter,
	Button,
	Text,
	ModalCloseButton,
	ModalHeader,
	Box,
	useDisclosure,
} from '@chakra-ui/react';
import { FormattedMessage } from 'react-intl';

import type { WidgetManagementType } from 'lib/services/api/widget/getWidget/types';

import SuccessModal from './success';

type HideModalProps = {
	isOpen: boolean;
	onClose: () => void;
	removeWidget: () => void;
	selectWidget: WidgetManagementType | null;
	id?: string;
};

const HideModal = ({
	isOpen,
	onClose,
	removeWidget,
	selectWidget,
	id,
}: HideModalProps) => {
	const {
		isOpen: openSuccess,
		onOpen: onOpenSuccess,
		onClose: onCloseSuccess,
	} = useDisclosure();

	const handleSave = () => {
		onOpenSuccess();
		removeWidget();
	};

	return (
		<>
			<Modal
				id={`${id}-hide-widget-modal`}
				isOpen={isOpen}
				onClose={onClose}
				size="xs"
				isCentered
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						<FormattedMessage id="hideWidget" />
					</ModalHeader>
					<ModalCloseButton
						id={`${id}-hide-widget-modal-close-btn`}
					/>
					<ModalBody>
						<Text>
							<FormattedMessage id="hideConfirmation" />
						</Text>
						<Box
							bg="white"
							border="1px"
							rounded="md"
							mt={4}
							borderColor="orange.100"
							borderStyle="solid"
							p={3}
						>
							<Text
								fontWeight={700}
								mb={2}
							>
								<FormattedMessage id={selectWidget?.name} />
							</Text>
							<Text fontSize={14}>{selectWidget?.desc}</Text>
						</Box>
					</ModalBody>

					<ModalFooter
						flexDir="column"
						gap={4}
					>
						<Button
							id={`${id}-hide-widget-modal-hide-btn`}
							variant="outline"
							onClick={handleSave}
							w="full"
						>
							<FormattedMessage id="hide" />
						</Button>
						<Button
							id={`${id}-hide-widget-modal-cancel-btn`}
							variant="outline"
							onClick={onClose}
							w="full"
						>
							<FormattedMessage id="cancel" />
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
			<SuccessModal
				id={`${id}-hide-widget`}
				openSuccess={openSuccess}
				onCloseSuccess={onCloseSuccess}
			/>
		</>
	);
};

export default HideModal;
