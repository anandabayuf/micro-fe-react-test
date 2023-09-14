import type { ComponentMeta, ComponentStory } from '@storybook/react';

import GridList from './index';

export default {
  title: 'Components/GridList',
  component: GridList,
  argTypes: {},
} as ComponentMeta<typeof GridList>;

const Template: ComponentStory<typeof GridList> = (props) => (
  <GridList {...props} />
);

export const Default = Template.bind({});
Default.args = {
  datasets: [
    {
      name: 'All Companies Asset',
      amount: '1,000,000,000.00',
    },
    {
      name: 'Total Loan',
      amount: '1,100,000,000.00',
    },
    {
      name: 'Available Limit',
      amount: '750,000,000.00',
    },
  ],
};
