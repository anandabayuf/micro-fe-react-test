import type { ComponentMeta, ComponentStory } from '@storybook/react';

import ResponsiveTable from './index';

export default {
  title: 'Components/ResponsiveTable',
  component: ResponsiveTable,
  argTypes: {},
} as ComponentMeta<typeof ResponsiveTable>;

const Template: ComponentStory<typeof ResponsiveTable> = (props) => (
  <ResponsiveTable {...props} />
);

const tableHeaders = ['currentAccount', 'savingsAccount', 'depositAccount'];
const datasets = [
  {
    currency: 'IDR',
    currentAccount: '100.000.000',
    savingsAccount: '10.000.000',
    depositAccount: '90.000.000',
  },
  {
    currency: 'USD',
    currentAccount: null,
    savingsAccount: null,
    depositAccount: '45.000',
  },
  {
    currency: 'EUR',
    currentAccount: null,
    savingsAccount: null,
    depositAccount: '21.000',
  },
  {
    currency: 'HKD',
    currentAccount: null,
    savingsAccount: null,
    depositAccount: '35.000.000',
  },
  {
    currency: 'JPY',
    currentAccount: '10.000.000',
    savingsAccount: null,
    depositAccount: '15.000.000',
  },
];

export const Default = Template.bind({});
Default.args = {
  tableHeaders,
  datasets,
};
