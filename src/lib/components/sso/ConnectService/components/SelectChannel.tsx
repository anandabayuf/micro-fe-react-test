import { Grid, Button, Spacer, Select, Text, Skeleton } from '@chakra-ui/react';
import * as React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { useChannelSelection } from 'lib/services/api/cxo/getChannelSelection';
import { useConnectServiceFormStore } from 'lib/store/connectServiceForm';
import { changeIntoIdFormat } from 'lib/utils/id';

type SelectChannelProps = {
	id?: string;
};

const SelectChannel = ({ id }: SelectChannelProps) => {
	const intl = useIntl();
	const [stepTwo, setCurrentStep, setFormData] = useConnectServiceFormStore(
		(state) => [state.stepTwo, state.setCurrentStep, state.setFormData]
	);
	const { data, isLoading } = useChannelSelection();
	const channels = React.useMemo(() => data?.content, [data?.content]);

	const handleSelectChannel: React.ChangeEventHandler<HTMLSelectElement> = (
		e
	) => {
		const selectedChannelData = channels?.find(
			(channel) => channel.id === e.target.value
		);
		if (selectedChannelData) {
			setFormData({
				step: 2,
				data: {
					channel: selectedChannelData,
				},
			});
		}
	};
	const handleClickNext = () => setCurrentStep(3);

	return (
		<>
			<Grid gap={4}>
				<Text textAlign={{ md: 'center' }}>
					<FormattedMessage id="chooseServiceLabel" />
				</Text>
				<Skeleton isLoaded={!isLoading}>
					<Select
						id={`${id}-select-channel`}
						value={stepTwo?.channel.id ?? undefined}
						onChange={handleSelectChannel}
						placeholder={intl.formatMessage({
							id: 'chooseService',
						})}
					>
						{channels?.map(({ id, name }) => (
							<option
								value={id}
								key={id}
								id={`${id}-select-channel-option-${changeIntoIdFormat(
									name
								)}`}
							>
								{name}
							</option>
						))}
					</Select>
				</Skeleton>
			</Grid>

			<Spacer />

			<Button
				id={`${id}-continue-btn`}
				isDisabled={!stepTwo?.channel.id}
				onClick={handleClickNext}
			>
				<FormattedMessage id="continue" />
			</Button>
		</>
	);
};

export default SelectChannel;
