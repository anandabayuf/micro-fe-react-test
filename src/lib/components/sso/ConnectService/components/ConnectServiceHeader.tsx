import { Flex, Heading, Spacer, IconButton, Icon } from '@chakra-ui/react';
import React from 'react';
import { FiArrowLeft, FiX } from 'react-icons/fi';
import { FormattedMessage } from 'react-intl';
import shallow from 'zustand/shallow';

import { useConnectServiceFormStore } from 'lib/store/connectServiceForm';

type ConnectServiceHeaderProps = {
	onClose: () => void;
	id?: string;
};

const ConnectServiceHeader = ({ onClose, id }: ConnectServiceHeaderProps) => {
	const [currentStep, isLoading, setCurrentStep] = useConnectServiceFormStore(
		(state) => [state.currentStep, state.isLoading, state.setCurrentStep],
		shallow
	);

	const showBackButton = React.useMemo(
		() => currentStep !== 1 && currentStep !== 4,
		[currentStep]
	);

	const handleClickBack = () => setCurrentStep(currentStep - 1);

	return (
		<Flex
			paddingY={{ base: 1 }}
			alignItems="center"
			gap={22}
		>
			{showBackButton ? (
				<IconButton
					id={`${id}-back-btn`}
					variant="ghost"
					aria-label="back-button"
					onClick={handleClickBack}
					icon={
						<Icon
							as={FiArrowLeft}
							fontSize="2xl"
						/>
					}
					color={{ base: 'black', md: 'orange.500' }}
				/>
			) : (
				<Spacer />
			)}
			<Spacer />
			<Heading
				fontSize={{ base: 'md', md: '2xl' }}
				textAlign={{ base: 'center', md: 'inherit' }}
			>
				<FormattedMessage id="connectServiceTitle" />
			</Heading>
			<Spacer />
			<IconButton
				id={`${id}-close-btn`}
				variant="ghost"
				padding={0}
				icon={
					<Icon
						as={FiX}
						fontSize="2xl"
					/>
				}
				aria-label="close-button"
				onClick={onClose}
				isLoading={isLoading}
				isDisabled={isLoading}
				color={{ base: 'black', md: 'orange.500' }}
			/>
		</Flex>
	);
};

export default ConnectServiceHeader;
