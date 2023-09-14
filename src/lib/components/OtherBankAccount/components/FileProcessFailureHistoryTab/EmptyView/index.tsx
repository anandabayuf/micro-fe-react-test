import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { FormattedMessage } from 'react-intl';

const EmptyView: React.FC = () => {
	return (
		<Flex
			flex={1}
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
			minH="50vh"
			fontWeight={400}
			fontSize={16}
		>
			<Text
				color="gray.900"
				textAlign="center"
				my={8}
			>
				<FormattedMessage id="fileProcessFailureHistory.empty.1" />
			</Text>
		</Flex>
	);
};

export default EmptyView;
