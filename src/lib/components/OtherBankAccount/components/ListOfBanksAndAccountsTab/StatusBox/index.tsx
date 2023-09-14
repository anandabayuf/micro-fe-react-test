import { Flex, Text } from '@chakra-ui/react';
import { StatusBoxProps } from 'lib/components/OtherBankAccount/types';
import { FormattedMessage } from 'react-intl';

const StatusBox: React.FC<StatusBoxProps> = ({
	isFirstColumn,
	maxWidth,
	minWidth,
	value,
	width,
}) => {
	const status = () => {
		if (value === '0') return 'listOfBanksAndAccounts.status.active';
		if (value === '1') return 'listOfBanksAndAccounts.status.inactive';

		return '-';
	};

	return value !== '0' && value !== '1' ? (
		<Text
			color={'black'}
			px={1}
			fontSize={{ base: 14, md: 16 }}
			maxW={width}
			fontWeight={isFirstColumn ? 'bold' : 400}
			textTransform="capitalize"
		>
			-
		</Text>
	) : (
		<Flex
			alignSelf="center"
			justifyContent="center"
			w={width}
			maxW={maxWidth}
			minW={minWidth}
			h={10}
			bg={value === '0' ? 'teal.500' : 'supportingRed.500'}
			borderRadius={4}
			py={2}
			overflow="hidden"
		>
			<Text
				color="white"
				px={1}
				fontSize={{ base: 14, md: 16 }}
				// maxW={width}
				fontWeight={isFirstColumn ? 'bold' : 400}
				textTransform="capitalize"
			>
				<FormattedMessage id={status()} />
			</Text>
		</Flex>
	);
};

export default StatusBox;
