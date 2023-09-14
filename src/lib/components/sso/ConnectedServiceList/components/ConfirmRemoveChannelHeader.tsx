import {
	Flex,
	Heading,
	Spacer,
	IconButton,
	Icon,
	useBreakpointValue,
} from '@chakra-ui/react';
import { FiArrowLeft, FiX } from 'react-icons/fi';
import { FormattedMessage } from 'react-intl';

type ConfirmRemoveChannelHeaderProps = {
	isLoading: boolean;
	onClose: () => void;
	id?: string;
};

const ConfirmRemoveChannelHeader = ({
	isLoading,
	onClose,
	id,
}: ConfirmRemoveChannelHeaderProps) => {
	const showBackButton = useBreakpointValue<boolean>({
		base: true,
		md: false,
	});

	return (
		<Flex
			paddingY={{ base: 1 }}
			alignItems="center"
		>
			{showBackButton ? (
				<IconButton
					id={`${id}-back-btn`}
					variant="ghost"
					aria-label="back-button"
					onClick={onClose}
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
			<Heading fontSize={{ base: 'md', md: '2xl' }}>
				<FormattedMessage id="unlinkChannel" />
			</Heading>
			<Spacer />
			<IconButton
				id={`${id}-close-btn`}
				variant="ghost"
				padding={0}
				color={{ base: 'black', md: 'orange.500' }}
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
			/>
		</Flex>
	);
};

export default ConfirmRemoveChannelHeader;
