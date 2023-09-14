import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	useBreakpointValue,
	Flex,
	Box,
	Checkbox,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import FormCalendar from 'lib/components/calendar/formCalendar';
import type { ModalCalendarProps } from 'lib/components/calendar/interface';
import { useToastWrapper } from 'lib/hooks/useAppToast';
import editCalendarEvent from 'lib/services/api/calendar/editEvents';
import { useConnectedCalendar } from 'lib/services/api/calendar/getEvents';
import { useCalendar } from 'lib/store/calendar';

interface SubmitProps {
	currentTarget: HTMLFormElement | undefined;
	preventDefault: () => void;
}

export const ModalEdit = ({
	isOpen,
	onClose,
	id,
	// events,
	mutate,
	componentId,
}: ModalCalendarProps) => {
	const modalSize = useBreakpointValue({ base: 'full', md: 'md' });
	const [checked, setChecked] = useState<boolean | null>(null);
	const [isLoading, setLoading] = useState<boolean>(false);
	const toast = useToastWrapper();
	const intl = useIntl();

	const { params } = useCalendar();
	const { data: eventLists, mutate: mutateCalendar } = useConnectedCalendar(
		params,
		true
	);

	if (!eventLists?.content) {
		return null;
	}

	const event = eventLists?.content?.find((item) => item.id === id);
	const checkedValue = checked === null ? event?.allDay : checked;

	const handleClose = () => {
		setChecked(null);
		onClose();
	};

	const handleSubmit = (e: SubmitProps) => {
		e.preventDefault();
		setLoading(true);

		const data = new FormData(e.currentTarget);
		const values: any = Object.fromEntries(data.entries());

		const startDate = new Date(
			new Date(values.startDate).setHours(0, 0, 0, 0)
		);
		const endDate = new Date(
			new Date(
				checkedValue
					? new Date(values.endDate ?? new Date())
					: new Date(values.startDate ?? new Date())
			).setHours(0, 0, 0, 0)
		);

		if (startDate > endDate) {
			toast({
				status: 'warning',
				description: `Tanggal selesai tidak boleh kurang dari tanggal mulai.`,
			});
			setLoading(false);
		} else {
			const body = {
				...values,
				id,
				allDay: checkedValue,
				startDate: format(startDate, 'dd-MM-yyyy'),
				endDate: format(endDate, 'dd-MM-yyyy'),
				startTime: values.startTime ?? format(new Date(), 'HH:ss'),
				endTime: values.endTime ?? format(new Date(), 'HH:ss'),
			};

			editCalendarEvent(body)
				.then(() => {
					mutate();
					mutateCalendar();
					toast({
						status: 'success',
						description: intl.formatMessage({
							id: 'successEditEvents',
						}),
					});
					setChecked(null);
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
		<Modal
			id={`${componentId}-edit-event-modal`}
			isOpen={isOpen}
			size={modalSize}
			onClose={handleClose}
			isCentered
		>
			<ModalOverlay />
			<ModalContent borderRadius={0}>
				<ModalHeader>
					<FormattedMessage id="editEvent" />
				</ModalHeader>
				<ModalCloseButton
					id={`${componentId}-edit-event-modal-close-btn`}
				/>
				<ModalBody>
					<form
						id={`${componentId}-edit-event-modal-form`}
						onSubmit={handleSubmit}
					>
						<FormCalendar
							id={`${componentId}-edit-event-modal`}
							time={checkedValue ?? false}
							formDefault={event}
						/>
						<Checkbox
							id={`${componentId}-edit-event-modal-checkbox-all-day`}
							mt={4}
							name="allDay"
							defaultChecked={event?.allDay}
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
									id={`${componentId}-edit-event-modal-cancel-btn`}
									onClick={handleClose}
									variant="outline"
									w="full"
								>
									<FormattedMessage id="cancel" />
								</Button>
								<Button
									id={`${componentId}-edit-event-modal-save-btn`}
									w="full"
									type="submit"
									isLoading={isLoading}
								>
									<FormattedMessage id="save" />
								</Button>
							</Flex>
						</Box>
					</form>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};
