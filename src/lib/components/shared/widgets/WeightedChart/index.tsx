import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';

import { colors } from 'lib/styles/customTheme/colors';

type WeightedChartDataset = {
  title: string;
  weight: number;
};

type WeightedChartProps = {
  title?: string;
  datasets: WeightedChartDataset[];
};

const WeightedChart = ({ title, datasets }: WeightedChartProps) => {
  const chartColors = [
    colors.orange?.[500],
    colors.teal?.[500],
    colors.orange?.[300],
    colors.orange?.[100],
  ];

  return (
    <Box>
      {title && (
        <Heading fontSize={16} fontWeight={500} mb={4}>
          {title}
        </Heading>
      )}
      <Flex position="relative">
        <Box
          width={`${datasets[0].weight}%`}
          background={chartColors[0]}
          borderRadius={20}
          height={3}
        />
        {datasets.slice(1).map((d, i) => (
          <Box
            key={d.title}
            width={`${d.weight + 2}%`}
            position="absolute"
            top={0}
            left={`${
              datasets
                .slice(0, i + 1)
                .map((item) => item.weight)
                .reduce((prev, curr) => prev + curr, 0) - 2
            }%
              `}
            height={3}
            background={chartColors[i + 1]}
            borderRadius={20}
          />
        ))}
      </Flex>
      <Flex mt={2}>
        {datasets.map((d) => (
          <Box key={d.title} width={`${d.weight + 1}%`}>
            <VStack alignItems="flex-start" maxWidth={20}>
              <Text fontWeight={700} fontSize={14}>
                {d.title}
              </Text>
              <Text fontWeight={400}>{d.weight}%</Text>
            </VStack>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default WeightedChart;
