import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import shallow from 'zustand/shallow';

import ModalWrapper from 'lib/components/shared/ModalWrapper';
import { useAlert } from 'lib/store/alert';

import AlertStatusIcon from './AlertStatusIcon';
import { statusIcon } from './constants';
import type { AlertItem } from './types';

const AlertListener = () => {
  const location = useLocation();
  const [alert, clearAlert] = useAlert(
    (state) => [state.alert, state.clear],
    shallow
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [alertItem, setAlertItem] = React.useState<AlertItem | null>();

  const showAlert = React.useCallback(() => {
    onOpen();
    setAlertItem(alert);
    clearAlert();
  }, [alert, clearAlert, onOpen]);

  React.useEffect(() => {
    if (alert) {
      showAlert();
    }
  }, [alert, clearAlert, location, showAlert]);

  const icon = React.useMemo(() => {
    if (alertItem?.iconPath) {
      return <Image src={alertItem.iconPath} width="120px" />;
    }
    if (statusIcon[alertItem?.status ?? 'default']) {
      return (
        <Image src={statusIcon[alertItem?.status ?? 'default']} width="120px" />
      );
    }
    return (
      <Flex
        width="120px"
        height="120px"
        borderRadius="full"
        justifyContent="center"
        alignItems="center"
        fontSize="4xl"
        backgroundColor="gray.200"
      >
        <AlertStatusIcon status={alertItem?.status} />
      </Flex>
    );
  }, [alertItem?.iconPath, alertItem?.status]);

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick
      withCloseButton={false}
      contentWrapperProps={{
        borderRadius: 16,
        marginX: { base: 4, md: 'none' },
      }}
      body={
        <VStack spacing={6} marginBottom={2} marginTop={6}>
          {icon}
          <VStack spacing={4} textAlign="center">
            <Heading as={Text} fontSize="2xl" fontWeight="bold">
              {alertItem?.title}
            </Heading>
            {alertItem?.description && <Text>{alertItem.description}</Text>}
          </VStack>
        </VStack>
      }
      footer={
        <Button width="full" onClick={onClose} marginBottom={4}>
          OK
        </Button>
      }
    />
  );
};

export default AlertListener;
