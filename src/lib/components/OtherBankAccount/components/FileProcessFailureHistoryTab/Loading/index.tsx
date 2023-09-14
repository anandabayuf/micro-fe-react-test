import React from 'react';
import { Flex, Spinner } from '@chakra-ui/react';

const Loading: React.FC = () => {
	return (
		<Flex
			justifyContent="center"
			alignItems="center"
			minH="50vh"
		>
			<Spinner
				width={32}
				height={32}
			/>
		</Flex>
	);
};

export default Loading;
