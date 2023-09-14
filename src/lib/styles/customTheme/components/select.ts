import type { DeepPartial, Theme } from '@chakra-ui/react';

const defaultOrange = 'orange.500';

export const Select: DeepPartial<Theme['components']['Select']> = {
  defaultProps: {
    variant: 'outline',
  },
  variants: {
    outline: {
      field: {
        borderColor: defaultOrange,
        background: 'white',
        _hover: {
          borderColor: defaultOrange,
        },
      },
    },
  },
};
