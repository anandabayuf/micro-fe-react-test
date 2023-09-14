import type {
	InputAddonProps,
	InputElementProps,
	InputProps,
} from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';

import type { FormControlWrapperProps } from 'lib/components/shared/form/FormControlWrapper';
import FormControlWrapper from 'lib/components/shared/form/FormControlWrapper';

export type ControlledInputProps = {
	leftElement?: InputElementProps['children'];
	leftAddon?: InputAddonProps['children'];
	rightElement?: InputElementProps['children'];
	rightAddon?: InputAddonProps['children'];
} & FormControlWrapperProps &
	InputProps;

const ControlledInput = forwardRef(
	(
		{
			label,
			errorText,
			errorTextColor,
			helperText,
			helperTextColor,
			isInvalid,
			isRequired,
			id,
			...inputProps
		}: ControlledInputProps,
		ref: ForwardedRef<HTMLInputElement>
	) => {
		return (
			<FormControlWrapper
				label={label}
				errorText={errorText}
				errorTextColor={errorTextColor}
				helperText={helperText}
				helperTextColor={helperTextColor}
				isInvalid={isInvalid}
				isRequired={isRequired}
			>
				<Input
					id={id}
					ref={ref}
					focusBorderColor="orange.500"
					borderColor="orange.100"
					_hover={{
						borderColor: 'orange.100',
					}}
					{...inputProps}
					isRequired={isRequired}
				/>
			</FormControlWrapper>
		);
	}
);

export default ControlledInput;
