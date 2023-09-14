import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";
import { AssetGridDetailProps } from "./interfaces/interfaces";
import { formatPercentage } from "../../../utils/number";

const AssetGridDetails: React.FC<AssetGridDetailProps> = ({
  backgroundColors,
  headers,
  data,
}) => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(2, 1fr)",
        md: "repeat(2,1fr)",
        lg: "repeat(4,1fr)",
      }}
      gap={4}
      width={"100%"}
      mb={{ base: 8, md: 4 }}
    >
      {headers.map((header, index) => (
        <GridItem w="100%" key={header}>
          <Box
            bgColor={backgroundColors[index]}
            p="12px"
            borderRadius={"8px"}
            color="white"
          >
            <Grid templateColumns="repeat(2, 1fr)" alignItems={"center"}>
              <Text fontSize={"14px"} fontWeight={"bold"} maxWidth="85px">
                <FormattedMessage id={header} />
              </Text>
              <Text fontSize={"18px"} fontWeight={"bold"} textAlign="right">
                {formatPercentage(data[header])}
              </Text>
            </Grid>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
};

export default AssetGridDetails;
