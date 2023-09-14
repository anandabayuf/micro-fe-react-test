import en from './en.json';
import id from './id.json';

interface Locales {
  [key: string]: string;
}

export const errorMessages: { [locale: string]: Locales } = {
  id,
  en,
};
