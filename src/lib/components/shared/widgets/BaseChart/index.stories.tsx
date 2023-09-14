import { faker } from '@faker-js/faker';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import BaseChart from './index';

export default {
  title: 'Components/BaseChart',
  component: BaseChart,
  argTypes: {},
} as ComponentMeta<typeof BaseChart>;

const Template: ComponentStory<typeof BaseChart> = (props) => (
  <BaseChart {...props} />
);

const trendCashFlowLabels = [
  'Jan-Feb',
  'Mar-Apr',
  'Mei-Jun',
  'Jul-Aug',
  'Sep-Oct',
  'Nov-Dec',
];

export const Line = Template.bind({});
Line.args = {
  labels: trendCashFlowLabels,
  inDatasets: trendCashFlowLabels.map(() =>
    faker.datatype.number({ min: 0, max: 500 })
  ),
  outDatasets: trendCashFlowLabels.map(() =>
    faker.datatype.number({ min: 0, max: 500 })
  ),
};

export const Bar = Template.bind({});
Bar.args = {
  labels: trendCashFlowLabels,
  chartType: 'bar',
  inDatasets: trendCashFlowLabels.map(() =>
    faker.datatype.number({ min: 0, max: 500 })
  ),
  outDatasets: trendCashFlowLabels.map(() =>
    faker.datatype.number({ min: 0, max: 500 })
  ),
};
