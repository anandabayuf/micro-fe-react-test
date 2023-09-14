import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	useBreakpointValue,
	Text,
	Box,
	Flex,
	ModalFooter,
} from '@chakra-ui/react';
import { FormattedMessage } from 'react-intl';

interface ModalLockProps {
	cellSelect: number | null;
	setCellSelect: (cell: number | null) => void;
	children?: JSX.Element;
	onUnlock: () => Promise<boolean>;
	id?: string;
}

const ModalLock = ({
	cellSelect,
	setCellSelect,
	children,
	onUnlock,
	id,
}: ModalLockProps) => {
	const handleClose = () => setCellSelect(null);
	const modalSize = useBreakpointValue({ base: 'full', md: 'sm' });

	const handleUnlockUser = async () => {
		if (await onUnlock()) {
			handleClose();
		}
	};

	return (
		<Modal
			id={`${id}-modal-lock`}
			isOpen={cellSelect !== null}
			size={modalSize}
			onClose={handleClose}
			isCentered
		>
			<ModalOverlay />
			<ModalContent minH="md">
				<ModalHeader>
					<FormattedMessage id="unlockUser" />
				</ModalHeader>
				<ModalCloseButton id={`${id}-modal-lock-close-btn`} />
				<ModalBody mt={6}>
					<Flex
						direction="column"
						gap="8"
					>
						<Text>
							<FormattedMessage id="unlockNotes" />
						</Text>
						<Box
							p={4}
							border="1px solid"
							borderColor="orange.100"
							rounded={8}
						>
							{children}
						</Box>
					</Flex>
				</ModalBody>
				<ModalFooter>
					<Flex
						direction="column"
						gap={4}
						w="full"
					>
						<Button
							id={`${id}-modal-lock-unlock-btn`}
							w="full"
							bgColor="orange.500"
							color="white"
							rounded={8}
							onClick={handleUnlockUser}
						>
							<FormattedMessage id="unlock" />
						</Button>
						<Button
							id={`${id}-modal-lock-cancel-btn`}
							w="full"
							variant="outline"
							borderColor="orange.500"
							color="orange.500"
							rounded={8}
							onClick={handleClose}
						>
							<FormattedMessage id="cancel" />
						</Button>
					</Flex>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default ModalLock;
