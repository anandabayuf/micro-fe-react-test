import {
	Button,
	Icon,
	useBreakpointValue,
	useDisclosure,
} from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';

import ModalWrapper from 'lib/components/shared/ModalWrapper';
import { useSSOTour } from 'lib/hooks/useSSOTour';
import type { ChannelEntry } from 'lib/services/api/cxo/getChannelSelection/types';
import { useConnectServiceFormStore } from 'lib/store/connectServiceForm';

import ConnectServiceHeader from './components/ConnectServiceHeader';
import ConnectServiceStepForm from './components/ConnectServiceStepForm';

type ConnectServiceProps = {
	channel: ChannelEntry;
	disabled: boolean;
	id?: string;
};

const ConnectServiceWrapper = ({
	channel,
	disabled,
	id,
}: ConnectServiceProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const modalSize = useBreakpointValue({ base: 'full', md: 'lg' });
	const { handleCloseTour } = useSSOTour({ id: `${id}-connect-service-btn` });

	const [setFormData, reset] = useConnectServiceFormStore((state) => [
		state.setFormData,
		state.resetStore,
	]);

	const handleOpen = (channelSelect: ChannelEntry) => () => {
		reset();
		setFormData({
			step: 2,
			data: {
				channel: channelSelect,
			},
		});
		onOpen();
		handleCloseTour();
	};

	const handleClose = () => {
		onClose();
		reset();
	};

	return (
		<>
			<Button
				variant="ghost"
				onClick={handleOpen(channel)}
				id={`${id}-connect-service-btn`}
				_hover={{ backgroundColor: 'orange.100' }}
				leftIcon={
					<Icon
						as={FiPlus}
						size={24}
					/>
				}
				iconSpacing={0}
				size="md"
				padding={0}
				fontWeight="bold"
				color={disabled ? 'gray.500' : 'orange.500'}
			/>

			<ModalWrapper
				id={`${id}-connect-service`}
				isOpen={isOpen}
				onClose={handleClose}
				size={modalSize}
				withCloseButton={false}
				header={
					<ConnectServiceHeader
						id={`${id}-connect-service-modal`}
						onClose={handleClose}
					/>
				}
				body={
					<ConnectServiceStepForm
						id={`${id}-connect-service-modal`}
						onClose={handleClose}
					/>
				}
			/>
		</>
	);
};

export default ConnectServiceWrapper;
