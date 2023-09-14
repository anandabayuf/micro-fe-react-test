import { Button, Flex, Icon, Spacer, Text } from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';
import { FormattedMessage } from 'react-intl';

import { useConnectServiceFormStore } from 'lib/store/connectServiceForm';

type ConnectServiceInformationProps = {
	id?: string;
};

const ConnectServiceInformation = ({ id }: ConnectServiceInformationProps) => {
	const setCurrentStep = useConnectServiceFormStore(
		(state) => state.setCurrentStep
	);

	const handleClickNext = () => setCurrentStep(2);

	return (
		<>
			<Flex
				direction={{ base: 'column', md: 'row' }}
				borderColor="teal.100"
				backgroundColor="teal.50"
				borderRadius={8}
				borderWidth={1}
				padding={4}
				gap={4}
			>
				<Icon
					as={FiInfo}
					fontSize="xl"
					color="teal.500"
				/>
				<Text>
					<FormattedMessage id="connectServiceDescription" />
				</Text>
			</Flex>

			<Spacer />

			<Button
				id={`${id}-continue-btn`}
				color="white"
				variant="solid"
				onClick={handleClickNext}
			>
				<FormattedMessage id="continue" />
			</Button>
		</>
	);
};

export default ConnectServiceInformation;
