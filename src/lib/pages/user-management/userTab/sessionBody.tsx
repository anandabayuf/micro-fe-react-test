import { Flex, Text } from '@chakra-ui/react';

import type { GetUserSearchResponse } from 'lib/services/api/userManagement/user/getUserSearch/types';

interface SessionBodyProps {
  userData: GetUserSearchResponse['content'];
  cellSelect: number | 0;
}

export const SessionBody = ({ userData, cellSelect }: SessionBodyProps) => {
  return (
    <Flex gap={2} flexDir="column">
      <Flex justify="space-between">
        <Text fontWeight={700} fontSize={18}>
          {userData ? userData[cellSelect]?.userId : ''}
        </Text>
      </Flex>
      <Flex gap="2">
        <Text fontWeight={700} fontSize={16}>
          {userData ? userData[cellSelect]?.name : ''}
        </Text>
        <Text fontWeight={400} fontSize={16} color="gray.400">
          {userData ? userData[cellSelect]?.role : ''}
        </Text>
      </Flex>
    </Flex>
  );
};
