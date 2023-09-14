import { StepsStyleConfig } from 'chakra-ui-steps';

const orangeLight = 'orange.100';
const orangeDefault = 'orange.500';

export const CustomSteps: typeof StepsStyleConfig = {
  ...StepsStyleConfig,
  baseStyle: (props) => {
    return {
      ...StepsStyleConfig.baseStyle(props),
      stepIconContainer: {
        ...StepsStyleConfig.baseStyle(props).stepIconContainer,
        backgroundColor: 'white',
        fontFamily: 'Lato, sans-serif',
        borderColor: orangeLight,
        color: 'gray.400',
        _highlighted: {
          backgroundColor: orangeDefault,
          border: 'none',
        },
        _activeStep: {
          borderColor: 'none',
          backgroundColor: orangeLight,
          color: orangeDefault,
        },
      },
      iconLabel: {
        ...StepsStyleConfig.baseStyle(props).iconLabel,
        fontWeight: 'bold',
      },
      label: {
        ...StepsStyleConfig.baseStyle(props).label,
        color: 'none',
      },
      connector: {
        ...StepsStyleConfig.baseStyle(props).connector,
        borderColor: orangeLight,
        _highlighted: {
          borderColor: orangeLight,
        },
      },
    };
  },
};
