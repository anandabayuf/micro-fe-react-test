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

interface ModalDeleteProps {
	cellSelect: number | null;
	setCellSelect: (cell: number | null) => void;
	title: string;
	description: string;
	note?: string;
	children?: JSX.Element;
	onDelete: () => Promise<boolean>;
	id?: string;
}

const ModalDelete = ({
	cellSelect,
	setCellSelect,
	title,
	note,
	description,
	children,
	onDelete,
	id,
}: ModalDeleteProps) => {
	const handleClose = () => setCellSelect(null);
	const modalSize = useBreakpointValue({ base: 'full', md: 'sm' });

	const handleDelete = async () => {
		if (await onDelete()) {
			handleClose();
		}
	};

	return (
		<Modal
			id={`${id}-modal-delete`}
			isOpen={cellSelect !== null}
			size={modalSize}
			onClose={handleClose}
			isCentered
		>
			<ModalOverlay />
			<ModalContent minH="md">
				<ModalHeader>{title}</ModalHeader>
				<ModalCloseButton id={`${id}-modal-delete-close-btn`} />
				<ModalBody mt={6}>
					<Text>{description}</Text>
					<Box
						p={6}
						border="1px solid"
						borderColor="gray.200"
						mt={3}
					>
						{children}
					</Box>
					<Text pt="4">{note}</Text>
				</ModalBody>
				<ModalFooter>
					<Flex
						gap={4}
						w="full"
					>
						<Button
							id={`${id}-modal-delete-cancel-btn`}
							w="full"
							variant="outline"
							borderColor="gray.400"
							color="gray.500"
							rounded={0}
							onClick={handleClose}
						>
							<FormattedMessage id="cancel" />
						</Button>
						<Button
							id={`${id}-modal-delete-delete-btn`}
							w="full"
							rounded={0}
							onClick={handleDelete}
						>
							<FormattedMessage id="delete" />
						</Button>
					</Flex>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default ModalDelete;
