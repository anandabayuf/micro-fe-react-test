import {
	InputGroup,
	InputLeftElement,
	Input,
	useMediaQuery,
} from '@chakra-ui/react';
import { SearchBarProps } from 'lib/components/OtherBankAccount/types';
import { debounce } from 'lib/components/OtherBankAccount/utils';
import type React from 'react';
import { FiSearch } from 'react-icons/fi';
import { useIntl } from 'react-intl';

const SearchBar: React.FC<SearchBarProps> = ({ setSearchValue }) => {
	const [IS_MOBILE] = useMediaQuery('(max-width: 768px)');
	const { formatMessage } = useIntl();

	const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
		debounce(() => setSearchValue(e.target.value), 200);

	return (
		<form style={{ width: IS_MOBILE ? '100%' : '50%' }}>
			<InputGroup
				w={{ base: 'full', md: 'full' }}
				maxW={{ base: 'full', md: 350 }}
				minW={200}
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
						id: 'listOfBanksAndAccounts.placeholder.search',
					})}
					_placeholder={{ color: 'gray.600' }}
					fontSize={16}
					fontWeight={400}
					color="black"
					onChange={onChange}
				/>
			</InputGroup>
		</form>
	);
};

export default SearchBar;
