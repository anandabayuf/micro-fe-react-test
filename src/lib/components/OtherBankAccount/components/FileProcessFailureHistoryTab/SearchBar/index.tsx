import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import type React from 'react';
import { FiSearch } from 'react-icons/fi';
import { useIntl } from 'react-intl';

const SearchBar: React.FC = () => {
	const { formatMessage } = useIntl();

	return (
		<form>
			<InputGroup
				w={{ base: 'full', md: 350 }}
				maxW={{ base: 'full', md: 350 }}
				minW={200}
				mb={4}
			>
				<InputLeftElement
					pointerEvents="none"
					h={46}
					w={46}
				>
					<FiSearch
						color="#E55300"
						size={18}
					/>
				</InputLeftElement>
				<Input
					name="search"
					_focus={{ borderColor: 'orange.500' }}
					_hover={{ backgroundColor: 'white' }}
					borderColor="orange.500"
					borderWidth={'1px'}
					variant="filled"
					backgroundColor="white"
					h={46}
					rounded="8"
					placeholder={formatMessage({
						id: 'fileProcessFailureHistory.placeholder.search',
					})}
					_placeholder={{ color: 'gray.600' }}
					fontSize={16}
					fontWeight={400}
					color="black"
				/>
			</InputGroup>
		</form>
	);
};

export default SearchBar;
