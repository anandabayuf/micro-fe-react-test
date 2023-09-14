import { Box, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './footer';
import Header from './header';
import MobileNav from './MobileNav';
import Sidebar from './Sidebar';

type LandingLayoutProps = {
	children?: ReactNode;
};

const LandingLayout = ({ children }: LandingLayoutProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Box minH="100vh">
			<Drawer
				id="landing-drawer"
				autoFocus={false}
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				returnFocusOnClose={false}
				onOverlayClick={onClose}
				size="xl"
			>
				<DrawerContent id="landing-drawer-content">
					<Sidebar
						id="landing-drawer-content-sidebar"
						onClose={onClose}
						isOpen={isOpen}
					/>
				</DrawerContent>
			</Drawer>
			<Header />
			<MobileNav
				id="landing-mobile-nav"
				display={{ base: 'flex', md: 'none' }}
				onOpen={onOpen}
				isOpen={isOpen}
			/>
			<Box>{children ?? <Outlet />}</Box>
			<Footer />
		</Box>
	);
};

export default LandingLayout;
