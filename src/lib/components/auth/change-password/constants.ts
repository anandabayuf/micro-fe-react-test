import * as yup from 'yup';

import type { ChangePasswordRequest } from 'lib/services/api/auth/changepassword/types';

export const changePasswordFormValidationSchema: yup.SchemaOf<ChangePasswordRequest> =
  yup.object({
    oldPassword: yup.string().required(),
    newPassword: yup.string().required(),
    confirmNewPassword: yup
      .string()
      .required()
      .oneOf([yup.ref('newPassword')]),
  });

export const haveCapitalRegex = /[A-Z]+/;
export const haveLowercaseRegex = /[a-z]+/;
export const haveNumberRegex = /[0-9]+/;
export const specialCharRegex = /[~`¿¡!#$%^&*€£@+÷=\-[\]\\';,/{}()|\\":<>?._]+/;

export const MINIMUM_PASSWORD_LENGTH = 8;
export const MAXIMUM_PASSWORD_LENGTH = 14;
