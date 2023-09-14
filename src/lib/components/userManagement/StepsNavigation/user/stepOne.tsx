import { Button, Flex, Spacer } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import ControlledInput from 'lib/components/shared/form/ControlledInput';
import { useUserManagement } from 'lib/store/userManagement';

import type { FormUsersProps } from './type';
import { userFormValidationSchema } from './validateForm';

type StepOneUserProps = {
	id?: string;
};

export const StepOneUser = ({ id }: StepOneUserProps) => {
	const intl = useIntl();
	const {
		register,
		handleSubmit,
		getValues,
		setValue,
		formState: { isDirty, isValid },
	} = useForm<FormUsersProps>({
		mode: 'onChange',
		resolver: yupResolver(userFormValidationSchema),
	});
	const { activeStep, setActiveSteps, setFormUser, formUser } =
		useUserManagement();

	const nextStep = () => {
		const values = getValues();
		setFormUser({ ...formUser, ...values });
		setActiveSteps(activeStep + 1);
	};

	useEffect(() => {
		if (formUser !== null) {
			setValue('email', formUser?.email ?? '', {
				shouldDirty: true,
				shouldValidate: true,
			});
			setValue('identifier', formUser?.identifier ?? '', {
				shouldDirty: true,
				shouldValidate: true,
			});
			setValue('mobilePhone', formUser?.mobilePhone ?? '', {
				shouldDirty: true,
				shouldValidate: true,
			});
			setValue('name', formUser?.name ?? '', {
				shouldDirty: true,
				shouldValidate: true,
			});
			setValue('nik', formUser?.nik ?? '', {
				shouldDirty: true,
				shouldValidate: true,
			});
		}
	}, [formUser, setValue]);

	return (
		<Flex
			mt={10}
			flexDir="column"
			gap={4}
		>
			<ControlledInput
				id={`${id}-step-1-form-input-name`}
				{...register('name')}
				label={intl.formatMessage({ id: 'nameKtp' })}
				type="text"
				// defaultValue={formUser?.name}
				placeholder={intl.formatMessage({ id: 'namePlaceholder' })}
				isRequired
			/>
			<ControlledInput
				id={`${id}-step-1-form-input-nik`}
				{...register('nik')}
				label={intl.formatMessage({ id: 'nik' })}
				type="text"
				placeholder={intl.formatMessage({ id: 'nikPlaceholder' })}
			/>
			<ControlledInput
				id={`${id}-step-1-form-input-user-id`}
				{...register('identifier')}
				label={intl.formatMessage({ id: 'userIdLoginLabel' })}
				type="text"
				isDisabled={formUser?.identifier !== undefined}
				placeholder={intl.formatMessage({
					id: 'userIdLoginPlaceholder',
				})}
				isRequired
			/>
			<ControlledInput
				id={`${id}-step-1-form-input-email`}
				{...register('email')}
				label={intl.formatMessage({ id: 'email' })}
				type="email"
				placeholder={intl.formatMessage({ id: 'emailPlaceholder' })}
				isRequired
			/>
			<ControlledInput
				id={`${id}-step-1-form-input-phone`}
				{...register('mobilePhone')}
				label={intl.formatMessage({ id: 'phone' })}
				type="text"
				placeholder={intl.formatMessage({ id: 'phonePlaceholder' })}
				isRequired
			/>
			<Spacer />
			<Button
				id={`${id}-step-1-next-btn`}
				w="full"
				borderColor="gray.400"
				rounded={0}
				isDisabled={!isDirty || !isValid}
				onClick={handleSubmit(nextStep)}
			>
				<FormattedMessage id="next" />
			</Button>
		</Flex>
	);
};
