import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	Flex,
	IconButton,
	ModalFooter,
	Button,
	Text,
} from '@chakra-ui/react';
import { FiCheck } from 'react-icons/fi';
import { FormattedMessage } from 'react-intl';

import { useGetWidgetDefault } from 'lib/services/api/widget/getWidget';
import type { WidgetManagementType } from 'lib/services/api/widget/getWidget/types';
import { changeDotSeparatorIntoIdFormat } from 'lib/utils/id';

type AddWidgetModalProps = {
	isOpen: boolean;
	onClose: () => void;
	checkSelectWidget: (
		item: WidgetManagementType
	) => WidgetManagementType | undefined;
	handleSelectWidget: (widget: WidgetManagementType) => () => void;
	addWidget: () => void;
	id?: string;
};

const AddWidgetModal = ({
	addWidget,
	checkSelectWidget,
	handleSelectWidget,
	isOpen,
	onClose,
	id,
}: AddWidgetModalProps) => {
	const { data, isLoading } = useGetWidgetDefault();

	if (isLoading && data) return null;
	return (
		<Modal
			id={`${id}-add-widget-modal`}
			isOpen={isOpen}
			onClose={onClose}
			size="xs"
			isCentered
		>
			<ModalOverlay />
			<ModalContent maxH={'70vh'}>
				<ModalHeader>
					<FormattedMessage id="addWidget" />
				</ModalHeader>
				<ModalCloseButton id={`${id}-add-widget-modal-close-btn`} />
				<ModalBody
					overflow={'scroll'}
					overflowX="hidden"
				>
					<Text>
						<FormattedMessage id="addWidgetNote" />
					</Text>
					<Flex
						mt={6}
						gap={4}
						flexDir="column"
					>
						{data?.content?.map((item) => (
							<Flex
								flexDir="row"
								alignItems="center"
								justify="space-between"
								rounded="md"
								border={1}
								borderStyle="solid"
								borderColor="orange.100"
								p={4}
								key={item.id}
							>
								<Text fontWeight={600}>
									<FormattedMessage id={item.name} />
								</Text>
								<IconButton
									id={`${id}-add-widget-modal-select-widget-check-${changeDotSeparatorIntoIdFormat(
										item.name
									)}`}
									size="sm"
									rounded="full"
									variant={
										checkSelectWidget(item)
											? 'solid'
											: 'outline'
									}
									onClick={handleSelectWidget(item)}
									aria-label="Add-widget"
								>
									{checkSelectWidget(item) ? <FiCheck /> : ''}
								</IconButton>
							</Flex>
						))}
					</Flex>
				</ModalBody>

				<ModalFooter
					flexDir="column"
					gap={4}
				>
					<Button
						id={`${id}-add-widget-modal-add-btn`}
						onClick={addWidget}
						w="full"
					>
						<FormattedMessage id="add" />
					</Button>
					<Button
						id={`${id}-add-widget-modal-cancel-btn`}
						variant="outline"
						onClick={onClose}
						w="full"
					>
						<FormattedMessage id="cancel" />
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default AddWidgetModal;
