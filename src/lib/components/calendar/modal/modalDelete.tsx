import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Box,
	Text,
	Heading,
	useBreakpointValue,
	useToast,
} from '@chakra-ui/react';
import { FormattedMessage, useIntl } from 'react-intl';

import type { ModalCalendarProps } from 'lib/components/calendar/interface';
import delCalendarEvent from 'lib/services/api/calendar/deleteEvents';
import { useConnectedCalendar } from 'lib/services/api/calendar/getEvents';
import { useCalendar } from 'lib/store/calendar';

export const ModalDelete = ({
	isOpen,
	onClose,
	id,
	events,
	mutate,
	componentId,
}: ModalCalendarProps) => {
	const event = events.find((item) => item.id === id);
	const modalSize = useBreakpointValue({ base: 'full', md: 'sm' });
	const { params } = useCalendar();
	const { mutate: mutateCalendar } = useConnectedCalendar(params, true);
	const toast = useToast();
	const intl = useIntl();

	const deleteEvent = () => {
		delCalendarEvent(id || '').then(() => {
			mutateCalendar();
			mutate();
			toast({
				description: intl.formatMessage({ id: 'successDeleteEvents' }),
				status: 'success',
				duration: 5000,
				isClosable: true,
			});
		});
		onClose();
	};

	return (
		<Modal
			id={`${componentId}-delete-event-modal`}
			isOpen={isOpen}
			size={modalSize}
			onClose={onClose}
			isCentered
		>
			<ModalOverlay />
			<ModalContent
				borderRadius={0}
				w={{ base: 'full', md: 'sm' }}
			>
				<Box
					borderBottom={
						modalSize === 'full' ? '1px solid #dedede' : ''
					}
				>
					<ModalHeader>
						<FormattedMessage id="deleteEvent" />
					</ModalHeader>
					{modalSize === 'full' && (
						<Text
							px="6"
							mb="5"
						>
							{event?.name ?? ''}
						</Text>
					)}
				</Box>
				<ModalCloseButton
					id={`${componentId}-delete-event-modal-close-btn`}
				/>
				<ModalBody>
					<Box>
						<Text>
							<FormattedMessage id="deleteEventConfirmation" />
						</Text>
						<Box
							mt={3}
							p={4}
							border="1px solid #dedede"
						>
							<Heading size="sm">{event?.name ?? ''}</Heading>
							{event?.description ? (
								<Text>{`${event?.description.slice(0, 80)}${
									(event?.description.length || 0) > 80
										? '...'
										: ''
								}`}</Text>
							) : (
								''
							)}
						</Box>
					</Box>
				</ModalBody>

				<ModalFooter gap={5}>
					<Button
						id={`${componentId}-delete-event-modal-cancel-btn`}
						onClick={onClose}
						variant="outline"
						w="full"
					>
						<FormattedMessage id="cancel" />
					</Button>
					<Button
						id={`${componentId}-delete-event-modal-delete-btn`}
						variant="outline"
						w="full"
						onClick={deleteEvent}
					>
						<FormattedMessage id="delete" />
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
