import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import type { ReactNode } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import Subtitle from "./Subtitle";

type WidgetWrapperProps = {
  title: string;
  additionalTitle?: string;
  subtitle?: string;
  href?: string;
  controlComponent?: ReactNode;
  dndComponent?: ReactNode;
  children?: ReactNode;
  id?: string;
  titleId?: string;
  titleOnClick?: () => void;
  hasSeeMore?: boolean;
};

const WidgetWrapper = ({
  title,
  additionalTitle,
  subtitle,
  href,
  controlComponent,
  dndComponent,
  children,
  id,
  titleId,
  titleOnClick,
  hasSeeMore = true,
}: WidgetWrapperProps) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Box
      display="inline-block"
      boxShadow="0px 8px 16px -8px #FCECE2"
      backgroundColor="white"
      borderRadius={{ base: 0, md: 16 }}
      w="100%"
      maxW="100vw"
      p={6}
      mb={6}
    >
      <HStack justifyContent="space-between" alignItems="baseline">
        <HStack
          width="100%"
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box width="100%">
            <Heading
              onClick={titleOnClick}
              id={titleId}
              fontSize={{ base: "lg", md: "2xl" }}
              display="inline"
            >
              {title}
            </Heading>
            {isMobile && (
              <Subtitle additionalTitle={additionalTitle} subtitle={subtitle} />
            )}
          </Box>
          {controlComponent && (
            <Flex
              width="100%"
              alignSelf={"flex-start"}
              justifyContent={{
                base: "center",
                md: "end",
                sm: "flex-start",
              }}
              pt={{ base: 0, md: 0 }}
              pb={{ base: 8, md: 0 }}
            >
              {controlComponent}
            </Flex>
          )}
        </HStack>
        <Flex alignItems="center" whiteSpace="nowrap">
          {dndComponent}
          {href && hasSeeMore && (
            <>
              <Link id={`${id}-see-more-link`} to={href}>
                <Text color="orange.500" fontWeight={700}>
                  <FormattedMessage id="SeeMore" />
                </Text>
              </Link>
              <Icon as={FiArrowRight} color="gray.400" ml={1} />
            </>
          )}
        </Flex>
      </HStack>
      {!isMobile && (
        <Subtitle additionalTitle={additionalTitle} subtitle={subtitle} />
      )}
      {children}
    </Box>
  );
};

export default WidgetWrapper;
