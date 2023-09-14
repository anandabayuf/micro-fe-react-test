import { Flex, Text } from '@chakra-ui/react';
import { FormattedMessage } from 'react-intl';

import type { GetUserSearchResponse } from 'lib/services/api/userManagement/user/getUserSearch/types';

interface DeleteBodyProps {
  userData: GetUserSearchResponse['content'];
  cellSelect: number | 0;
}

export const DeleteBody = ({ userData, cellSelect }: DeleteBodyProps) => {
  return (
    <Flex gap={6} flexDir="column">
      <Flex justify="space-between">
        <Text color="gray.500" fontWeight={400} fontSize={16}>
          <FormattedMessage id="role" />
        </Text>
        <Text fontWeight={700} fontSize={16}>
          {userData ? userData[cellSelect]?.role : ''}
        </Text>
      </Flex>
      <Flex justify="space-between">
        <Text color="gray.500" fontWeight={400} fontSize={16}>
          <FormattedMessage id="userIdLoginLabel" />
        </Text>
        <Text fontWeight={700} fontSize={16}>
          {userData ? userData[cellSelect]?.userId : ''}
        </Text>
      </Flex>
      <Flex justify="space-between">
        <Text color="gray.500" fontWeight={400} fontSize={16}>
          <FormattedMessage id="corpIdLoginLabel" />
        </Text>
        <Text fontWeight={700} fontSize={16}>
          {userData ? userData[cellSelect]?.corporateId : ''}
        </Text>
      </Flex>
      <Flex justify="space-between">
        <Text color="gray.500" fontWeight={400} fontSize={16}>
          <FormattedMessage id="email" />
        </Text>
        <Text fontWeight={700} fontSize={16}>
          {userData ? userData[cellSelect]?.email : ''}
        </Text>
      </Flex>
      <Flex justify="space-between">
        <Text color="gray.500" fontWeight={400} fontSize={16}>
          <FormattedMessage id="phone" />
        </Text>
        <Text fontWeight={700} fontSize={16}>
          {userData ? userData[cellSelect]?.corporateId : ''}
        </Text>
      </Flex>
    </Flex>
  );
};
