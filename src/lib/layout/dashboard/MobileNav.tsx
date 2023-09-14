import type { FlexProps } from '@chakra-ui/react';
import { Flex, Image, IconButton } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { APP_ASSETS_URL } from 'lib/constants/env';

import UserAvatar from './UserAvatar';

interface MobileNavProps extends FlexProps {
	onOpen: () => void;
	id?: string;
}

const MobileNav = ({ onOpen, id, ...rest }: MobileNavProps) => {
	return (
		<Flex
			display={{ base: 'flex', md: 'none' }}
			justifyContent="space-between"
			px={4}
			py={2}
		>
			<Flex
				alignItems="center"
				color={{ base: 'white', md: 'black' }}
				justifyContent="flex-start"
				{...rest}
			>
				<IconButton
					id={`${id}-menu-btn`}
					icon={<FiMenu />}
					fontSize="2xl"
					onClick={onOpen}
					variant="ghost"
					bg="none"
					color="black"
					_hover={{ bg: 'none' }}
					borderRadius={0}
					aria-label="open menu"
					mr={2}
					zIndex={10}
				/>

				<Link
					id={`${id}-logo-bni-direct-link`}
					to="/"
				>
					<Image
						maxH={35}
						src={`./${APP_ASSETS_URL}/logo-bni-direct.png`}
						alt="BNI"
					/>
				</Link>
			</Flex>
			<UserAvatar id={id} />
		</Flex>
	);
};

export default MobileNav;
