import { Button, Grid, Spacer } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import shallow from 'zustand/shallow';

import ControlledInput from 'lib/components/shared/form/ControlledInput';
import { userAuthFormValidationSchema } from 'lib/components/sso/ConnectService/constants';
import { useChannels } from 'lib/components/sso/shared/hooks';
import { connectService } from 'lib/services/api/cxo/connectservice';
import type { ConnectServiceRequest } from 'lib/services/api/cxo/connectservice/types';
import type { UserAuthenticationForm } from 'lib/store/connectServiceForm';
import { useConnectServiceFormStore } from 'lib/store/connectServiceForm';

type UserAuthenticationProps = {
	id?: string;
};

const UserAuthentication = ({ id }: UserAuthenticationProps) => {
	const intl = useIntl();
	const { mutate } = useChannels();
	const [stepTwo, isLoading, setIsLoading, setCurrentStep, setFormData] =
		useConnectServiceFormStore(
			(state) => [
				state.stepTwo,
				state.isLoading,
				state.setIsLoading,
				state.setCurrentStep,
				state.setFormData,
			],
			shallow
		);
	const {
		register,
		handleSubmit,
		getValues,
		formState: { isDirty, isValid },
	} = useForm<UserAuthenticationForm>({
		mode: 'onChange',
		resolver: yupResolver(
			userAuthFormValidationSchema({
				needCorporateId: stepTwo?.channel.needcorporate ?? false,
			})
		),
	});

	const submitConnectRequest = async () => {
		const values = getValues();
		const connectRequestData: ConnectServiceRequest = {
			channelId: stepTwo?.channel.id ?? '',
			...values,
		};
		setIsLoading(true);
		await connectService(connectRequestData)
			.then(() => {
				setFormData({ step: 3, data: values });
				setCurrentStep(3);
				mutate();
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const handleSubmitRequest = () => {
		const values = getValues();
		if (isValid && stepTwo?.channel && values) {
			submitConnectRequest();
		}
	};

	return (
		<>
			<Grid gap={4}>
				{stepTwo?.channel.needcorporate && (
					<ControlledInput
						id={`${id}-input-corporate-id`}
						label={<FormattedMessage id="corpIdLoginLabel" />}
						placeholder={intl.formatMessage({
							id: 'corpIdLoginPlaceholder',
						})}
						{...register('corporateId')}
						isDisabled={isLoading}
					/>
				)}
				<ControlledInput
					id={`${id}-input-user-id`}
					label={<FormattedMessage id="userIdLoginLabel" />}
					placeholder={intl.formatMessage({
						id: 'userIdLoginPlaceholder',
					})}
					{...register('userId')}
					isDisabled={isLoading}
				/>
				<ControlledInput
					id={`${id}-input-password`}
					label={<FormattedMessage id="passwordLoginLabel" />}
					placeholder={intl.formatMessage({
						id: 'passwordLoginPlaceholder',
					})}
					type="password"
					{...register('password')}
					isDisabled={isLoading}
				/>
			</Grid>

			<Spacer />

			<Button
				id={`${id}-connect-btn`}
				isDisabled={!isDirty || !isValid || isLoading}
				isLoading={isLoading}
				onClick={handleSubmit(handleSubmitRequest)}
			>
				<FormattedMessage id="connect" />
			</Button>
		</>
	);
};

export default UserAuthentication;
