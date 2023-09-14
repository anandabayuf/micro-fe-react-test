import type { DeepPartial, Theme } from '@chakra-ui/react';

const baseColor = 'orange.500';
const hoveredDarkerColor = 'orange.600';
const hoveredLighterColor = 'orange.100';

export const Button: DeepPartial<Theme['components']['Button']> = {
  variants: {
    solid: {
      backgroundColor: baseColor,
      boxShadow: '0px 8px 16px -8px #FCECE2',
      color: 'white',
      borderRadius: 8,
      _hover: {
        backgroundColor: hoveredDarkerColor,
      },
      _focus: {
        backgroundColor: hoveredDarkerColor,
      },
      _disabled: {
        _hover: {
          backgroundColor: hoveredDarkerColor,
        },
      },
    },
    outline: {
      borderRadius: 8,
      borderColor: baseColor,
      color: baseColor,
      _hover: {
        backgroundColor: hoveredLighterColor,
      },
      _focus: {
        backgroundColor: hoveredLighterColor,
      },
    },
    ghost: {
      color: 'orange.500',
      borderRadius: 8,
      _hover: {
        backgroundColor: hoveredLighterColor,
      },
      _focus: {
        backgroundColor: hoveredLighterColor,
      },
    },
  },
};
