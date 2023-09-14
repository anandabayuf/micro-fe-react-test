import { Flex, Image, Text } from '@chakra-ui/react';
import { FiChevronDown } from 'react-icons/fi';
import shallow from 'zustand/shallow';

import MenuWrapper from 'lib/components/shared/MenuWrapper';
import { APP_ASSETS_URL } from 'lib/constants/env';
import { useLocale } from 'lib/store/locale';

type UserAvatarProps = {
	id?: string;
};

const UserAvatar: React.FC<UserAvatarProps> = ({ id }) => {
	const [locale, setLocale] = useLocale(
		(state) => [state.locale, state.setLocale],
		shallow
	);

	const menuItems = [
		{
			title: 'Indonesia',
			onClick: () => setLocale('id'),
		},
		{
			title: 'English',
			onClick: () => setLocale('en'),
		},
	];

	return (
		<MenuWrapper
			id={`${id}-locale-selector`}
			button={
				<Flex
					gap="2"
					alignItems="center"
					bg="white"
					borderWidth={3}
					borderColor="gray.100"
					borderRadius={80}
					fontWeight="medium"
					p={2}
				>
					<Image
						src={`./${APP_ASSETS_URL}/flags/${locale ?? 'en'}.png`}
						width={6}
						height={6}
						borderRadius={100}
						border="2px solid"
						borderColor="gray.100"
					/>

					<Text
						fontSize={14}
						textTransform="uppercase"
					>
						{locale ?? 'en'}
					</Text>
					<FiChevronDown width={10} />
				</Flex>
			}
			items={menuItems}
		/>
	);
};

export default UserAvatar;
