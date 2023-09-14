import { Container } from '@chakra-ui/react';
import React from 'react';
import SearchBar from './SearchBar';
import FileProcessFailureHistoryTable from './Table';

const FileProcessFailureHistoryTab: React.FC = () => {
	return (
		<Container
			backgroundColor={'white'}
			w="full"
			maxW="full"
			minH={'50vh'}
			p={4}
			rounded={8}
			boxShadow={'sm'}
		>
			<SearchBar />

			<FileProcessFailureHistoryTable />
		</Container>
	);
};

export default FileProcessFailureHistoryTab;
