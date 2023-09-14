import type { FlexProps } from '@chakra-ui/react';
import { Flex, Image, IconButton, Spacer, CloseButton } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { APP_ASSETS_URL } from 'lib/constants/env';

interface MobileNavProps extends FlexProps {
	onOpen: () => void;
	isOpen: boolean;
}

const MobileNav = ({ onOpen, isOpen, id, ...rest }: MobileNavProps) => {
	return (
		<Flex
			ml={{ base: 0, md: 60 }}
			px={{ base: 4, md: 24 }}
			height="20"
			alignItems="center"
			justifyContent="flex-start"
			gap={6}
			bg="teal.500"
			color="white"
			{...rest}
		>
			{!isOpen ? (
				<IconButton
					id={`${id}-open-btn`}
					variant="ghost"
					color="white"
					icon={<FiMenu size={24} />}
					onClick={onOpen}
					bg="none"
					fill="white"
					_hover={{ bg: 'none' }}
					borderRadius={0}
					aria-label="open menu"
				/>
			) : (
				<CloseButton
					id={`${id}-close-btn`}
					display={{ base: 'flex', md: 'none' }}
					onClick={onOpen}
				/>
			)}
			<Link
				id={`${id}-bni-direct-logo-link`}
				to="/"
			>
				<Image
					src={`./${APP_ASSETS_URL}/images/logo.png`}
					alt="BNIDirect-logo"
					maxH={37}
				/>
			</Link>
			<Spacer />
		</Flex>
	);
};

export default MobileNav;
