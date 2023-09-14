import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	Flex,
	ModalFooter,
	Button,
	Text,
	Image,
} from '@chakra-ui/react';
import { FormattedMessage } from 'react-intl';

import { APP_ASSETS_URL } from 'lib/constants/env';

type SuccessProps = {
	openSuccess: boolean;
	onCloseSuccess: () => void;
	id?: string;
};

const SuccessModal = ({ openSuccess, onCloseSuccess, id }: SuccessProps) => {
	return (
		<Modal
			id={`${id}-success-modal`}
			isOpen={openSuccess}
			onClose={onCloseSuccess}
			size="xs"
			isCentered
		>
			<ModalOverlay />
			<ModalContent>
				<ModalBody>
					<Flex
						flexDir="column"
						gap={2}
						alignItems="center"
					>
						<Image
							src={`./${APP_ASSETS_URL}/images/icons/success.png`}
						/>
						<Text
							fontWeight={700}
							fontSize={21}
						>
							<FormattedMessage id="saveSetting" />
						</Text>
					</Flex>
				</ModalBody>

				<ModalFooter
					flexDir="column"
					gap={4}
				>
					<Button
						id={`${id}-success-modal-ok-btn`}
						onClick={onCloseSuccess}
						w="full"
					>
						OK
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default SuccessModal;
