import type { ComponentMeta, ComponentStory } from '@storybook/react';

import WeightedChart from './index';

export default {
  title: 'Components/WeightedChart',
  component: WeightedChart,
  argTypes: {},
} as ComponentMeta<typeof WeightedChart>;

const Template: ComponentStory<typeof WeightedChart> = (props) => (
  <WeightedChart {...props} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Available Balance',
  datasets: [
    {
      title: 'Current Account',
      weight: 25,
    },
    {
      title: 'Savings Account',
      weight: 25,
    },
    {
      title: 'Fixed Deposit',
      weight: 25,
    },
    {
      title: 'Custody Account',
      weight: 25,
    },
  ],
};
