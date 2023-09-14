import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import type { ChangePasswordRequest } from 'lib/services/api/auth/changepassword/types';

import {
  changePasswordFormValidationSchema,
  haveCapitalRegex,
  haveLowercaseRegex,
  haveNumberRegex,
  MAXIMUM_PASSWORD_LENGTH,
  MINIMUM_PASSWORD_LENGTH,
  specialCharRegex,
} from './constants';
import type { NewPasswordCheck } from './types';

export const usePasswordForm = () => {
  const {
    register,
    watch,
    getValues,
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
  } = useForm<ChangePasswordRequest>({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
    mode: 'onChange',
    resolver: yupResolver(changePasswordFormValidationSchema),
  });
  const newPassword = watch('newPassword');

  const isCapitalExist = React.useMemo(
    () => haveCapitalRegex.test(newPassword),
    [newPassword]
  );
  const isLowerCaseExist = React.useMemo(
    () => haveLowercaseRegex.test(newPassword),
    [newPassword]
  );
  const isNumberExist = React.useMemo(
    () => haveNumberRegex.test(newPassword),
    [newPassword]
  );
  const isSpecialCharExist = React.useMemo(
    () => specialCharRegex.test(newPassword),
    [newPassword]
  );
  const isAboveMinimum = React.useMemo(
    () => newPassword.length >= MINIMUM_PASSWORD_LENGTH,
    [newPassword]
  );
  const isBelowMaximum = React.useMemo(
    () => newPassword.length <= MAXIMUM_PASSWORD_LENGTH,
    [newPassword]
  );
  const isNewPasswordValid = React.useMemo(
    () =>
      isCapitalExist &&
      isLowerCaseExist &&
      isNumberExist &&
      isSpecialCharExist &&
      isAboveMinimum &&
      isBelowMaximum,
    [
      isAboveMinimum,
      isBelowMaximum,
      isCapitalExist,
      isLowerCaseExist,
      isNumberExist,
      isSpecialCharExist,
    ]
  );

  const passwordCheckState: NewPasswordCheck = React.useMemo(
    () => ({
      isCapitalExist,
      isLowerCaseExist,
      isNumberExist,
      isSpecialCharExist,
      isAboveMinimum,
      isBelowMaximum,
    }),
    [
      isAboveMinimum,
      isBelowMaximum,
      isCapitalExist,
      isLowerCaseExist,
      isNumberExist,
      isSpecialCharExist,
    ]
  );

  return {
    register,
    getValues,
    handleSubmit,
    watch,
    reset,
    passwordCheckState,
    isDirty,
    isValid: isValid && isNewPasswordValid,
  };
};
