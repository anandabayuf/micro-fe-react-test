import { Flex, Grid, Heading, VStack } from '@chakra-ui/react';
import { FormattedMessage } from 'react-intl';

import ChangePasswordForm from 'lib/components/auth/change-password';

const ChangePasswordPage = () => {
  return (
    <Flex
      py={8}
      justifyContent="center"
      alignItems="center"
      minHeight={{ md: '80vh' }}
      width="full"
    >
      <VStack
        spacing={{ base: 4, md: 8 }}
        alignItems="start"
        width={{ base: 'full', md: 'initial' }}
      >
        <Heading
          marginTop={{ base: 4, md: 0 }}
          marginX={{ base: 4, md: 0 }}
          fontSize={{ base: '2xl', md: '4xl' }}
        >
          <FormattedMessage id="changePassword" />
        </Heading>
        <Grid
          gap={16}
          marginY={{ md: 'auto' }}
          width={{ base: 'full', md: 400, lg: 600 }}
          padding={{ base: 4, md: 6 }}
          boxShadow="0px 8px 16px -8px #FCECE2"
          backgroundColor="white"
          borderRadius={{ base: 0, md: 16 }}
        >
          <ChangePasswordForm />
        </Grid>
      </VStack>
    </Flex>
  );
};

export default ChangePasswordPage;
