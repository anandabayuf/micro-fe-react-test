import { Button, Flex } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import ControlledInput from 'lib/components/shared/form/ControlledInput';
import { useUserManagement } from 'lib/store/userManagement';

import type { FormGroupProps } from './type';
import { userFormValidationSchema } from './validateForm';

type StepOneRoleProps = {
	id?: string;
};

export const StepOneRole = ({ id }: StepOneRoleProps) => {
	const intl = useIntl();
	const {
		register,
		handleSubmit,
		getValues,
		setValue,
		formState: { isDirty, isValid },
	} = useForm<FormGroupProps>({
		mode: 'onChange',
		resolver: yupResolver(userFormValidationSchema),
	});

	const { activeStep, setActiveSteps, setFormGroup, formGroup } =
		useUserManagement();

	const nextStep = () => {
		const values = getValues();
		setFormGroup({ ...formGroup, ...values });
		setActiveSteps(activeStep + 1);
	};

	useEffect(() => {
		if (formGroup !== null) {
			setValue('name', formGroup?.name ?? '', {
				shouldDirty: true,
				shouldValidate: true,
			});
			setValue('code', formGroup?.code ?? '', {
				shouldDirty: true,
				shouldValidate: true,
			});
		}
	}, [formGroup, setValue]);

	return (
		<Flex
			mt={10}
			flexDir="column"
			gap={4}
		>
			<ControlledInput
				id={`${id}-step-1-form-input-group-id`}
				{...register('code')}
				label={intl.formatMessage({ id: 'groupId' })}
				type="text"
				isDisabled={formGroup?.code !== ''}
				placeholder={intl.formatMessage({ id: 'groupIdPlaceholder' })}
			/>
			<ControlledInput
				id={`${id}-step-1-form-input-group-name`}
				{...register('name')}
				label={intl.formatMessage({ id: 'group' })}
				type="text"
				placeholder={intl.formatMessage({ id: 'groupPlaceholder' })}
			/>
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
