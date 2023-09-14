import { Box } from '@chakra-ui/react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import ControlledInput from './index';

export default {
  title: 'Components/Input',
  component: ControlledInput,
  argTypes: {},
} as ComponentMeta<typeof ControlledInput>;

const Template: ComponentStory<typeof ControlledInput> = (props) => (
  <Box width="50%">
    <ControlledInput {...props} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  placeholder: 'some text',
  size: 'md',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Label1',
  type: 'text',
  placeholder: 'some text',
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  label: 'Label2',
  type: 'text',
  placeholder: 'some text',
  helperText: 'some help descriptions',
};
