import { Circle, Stack, Text } from '@chakra-ui/react';
import type { LegendItem } from 'chart.js';
import { useIntl } from 'react-intl';

type ChartLegendProps = {
  legend?: LegendItem[];
};

const ChartLegend = ({ legend }: ChartLegendProps) => {
  const intl = useIntl();
  return (
    <Stack direction="row" spacing={2}>
      {legend?.map(
        (obj) =>
          obj.text && (
            <Stack  bg="gray.100" px={4} py={2} rounded={8} direction="row" alignItems="center" key={obj.text}>
              <Circle size="16px" bg={obj.fillStyle as string} />
              <Text fontSize="sm">{intl.formatMessage({ id: obj.text })}</Text>
            </Stack>
          )
      )}
    </Stack>
  );
};

export default ChartLegend;
