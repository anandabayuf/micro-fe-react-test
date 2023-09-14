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

interface ModalSessionProps {
	cellSelect: number | null;
	setCellSelect: (cell: number | null) => void;
	children?: JSX.Element;
	onRelease: () => Promise<boolean>;
	id?: string;
}

const ModalSession = ({
	cellSelect,
	setCellSelect,
	children,
	onRelease,
	id,
}: ModalSessionProps) => {
	const handleClose = () => setCellSelect(null);
	const modalSize = useBreakpointValue({ base: 'full', md: 'sm' });

	const handleReleaseSession = async () => {
		if (await onRelease()) {
			handleClose();
		}
	};

	return (
		<Modal
			id={`${id}-modal-session`}
			isOpen={cellSelect !== null}
			size={modalSize}
			onClose={handleClose}
			isCentered
		>
			<ModalOverlay />
			<ModalContent minH="md">
				<ModalHeader>
					<FormattedMessage id="releaseSession" />
				</ModalHeader>
				<ModalCloseButton id={`${id}-modal-session-close-btn`} />
				<ModalBody mt={6}>
					<Flex
						direction="column"
						gap="8"
					>
						<Text>
							<FormattedMessage id="releaseSessionNotes" />
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
							id={`${id}-modal-session-release-session-btn`}
							w="full"
							bgColor="orange.500"
							color="white"
							rounded={8}
							onClick={handleReleaseSession}
						>
							<FormattedMessage id="releaseSession" />
						</Button>
						<Button
							id={`${id}-modal-session-cancel-btn`}
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

export default ModalSession;
