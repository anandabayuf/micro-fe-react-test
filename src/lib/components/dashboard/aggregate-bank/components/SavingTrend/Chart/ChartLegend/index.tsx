import { Circle, Stack, Text } from "@chakra-ui/react";
import type { LegendItem } from "chart.js";
import { colors } from "lib/styles/customTheme/colors";
import { FormattedMessage, useIntl } from "react-intl";

const ChartLegend = () => {
  const intl = useIntl();
  return (
    <Stack direction="row" spacing={2}>
      <Stack
        bg="gray.100"
        px={4}
        py={2}
        rounded={8}
        direction="row"
        alignItems="center"
      >
        <Circle size="16px" bg={colors.teal?.[500]} />
        <Text fontSize="sm">
          <FormattedMessage id="aggregateBank.title.totalSaving" />
        </Text>
      </Stack>
    </Stack>
  );
};

export default ChartLegend;
