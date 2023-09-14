import { Flex, Icon, Text } from '@chakra-ui/react';
import { FiCheck } from 'react-icons/fi';

type PasswordCheckItemProps = {
  label: string;
  isFulfilled: boolean;
};

const grayDefault = 'gray.500';

const PasswordCheckItem = ({ label, isFulfilled }: PasswordCheckItemProps) => {
  return (
    <Flex gap={2} alignItems="center">
      <Icon
        as={FiCheck}
        borderRadius="full"
        borderColor={isFulfilled ? 'none' : grayDefault}
        borderWidth={isFulfilled ? 'none' : 1}
        boxSize={4}
        padding={0.5}
        backgroundColor={isFulfilled ? 'teal.500' : undefined}
        color={isFulfilled ? 'white' : grayDefault}
      />
      <Text color={isFulfilled ? 'teal.500' : grayDefault} fontSize="sm">
        {label}
      </Text>
    </Flex>
  );
};

export default PasswordCheckItem;
