import { Text } from '@chakra-ui/react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import MenuWrapper from './index';

export default {
  title: 'Components/Menu',
  component: MenuWrapper,
  argTypes: {},
} as ComponentMeta<typeof MenuWrapper>;

const Template: ComponentStory<typeof MenuWrapper> = (props) => (
  <BrowserRouter>
    <MenuWrapper {...props} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  button: <Text>Menu</Text>,
  items: [
    {
      title: 'Home',
    },
  ],
};
