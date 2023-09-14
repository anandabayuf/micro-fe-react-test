import { Button, Grid, Spacer } from '@chakra-ui/react';
import * as React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import ControlledInput from 'lib/components/shared/form/ControlledInput';
import { APP_ASSETS_URL } from 'lib/constants/env';
import { changePassword } from 'lib/services/api/auth/changepassword';
import { useAlert } from 'lib/store/alert';

import PasswordCheck from './components/PasswordCheck';
import { usePasswordForm } from './hooks';

const ChangePasswordForm = () => {
	const intl = useIntl();
	const navigate = useNavigate();
	const setAlert = useAlert((state) => state.setAlert);
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const {
		passwordCheckState,
		isDirty,
		isValid,
		getValues,
		reset,
		register,
		handleSubmit,
	} = usePasswordForm();

	const requestChangePassword = async () => {
		const values = getValues();
		setIsLoading(true);
		await changePassword(values)
			.then(() => {
				reset();
				setAlert({
					title: intl.formatMessage({ id: 'changePasswordSuccess' }),
					status: 'success',
					iconPath: `./${APP_ASSETS_URL}/images/icons/new_password.png`,
				});
				navigate('/');
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const handleClick = () => {
		const values = getValues();
		if (values && isValid) {
			requestChangePassword();
		}
	};

	return (
		<Grid gap={4}>
			<ControlledInput
				id="change-password-form-input-current-password"
				{...register('oldPassword')}
				label={intl.formatMessage({ id: 'currentPassword' })}
				type="password"
				placeholder={intl.formatMessage({
					id: 'currentPasswordPlaceholder',
				})}
				isDisabled={isLoading}
			/>
			<PasswordCheck passwordCheckState={passwordCheckState} />

			<ControlledInput
				id="change-password-form-input-new-password"
				{...register('newPassword')}
				label={intl.formatMessage({ id: 'newPassword' })}
				type="password"
				placeholder={intl.formatMessage({
					id: 'newPasswordPlaceholder',
				})}
				isDisabled={isLoading}
			/>
			<ControlledInput
				id="change-password-form-input-repeat-password"
				{...register('confirmNewPassword')}
				label={intl.formatMessage({ id: 'repeatPassword' })}
				type="password"
				placeholder={intl.formatMessage({
					id: 'repeatPasswordPlaceholder',
				})}
				isDisabled={isLoading}
			/>

			<Spacer height={2} />
			<Button
				id="change-password-btn"
				width="full"
				onClick={handleSubmit(handleClick)}
				isDisabled={!isDirty || !isValid || isLoading}
				isLoading={isLoading}
			>
				<FormattedMessage id="changePassword" />
			</Button>
		</Grid>
	);
};

export default ChangePasswordForm;
