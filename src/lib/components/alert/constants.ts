import type { Status } from "@chakra-ui/react";

import { APP_ASSETS_URL } from "lib/constants/env";

export const statusIcon: Record<Status, string | undefined> = {
  success: `./${APP_ASSETS_URL}/images/icons/success.png`,
  warning: `./${APP_ASSETS_URL}/images/icons/warning.png`,
  error: `./${APP_ASSETS_URL}/images/icons/warning.png`,
  default: `./${APP_ASSETS_URL}/images/icons/success.png`,
  info: undefined,
  loading: undefined,
};
