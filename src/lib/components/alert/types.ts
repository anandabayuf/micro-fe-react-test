import type { Status } from '@chakra-ui/react';

export type AlertItem = {
  title: string;
  description?: string;
  status: Status;
  iconPath?: string;
};
