import * as yup from 'yup';

import type { LoginRequest } from 'lib/services/api/auth/login/types';

export const loginFormValidationSchema: yup.SchemaOf<LoginRequest> = yup.object(
  {
    companyId: yup.string().required(),
    username: yup.string().required(),
    password: yup.string().required(),
    captcha: yup.string().optional(),
  }
);
