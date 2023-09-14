import en from './en.json';
import id from './id.json';

interface Locales {
  [key: string]: string;
}

const locales: { [key: string]: Locales } = {
  id,
  en,
};

export default locales;
