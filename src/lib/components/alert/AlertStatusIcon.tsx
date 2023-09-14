import type { Status } from '@chakra-ui/react';
import { FiCheck } from 'react-icons/fi';

type AlertStatusIconProps = {
  status?: Status;
};

const AlertStatusIcon = ({ status }: AlertStatusIconProps) => {
  if (!status) return null;

  switch (status) {
    case 'success':
      return <FiCheck />;
    case 'info':
    case 'error':
    default:
      return null;
  }
};

export default AlertStatusIcon;
