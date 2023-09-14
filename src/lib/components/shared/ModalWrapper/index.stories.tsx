import { useState } from 'react';
import { Heading } from '@chakra-ui/react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import ModalWrapper from './index';

export default {
  title: 'Components/Modal',
  component: ModalWrapper,
  argTypes: {},
} as ComponentMeta<typeof ModalWrapper>;

const Template: ComponentStory<typeof ModalWrapper> = (props) => {
  const [open, setOpen] = useState(true);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return <ModalWrapper {...props} isOpen={open} onClose={toggleOpen} />;
};

export const Default = Template.bind({});
Default.args = {
  header: (
    <Heading fontSize="lg" textAlign="center">
      Modal Title
    </Heading>
  ),
  body: 'This is a modal',
};
