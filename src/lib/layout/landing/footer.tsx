import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

import { APP_ASSETS_URL } from "lib/constants/env";

const Footer = () => {
  return (
    <Box
      bg="teal.800"
      p={{ base: "8", md: "14" }}
      color="white"
      px={{ lg: 32, sm: 22, base: 4 }}
    >
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
        gap={10}
        mt="10"
      >
        <Image
          src={`./${APP_ASSETS_URL}/images/logo.png`}
          alt="BNI-logo"
          w="full"
          maxW="28"
        />
        <GridItem w="100%">
          <Heading fontSize="md" fontWeight="bold">
            Kantor BNI
          </Heading>
          <Text fontWeight="normal" mt={4}>
            Gedung Grha BNI <br /> Jl. Jenderal Sudirman Kav. 1 <br /> Jakarta
            Pusat 10220 <br /> Indonesia
          </Text>
        </GridItem>
        <GridItem w="100%">
          <Heading fontSize="sm" fontWeight="bold">
            Hubungi Kami
          </Heading>
          <Grid mt={4} gap={2} fontSize="sm">
            <Flex alignItems="center" gap={4}>
              <FiPhone />
              <Text>0812-3456-7891-0112</Text>
            </Flex>
            <Flex alignItems="center" gap={4}>
              <FiMail />
              <Text>contact@bni.co.id</Text>
            </Flex>
            <Flex alignItems="center" gap={4}>
              <FaWhatsapp />
              <Text>0812-3456-7891-0112</Text>
            </Flex>
          </Grid>
        </GridItem>
        <GridItem w="100%">
          <Heading fontSize="sm" fontWeight={700}>
            BNI terdaftar dan diawasi oleh
          </Heading>
          <Box mt={4}>
            <Flex gap={4}>
              <Image
                src={`./${APP_ASSETS_URL}/images/ojk.png`}
                alt="ojk"
                borderRadius={4}
              />
              <Image
                src={`./${APP_ASSETS_URL}/images/lembaga.png`}
                alt="lembaga"
                borderRadius={4}
              />
            </Flex>
          </Box>
        </GridItem>
      </Grid>
      <Divider mt={16} mb={8} borderColor="teal.700" />
      <Flex
        justify="space-between"
        wrap={{ base: "wrap", md: "nowrap" }}
        gap={4}
      >
        <Text fontSize="sm">
          © Hak Cipta {new Date().getFullYear()} PT. Bank Negara Indonesia
          (Persero), Tbk.
        </Text>
        <Text fontSize="sm">
          BNI terdaftar dan diawasi oleh{" "}
          <span style={{ fontWeight: 700 }}>Otoritas Jasa Keuangan</span>.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
