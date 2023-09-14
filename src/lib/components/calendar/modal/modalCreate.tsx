import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	useBreakpointValue,
	useDisclosure,
	Flex,
	Box,
	Checkbox,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import type { KeyedMutator } from 'swr';

import FormCalendar from 'lib/components/calendar/formCalendar';
import { useToastWrapper } from 'lib/hooks/useAppToast';
import addCalendar from 'lib/services/api/calendar/addEvents';
import { useConnectedCalendar } from 'lib/services/api/calendar/getEvents';
import type { GetCalendarResponse } from 'lib/services/api/calendar/getEvents/types';
import { useAuth } from 'lib/store/auth';
import { useCalendar } from 'lib/store/calendar';

interface SubmitProps {
	currentTarget: HTMLFormElement | undefined;
	preventDefault: () => void;
}

interface ModalCreateProps {
	mutate: KeyedMutator<GetCalendarResponse>;
	id?: string;
}

export const ModalCreate = ({ mutate, id }: ModalCreateProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const { selectDate, params } = useCalendar();
	const modalSize = useBreakpointValue({ base: 'full', md: 'md' });
	const [isLoading, setLoading] = useState<boolean>(false);
	const [checked, setChecked] = useState<boolean>(false);
	const toast = useToastWrapper();
	const { user } = useAuth();
	const intl = useIntl();
	const { mutate: mutateCalendar } = useConnectedCalendar(params, true);

	const readOnly = user?.additionalInfo?.menuList.find(
		(item) => item.id === 'MNU_CUST_HUB_CALENDAR'
	);

	const handleClose = () => {
		setChecked(false);
		onClose();
	};

	const handleSubmit = (event: SubmitProps) => {
		event.preventDefault();
		setLoading(true);

		const data = new FormData(event.currentTarget);
		const values: any = Object.fromEntries(data.entries());
		const startDate = new Date(
			new Date(values.startDate).setHours(0, 0, 0, 0)
		);
		const endDate = new Date(
			new Date(
				checked === false
					? values.startDate
					: values.endDate ?? values.startDate
			).setHours(0, 0, 0, 0)
		);
		const body = {
			...values,
			allDay: checked,
			startDate: format(startDate, 'dd-MM-yyyy'),
			endDate: format(endDate, 'dd-MM-yyyy'),
			startTime: values.startTime ?? format(new Date(), 'HH:ss'),
			endTime: values.endTime ?? format(new Date(), 'HH:ss'),
		};

		if (startDate > endDate) {
			toast({
				status: 'warning',
				description: `Tanggal selesai tidak boleh kurang dari tanggal mulai.`,
			});
			setLoading(false);
		} else {
			addCalendar(body)
				.then(() => {
					mutate();
					mutateCalendar();
					toast({
						status: 'success',
						description: intl.formatMessage({
							id: 'successAddEvents',
						}),
					});
					setChecked(false);
					setLoading(false);
					handleClose();
				})
				.catch(() => {
					setLoading(false);
				});
		}
	};

	const handleChangeCheckbox = (val: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(val.target.checked);
	};

	return (
		<>
			{!readOnly?.viewOnly && (
				<Button
					id={`${id}-create-corporate-event-btn`}
					mt={6}
					h={14}
					w="full"
					bg="#3A3A3A"
					color="white"
					_hover={{ bg: 'black' }}
					onClick={onOpen}
				>
					<FormattedMessage id="createEvent" />
				</Button>
			)}
			<Modal
				id={`${id}-create-event-modal`}
				isOpen={isOpen}
				size={modalSize}
				onClose={handleClose}
				isCentered
			>
				<ModalOverlay />
				<ModalContent borderRadius={0}>
					<ModalHeader>
						<FormattedMessage id="createEvent" />
					</ModalHeader>
					<ModalCloseButton
						id={`${id}-create-event-modal-close-btn`}
					/>
					<ModalBody>
						<form
							id={`${id}-create-event-modal-form`}
							onSubmit={handleSubmit}
						>
							<FormCalendar
								id={`${id}-create-event-modal`}
								time={checked}
								formDefault={{
									startDate: new Date(
										selectDate || new Date()
									),
									endDate: new Date(selectDate || new Date()),
								}}
							/>
							<Checkbox
								id={`${id}-create-event-modal-checkbox-all-day`}
								mt={4}
								name="allDay"
								onChange={handleChangeCheckbox}
							>
								<FormattedMessage id="allDay" />
							</Checkbox>
							<Box
								position={{ base: 'fixed', md: 'unset' }}
								w="full"
								bottom={0}
								right={0}
								px={{ base: 8, md: 0 }}
							>
								<Flex
									gap={5}
									my={6}
								>
									<Button
										id={`${id}-create-event-modal-cancel-btn`}
										onClick={handleClose}
										variant="outline"
										w="full"
									>
										<FormattedMessage id="cancel" />
									</Button>
									<Button
										id={`${id}-create-event-modal-create-event-btn`}
										w="full"
										type="submit"
										isLoading={isLoading}
									>
										<FormattedMessage id="createEventButton" />
									</Button>
								</Flex>
							</Box>
						</form>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};
