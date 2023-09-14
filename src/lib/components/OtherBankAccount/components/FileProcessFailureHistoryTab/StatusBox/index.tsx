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
		if (value === '0') return 'fileProcessFailureHistory.status.success';
		if (value === '1') return 'fileProcessFailureHistory.status.failed';

		return '-';
	};

	return (
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
				fontWeight={isFirstColumn ? 'bold' : 400}
				textTransform="capitalize"
			>
				<FormattedMessage id={status()} />
			</Text>
		</Flex>
	);
};

export default StatusBox;
