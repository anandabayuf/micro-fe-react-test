import { Grid } from '@chakra-ui/react';

import type { RowItemInfoProps } from './components/RowItemInfo';
import RowItemInfo from './components/RowItemInfo';

type TableBoxProps = {
  items: Array<RowItemInfoProps>;
};

const TableBox = ({ items }: TableBoxProps) => {
  return (
    <Grid
      gap={4}
      padding={4}
      borderColor="orange.100"
      borderWidth={1}
      borderRadius={8}
    >
      {items.map((item) => (
        <RowItemInfo {...item} key={item.label} />
      ))}
    </Grid>
  );
};

export default TableBox;
