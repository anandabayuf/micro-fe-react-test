import { Button, Grid, VStack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import ControlledInput from 'lib/components/shared/form/ControlledInput';
import { APP_ASSETS_URL } from 'lib/constants/env';
import { forgotPassword } from 'lib/services/api/auth/forgotpassword';
import type { ForgotPasswordRequest } from 'lib/services/api/auth/forgotpassword/types';
import { useAlert } from 'lib/store/alert';

import { forgotPasswordFormValidationSchema } from './constants';

const ForgotPasswordForm = () => {
	const intl = useIntl();
	const setAlert = useAlert((state) => state.setAlert);
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const {
		register,
		handleSubmit,
		getValues,
		formState: { isDirty, isValid },
	} = useForm<ForgotPasswordRequest>({
		resolver: yupResolver(forgotPasswordFormValidationSchema),
		mode: 'onChange',
	});

	const sendResetPasswordRequest = async () => {
		const values = getValues();
		setIsLoading(true);
		await forgotPassword(values)
			.then(() => {
				setAlert({
					title: 'Silahkan cek inbox email Anda.',
					status: 'success',
					iconPath: `./${APP_ASSETS_URL}/images/icons/request_change_password.png`,
				});
				navigate('/login');
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const validateAndSendRequest = async () => {
		const values = getValues();
		if (isValid && values) {
			sendResetPasswordRequest();
		}
	};

	return (
		<VStack spacing={8}>
			<Grid
				width="full"
				gap={4}
			>
				<ControlledInput
					id="forgot-password-form-input-corporate-id"
					{...register('corporateId')}
					isDisabled={isLoading}
					label={intl.formatMessage({ id: 'corpIdLoginLabel' })}
					placeholder={intl.formatMessage({
						id: 'corpIdLoginPlaceholder',
					})}
				/>
				<ControlledInput
					id="forgot-password-form-input-user-id"
					{...register('identifier')}
					isDisabled={isLoading}
					label={intl.formatMessage({ id: 'userIdLoginLabel' })}
					placeholder={intl.formatMessage({
						id: 'userIdLoginPlaceholder',
					})}
				/>
				<ControlledInput
					id="forgot-password-form-input-email"
					{...register('email')}
					isDisabled={isLoading}
					label={intl.formatMessage({ id: 'email' })}
					placeholder={intl.formatMessage({ id: 'emailPlaceholder' })}
				/>
			</Grid>

			<Button
				id="forgot-password-reset-password-btn"
				width="full"
				color="white"
				isDisabled={!isDirty || !isValid || isLoading}
				_hover={{ backgroundColor: 'gray.600' }}
				onClick={handleSubmit(validateAndSendRequest)}
				isLoading={isLoading}
			>
				<FormattedMessage id="resetPassword" />
			</Button>
		</VStack>
	);
};

export default ForgotPasswordForm;
