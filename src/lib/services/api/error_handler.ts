import type { UseToastOptions } from "@chakra-ui/react";
import { createStandaloneToast } from "@chakra-ui/react";

import { useAuth } from "lib/store/auth";
import { useLocale } from "lib/store/locale";
import { systemLang } from "lib/utils/i18n";

import { errorMessages } from "./error_messages_locales";
import type { APIError } from "./types";

const { clearAuth } = useAuth.getState();
const { toast } = createStandaloneToast();

const unauthorizedToastId = "unauthorized-toast";
const errorToastId = "error-toast";

const errorToastOptions: UseToastOptions = {
  variant: "top-accent",
  position: "top",
  status: "error",
  duration: 8000,
  isClosable: true,
};

export const fetchErrorHandler = (error: APIError) => {
  const { locale } = useLocale.getState();
  const activeLocale = locale || systemLang;
  const errResponse = error.response?.data.message || "";
  const combinedErrResponseWithModuleName = error.response?.data?.moduleName
    ? `${error.response?.data?.moduleName}.${errResponse}`
    : errResponse;

  if (error.response?.status === 401 && errResponse) {
    clearAuth();
    if (!toast.isActive(unauthorizedToastId)) {
      toast({
        ...errorToastOptions,
        id: unauthorizedToastId,
        description:
          errorMessages[activeLocale][combinedErrResponseWithModuleName] ??
          combinedErrResponseWithModuleName,
      });
    }
    return;
  }

  if (error.response?.data.message && !toast.isActive(errorToastId)) {
    toast({
      id: errorToastId,
      ...errorToastOptions,
      description:
        errorMessages[activeLocale][combinedErrResponseWithModuleName] ??
        combinedErrResponseWithModuleName,
    });
  }
};
