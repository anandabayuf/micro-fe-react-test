import { Grid, Text } from '@chakra-ui/react';

export type RowItemInfoProps = {
  label: string;
  value: string;
};

const RowItemInfo = ({ label, value }: RowItemInfoProps) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)">
      <Text fontWeight="medium">{label}</Text>
      <Text fontWeight="bold">{value}</Text>
    </Grid>
  );
};

export default RowItemInfo;
