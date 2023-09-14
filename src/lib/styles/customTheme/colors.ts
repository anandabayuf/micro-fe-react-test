import type { DeepPartial, Theme } from '@chakra-ui/react';

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme['colors']['blackAlpha']>
> = {
  brand: {
    100: '#FCECE2',
  },
  supportingRed: {
    100: '#FFF0F0',
    500: '#E50000',
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {
  gray: {
    50: '#FAFAFA',
    100: '#F0F0F0',
    200: '#E6E6E6',
    300: '#CCCCCC',
    400: '#B3B3B3',
    500: '#999999',
    600: '#808080',
    700: '#666666',
    800: '#4D4D4D',
    900: '#292929',
  },
  orange: {
    50: '#FFF6F2',
    100: '#FAD2BB',
    200: '#F5A77A',
    300: '#F08D54',
    400: '#EB742F',
    500: '#E55300',
    600: '#B34200',
    700: '#802F00',
    800: '#4D1B00',
  },
  teal: {
    50: '#F2FDFF',
    100: '#9BD4DE',
    200: '#62B5C4',
    300: '#2B98AB',
    400: '#1C8091',
    500: '#006677',
    600: '#00505E',
    700: '#003A45',
    800: '#00262E',
  },
};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};
