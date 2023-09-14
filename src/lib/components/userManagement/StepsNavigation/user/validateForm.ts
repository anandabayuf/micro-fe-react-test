import * as yup from 'yup';

import type { FormUsersProps } from './type';

export const userFormValidationSchema: yup.SchemaOf<FormUsersProps> =
  yup.object({
    email: yup.string().email().required(),
    identifier: yup.string().required(),
    mobilePhone: yup.string().required(),
    name: yup.string().required(),
    nik: yup.string(),
  });
