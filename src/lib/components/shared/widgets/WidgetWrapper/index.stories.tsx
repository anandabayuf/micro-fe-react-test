import { Text } from '@chakra-ui/react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import WidgetWrapper from './index';

export default {
  title: 'Components/WidgetWrapper',
  component: WidgetWrapper,
  argTypes: {},
} as ComponentMeta<typeof WidgetWrapper>;

const Template: ComponentStory<typeof WidgetWrapper> = (props) => (
  <BrowserRouter>
    <WidgetWrapper {...props} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Widget Wrapper',
  href: '/',
  children: <Text>Widget Content</Text>,
};
