import * as yup from 'yup';

import type { FormGroupProps } from './type';

export const userFormValidationSchema: yup.SchemaOf<FormGroupProps> =
  yup.object({
    name: yup.string().required(),
    id: yup.string(),
    code: yup.string().required(),
  });
