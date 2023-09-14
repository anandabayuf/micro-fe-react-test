import {
  Alert,
  AlertIcon,
  Container,
  Button,
  SimpleGrid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  Flex,
  useToast,
} from '@chakra-ui/react';
import { arrayMoveImmutable } from 'array-move';
import { FiPlus } from 'react-icons/fi';
import { FormattedMessage, useIntl } from 'react-intl';
import { SortableContainer } from 'react-sortable-hoc';

import PageTitle from 'lib/components/shared/PageTitle';
import type { WidgetManagementType } from 'lib/services/api/widget/getWidget/types';
import { useWidget } from 'lib/store/widgetSettings';

type SortEndProps = {
  oldIndex: number;
  newIndex: number;
};

const dummyData = [
  {
    id: 'WIDGET_SIMPANAN',
    name: 'Simpanan',
    desc: 'Core Dashboard1',
  },
  {
    id: 'WIDGET_UPCOMING_EVENTS',
    name: 'Agenda',
    desc: 'Core Dashboard2',
  },
  {
    id: 'WIDGET_PINJAMAN',
    name: 'Pinjaman',
    desc: 'Core Dashboard2',
  },
  {
    id: 'WIDGET_TREN_ARUS_KAS',
    name: 'Tren Arus Kas',
    desc: 'Core Dashboard4',
  },
];

const AdjustWidget = () => {
  const intl = useIntl();
  const toast = useToast();
  const { listWidget, setWidgetList } = useWidget();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const SortableList = SortableContainer(() => (
    <SimpleGrid
      columns={{ base: 1, lg: 2 }}
      gap={6}
      _active={{ cursor: 'grabbing' }}
    >
      balbaslld
    </SimpleGrid>
  ));

  const addWidget = (widget: WidgetManagementType) => () => {
    if (listWidget.includes(widget)) {
      toast({
        title: 'Warning',
        description: 'Widget telah sudah tersedia',
        status: 'warning',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    } else {
      const newList = [...listWidget, widget];
      setWidgetList(newList);
      onClose();
    }
  };

  const onSortEnd = ({ oldIndex, newIndex }: SortEndProps) => {
    const moveList = arrayMoveImmutable(listWidget, oldIndex, newIndex);
    setWidgetList(moveList);
  };

  return (
    <>
      <Container
        maxW="full"
        pt={{ base: '7', md: '10' }}
        px={{ base: 5, md: 12 }}
      >
        <PageTitle
          title={intl.formatMessage({ id: 'widigetSettings' })}
          controlComponent={
            <Button
              variant="outline"
              leftIcon={<FiPlus size={21} />}
              onClick={onOpen}
            >
              <FormattedMessage id="addWidget" />
            </Button>
          }
        />
      </Container>

      <Container maxW="full" px={{ base: 0, md: 12 }} pb={24}>
        <Alert status="warning" p={6} rounded="lg" colorScheme="blue" mb={20}>
          <AlertIcon />
          <FormattedMessage id="widgetSettingsDesc" />
        </Alert>

        <SortableList onSortEnd={onSortEnd} axis="xy" useDragHandle />
      </Container>

      <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <FormattedMessage id="addWidget" />
          </ModalHeader>
          <ModalCloseButton color="orange.500" mt={2} size="md" />
          <ModalBody pb={6}>
            <Text>
              <FormattedMessage id="chooseWidget" />
            </Text>
            <Flex mt={6} gap={4} flexDir="column">
              {dummyData.map((item) => (
                <Flex
                  flexDir="row"
                  alignItems="center"
                  justify="space-between"
                  rounded="md"
                  boxShadow="0px 0px 13px 0.5px #dedede"
                  p={4}
                  key={item.id}
                >
                  <Text fontWeight={600}>{item.name}</Text>
                  <Button size="sm" rounded="full" onClick={addWidget(item)}>
                    <FiPlus />
                  </Button>
                </Flex>
              ))}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AdjustWidget;
