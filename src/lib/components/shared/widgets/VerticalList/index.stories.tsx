import type { ComponentMeta, ComponentStory } from '@storybook/react';

import VerticalList from './index';

export default {
  title: 'Components/VerticalList',
  component: VerticalList,
  argTypes: {},
} as ComponentMeta<typeof VerticalList>;

const Template: ComponentStory<typeof VerticalList> = (props) => (
  <VerticalList {...props} />
);

export const Default = Template.bind({});
Default.args = {
  datasets: [
    {
      name: 'IDR',
      amount: '200.000.000',
    },
    {
      name: 'USD',
      amount: '45.000',
    },
    {
      name: 'EUR',
      amount: '21.000',
    },
    {
      name: 'HKD',
      amount: '35.000.000',
    },
    {
      name: 'JPY',
      amount: '25.000.000',
    },
  ],
  title: 'Total Assets',
  total: '3,000,000,000',
};
