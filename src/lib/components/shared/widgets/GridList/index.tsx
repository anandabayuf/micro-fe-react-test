import { Box, SimpleGrid, Text } from '@chakra-ui/react';

type GridListDataset = {
  name: string;
  amount: string;
};

type GridListProps = {
  datasets: GridListDataset[];
};

const GridList = ({ datasets }: GridListProps) => {
  return (
    <SimpleGrid columns={2} spacing={4}>
      {datasets.map((d) => (
        <Box key={d.name}>
          <Text fontSize={12} color="gray.500">
            {d.name}
          </Text>
          <Text fontSize={18} fontWeight={700}>
            {d.amount}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default GridList;
