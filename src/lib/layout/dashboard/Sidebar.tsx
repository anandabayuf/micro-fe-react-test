import { Box, Flex, IconButton, Image } from '@chakra-ui/react';
import type { BoxProps } from '@chakra-ui/react';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import ConnectedServiceList from 'lib/components/sso/ConnectedServiceList';
import { APP_ASSETS_URL } from 'lib/constants/env';

import HeaderMobile from './HeaderMobile';
import MyDashboard from './MyDashboard';

interface SidebarProps extends BoxProps {
	onClose: () => void;
}

const Sidebar = ({ onClose, id, ...rest }: SidebarProps) => {
	return (
		<Box
			id={`${id}-sidebar`}
			bg="white"
			w={{ base: 'full', md: '320px' }}
			borderRight="1px solid"
			borderRightColor="gray.200"
			backgroundImage={`./${APP_ASSETS_URL}/sidebar.svg`}
			backgroundRepeat="no-repeat"
			backgroundPosition="bottom"
			backgroundSize="cover"
			pos="fixed"
			h="full"
			{...rest}
			overflowX="scroll"
			className="hide-scrollbar"
		>
			<Flex
				justifyContent={{ base: 'initial', md: 'center' }}
				alignItems="center"
				px={{ base: 4, md: 24 }}
				py={{ base: 4, md: 8 }}
			>
				<IconButton
					id={`${id}-sidebar-close-btn`}
					display={{ base: 'flex', md: 'none' }}
					icon={<FiX />}
					fontSize="2xl"
					onClick={onClose}
					variant="ghost"
					bg="none"
					color="black"
					_hover={{ bg: 'none' }}
					borderRadius={0}
					aria-label="open menu"
					mr={2}
				/>
				<Link
					id={`${id}-sidebar-logo-bni-direct-link`}
					to="/"
				>
					<Image
						maxH={35}
						src={`./${APP_ASSETS_URL}/logo-bni-direct.png`}
						alt="BNI"
					/>
				</Link>
			</Flex>
			<Box
				display={{ base: 'none', md: 'block' }}
				my={4}
				rounded="2xl"
				border="1px"
				borderColor="orange.100"
				mx={5}
				p={4}
			>
				<MyDashboard id={`${id}-sidebar-menu`} />
			</Box>
			<HeaderMobile id={id} />
			<ConnectedServiceList
				id={`${id}-sidebar-menu-connected-service-list`}
			/>
		</Box>
	);
};

export default Sidebar;
