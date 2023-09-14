import { Box, Flex, Text } from '@chakra-ui/react';
import { FormattedMessage } from 'react-intl';

import type { UserGroupModel } from 'lib/services/api/userManagement/group/getUserGroup/types';

interface DeleteProps {
  userManagementGroups: UserGroupModel[];
  cellDelete: number;
}

const DeleteBody = ({ userManagementGroups, cellDelete }: DeleteProps) => {
  return (
    <Box>
      <Flex justify="space-between">
        <Text color="gray.500" fontWeight={400} fontSize={16}>
          <FormattedMessage id="group" />
        </Text>
        <Text fontWeight={700} fontSize={16}>
          {userManagementGroups
            ? userManagementGroups[cellDelete ?? 0].name
            : ''}
        </Text>
      </Flex>
      <Box mt={4}>
        <Text color="gray.500" fontWeight={400} fontSize={16}>
          <FormattedMessage id="menu" />
        </Text>
        <Flex flexWrap="wrap" mt={3}>
          {userManagementGroups
            ? userManagementGroups[cellDelete ?? 0].details.menuList.map(
                (item) => (
                  <Box
                    key={item.id}
                    backgroundColor="white"
                    color="orange.500"
                    borderWidth={1}
                    borderColor="orange.500"
                    borderRadius={4}
                    mr={1}
                    px={2}
                    py={1}
                    my={1}
                  >
                    <Text fontSize={12}>
                      {item.name} {item.viewOnly && ' (Read-Only)'}
                    </Text>
                  </Box>
                )
              )
            : ''}
        </Flex>
      </Box>
    </Box>
  );
};

export default DeleteBody;
