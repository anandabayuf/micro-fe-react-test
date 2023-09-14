import type { DeepPartial, Theme } from '@chakra-ui/react';

export const Input: DeepPartial<Theme['components']['Input']> = {
  defaultProps: {
    variant: 'outline',
  },
  variants: {
    outline: {
      borderColor: 'orange.100',
      focusBorderColor: 'orange.500',
    },
  },
};
