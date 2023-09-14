import * as yup from 'yup';

import type { ForgotPasswordRequest } from 'lib/services/api/auth/forgotpassword/types';

export const forgotPasswordFormValidationSchema: yup.SchemaOf<ForgotPasswordRequest> =
  yup.object({
    email: yup.string().required(),
    identifier: yup.string().required(),
    corporateId: yup.string().required(),
  });
