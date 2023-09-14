import { useLocale } from "lib/store/locale";
import English from "lib/locales/en.json";
import Indonesia from "lib/locales/id.json";
import { createIntl, createIntlCache, defineMessage } from "react-intl";

export const defaultLang = "en";

export const supportedLangs = {
  en: "English",
  id: "Indonesia",
};

const stripCountry = (lang: string) => {
  return lang.trim().replace("_", "-").split("-")[0];
};

export const getUserLang = (acceptedLangs: readonly string[]) => {
  const acceptedLangCodes = acceptedLangs.map(stripCountry);
  const supportedLangCodes = Object.keys(supportedLangs);
  const matchingLangCode = acceptedLangCodes.find((code) =>
    supportedLangCodes.includes(code)
  );
  return matchingLangCode || defaultLang;
};

export const systemLang = getUserLang(navigator.languages || []);

export const formattedMessage = (id: string, defaultMessage: string) => {
  try {
    const cache = createIntlCache();

    const locale: string = useLocale.getState().locale || defaultLang;
    const lang = locale === "id" ? Indonesia : English;

    const useIntl = createIntl(
      {
        locale: locale,
        messages: lang,
      },
      cache
    );

    return useIntl.formatMessage(defineMessage({ id, defaultMessage }));
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("something wrong while parsing intl");
    }
  }
};
