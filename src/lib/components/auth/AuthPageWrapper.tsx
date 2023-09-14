import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import type * as React from "react";
import { FormattedMessage } from "react-intl";

import Carousel from "lib/components/carousel";
import { banners } from "lib/constants/banners";
import { APP_ASSETS_URL } from "lib/constants/env";

type AuthPageWrapperProps = {
  children: React.ReactNode;
};

const AuthPageWrapper = ({ children }: AuthPageWrapperProps) => {
  const backgroundRadialGradient = `
    radial-gradient(
      55% 41.59% at 50% 49.47%, 
      rgba(0, 102, 119, 0) 0%, 
      #006677 100%
    ), 
    url('./${APP_ASSETS_URL}/images/homepage.png')
  `;

  return (
    <Flex
      flexDirection="column"
      px={{ lg: 32, sm: 22 }}
      gap={{ base: 8, md: 20 }}
      justifyContent="center"
      alignItems="center"
      my={{ base: 0, md: 20 }}
    >
      <Box
        backgroundImage={backgroundRadialGradient}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        maxH={{ lg: "130vh", xl: "150vh", "2xl": "120vh" }}
        backgroundSize="cover"
        bgPosition="top"
        position="absolute"
        display={{ base: "none", md: "block" }}
        top={0}
        left={0}
        width="100%"
        height="100%"
        zIndex={-1}
      />

      <Grid
        templateColumns={{ base: "1fr", md: "7fr 5fr" }}
        gap={{ sm: 12, xl: 28 }}
        width="full"
        alignItems="flex-start"
      >
        <Flex />
        <Grid
          paddingY={{ base: 8 }}
          paddingX={{ base: 4, md: 8 }}
          backgroundColor="white"
          borderRadius={{ md: 16 }}
          gap={8}
          alignSelf="end"
        >
          {children}
        </Grid>
      </Grid>

      <Flex
        flexDirection="column"
        gap="8"
        width="full"
        paddingBottom={{ base: 20, md: 0 }}
        alignItems={{ xl: "center" }}
      >
        <Heading fontSize="3xl" textAlign="center" textColor={{ md: "white" }}>
          <FormattedMessage id="Promotion" />
        </Heading>
        <Carousel images={banners} id="promotion-banner" />
      </Flex>
    </Flex>
  );
};

export default AuthPageWrapper;
