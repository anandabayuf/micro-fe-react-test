import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import PageTitle from './index';

export default {
  title: 'Components/PageTitle',
  component: PageTitle,
  argTypes: {},
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = (props) => (
  <BrowserRouter>
    <PageTitle {...props} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Page Title',
};
