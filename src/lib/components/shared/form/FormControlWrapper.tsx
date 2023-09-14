import type {
  FormControlProps,
  FormErrorMessageProps,
  FormLabelProps,
  HelpTextProps,
} from '@chakra-ui/react';
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/react';
import type { ReactNode } from 'react';

export type FormControlWrapperProps = {
  label?: FormLabelProps['children'];
  errorText?: FormErrorMessageProps['children'];
  errorTextColor?: FormErrorMessageProps['color'];
  helperText?: HelpTextProps['children'];
  helperTextColor?: HelpTextProps['color'];
  children?: ReactNode;
} & Pick<FormControlProps, 'isInvalid' | 'isRequired'>;

const FormControlWrapper = ({
  label,
  errorText,
  errorTextColor,
  helperText,
  helperTextColor,
  isInvalid,
  isRequired,
  children,
}: FormControlWrapperProps) => {
  return (
    <FormControl isInvalid={isInvalid} isRequired={isRequired}>
      <Flex alignItems="start">
        {label && <FormLabel fontWeight="bold">{label}</FormLabel>}
      </Flex>

      {children}

      {errorText && (
        <FormErrorMessage color={errorTextColor}>{errorText}</FormErrorMessage>
      )}
      {helperText && (
        <FormHelperText color={helperTextColor}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

export default FormControlWrapper;
