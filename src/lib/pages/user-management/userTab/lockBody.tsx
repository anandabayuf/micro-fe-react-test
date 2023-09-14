import { Flex, Text } from '@chakra-ui/react';

import type { GetUserSearchResponse } from 'lib/services/api/userManagement/user/getUserSearch/types';

interface LockBodyProps {
  userData: GetUserSearchResponse['content'];
  cellSelect: number | null;
}

export const LockBody = ({ userData, cellSelect }: LockBodyProps) => {
  const cellSelected = cellSelect ?? 0;
  return (
    <Flex gap={2} flexDir="column">
      <Flex justify="space-between">
        <Text fontWeight={700} fontSize={18}>
          {userData ? userData[cellSelected]?.userId : ''}
        </Text>
      </Flex>
      <Flex gap="2">
        <Text fontWeight={700} fontSize={16}>
          {userData ? userData[cellSelected]?.name : ''}
        </Text>
        <Text fontWeight={400} fontSize={16} color="gray.400">
          {userData ? userData[cellSelected]?.role : ''}
        </Text>
      </Flex>
    </Flex>
  );
};
