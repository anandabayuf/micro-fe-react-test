import {
	Flex,
	FormControl,
	FormLabel,
	Input,
	Textarea,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { FormattedMessage, useIntl } from 'react-intl';

interface DefaultValueForm {
	name?: string | null;
	description?: string | null;
	startDate?: Date | null;
	endDate?: Date | null;
	startTime?: string | null;
	endTime?: string | null;
	allDay?: boolean;
}

interface FormCalendarProps {
	formDefault?: DefaultValueForm;
	time: boolean;
	id?: string;
}

const FormCalendar = ({
	time = false,
	formDefault = {
		name: null,
		allDay: false,
		description: null,
		endDate: new Date(),
		startDate: new Date(),
		endTime: null,
		startTime: null,
	},
	id,
}: FormCalendarProps) => {
	const intl = useIntl();
	return (
		<Flex
			flexDirection="column"
			gap="6"
		>
			<FormControl>
				<FormLabel htmlFor={`${id}-calendar-form-input-event-title`}>
					<FormattedMessage id="eventTitle" />
				</FormLabel>
				<Input
					id={`${id}-calendar-form-input-event-title`}
					type="text"
					h="12"
					name="name"
					borderRadius={0}
					defaultValue={formDefault?.name || ''}
					placeholder={intl.formatMessage({
						id: 'eventTitlePlaceholder',
					})}
					isRequired
				/>
			</FormControl>
			<FormControl>
				<FormLabel
					htmlFor={`${id}-calendar-form-input-event-description`}
				>
					<FormattedMessage id="eventDescription" />
				</FormLabel>
				<Textarea
					id={`${id}-calendar-form-text-area-event-description`}
					h="12"
					name="description"
					borderRadius={0}
					defaultValue={formDefault?.description || ''}
					placeholder={intl.formatMessage({
						id: 'eventDescriptionPlaceholder',
					})}
					isRequired
				/>
			</FormControl>
			<FormControl>
				<FormLabel htmlFor={`${id}-calendar-form-input-start-date`}>
					<FormattedMessage id="eventStart" />
				</FormLabel>
				<Input
					id={`${id}-calendar-form-input-start-date`}
					type="date"
					h="12"
					name="startDate"
					borderRadius={0}
					defaultValue={format(
						new Date(formDefault?.startDate || new Date()),
						'yyyy-MM-dd'
					)}
					placeholder="Tanggal Mulai Event"
					isRequired
				/>
			</FormControl>
			{time && (
				<FormControl>
					<FormLabel htmlFor={`${id}-calendar-form-input-end-date`}>
						<FormattedMessage id="eventEnd" />
					</FormLabel>
					<Input
						defaultValue={format(
							new Date(formDefault?.endDate || new Date()),
							'yyyy-MM-dd'
						)}
						// disabled={handleErr.startDate === null}
						id={`${id}-calendar-form-input-end-date`}
						type="date"
						h="12"
						name="endDate"
						borderRadius={0}
						placeholder="Tanggal Selesai Event"
						isRequired
					/>
				</FormControl>
			)}
			{!time && (
				<Flex gap={6}>
					<FormControl>
						<FormLabel
							htmlFor={`${id}-calendar-form-input-start-time`}
						>
							<FormattedMessage id="eventTimeStart" />
						</FormLabel>
						<Input
							id={`${id}-calendar-form-input-start-time`}
							type="time"
							defaultValue={
								!formDefault.startTime
									? format(new Date(), 'HH:ss')
									: formDefault.startTime
							}
							h="12"
							name="startTime"
							borderRadius={0}
							placeholder="Waktu Mulai"
							isRequired
						/>
					</FormControl>
					<FormControl>
						<FormLabel
							htmlFor={`${id}-calendar-form-input-end-time`}
						>
							<FormattedMessage id="eventTimeEnd" />
						</FormLabel>
						<Input
							id={`${id}-calendar-form-input-end-time`}
							defaultValue={
								!formDefault.endTime
									? format(new Date(), 'HH:ss')
									: formDefault.endTime
							}
							type="time"
							h="12"
							name="endTime"
							borderRadius={0}
							placeholder="Waktu Selesai"
							isRequired
						/>
					</FormControl>
				</Flex>
			)}
		</Flex>
	);
};

export default FormCalendar;
