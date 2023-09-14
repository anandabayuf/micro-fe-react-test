import { Box, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import * as React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import Loader from 'lib/layout/Loader';
import { usePingAuth } from 'lib/services/api/ping';
import { useAuth } from 'lib/store/auth';

import Header from './Header';
import MobileNav from './MobileNav';
import Sidebar from './Sidebar';
import { useLayout } from 'lib/store/layout';
import shallow from 'zustand/shallow';

type DashboardLayoutProps = {
	children?: ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
	const navigate = useNavigate();
	const { token } = useAuth();
	const { mutate: pingAuth } = usePingAuth(token as string);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [isUsingLandingLayout] = useLayout(
		(state) => [state.isUsingLandingLayout],
		shallow
	);

	React.useEffect(() => {
		if (token) pingAuth();
		if (!token) navigate('/login');
	}, [token, navigate, isUsingLandingLayout]);

	if (!token) {
		return <Loader />;
	}

	return (
		<Box minH="100vh">
			<Sidebar
				id="dashboard"
				onClose={onClose}
				display={{ base: 'none', md: 'block' }}
			/>
			<Drawer
				id="dashboard-drawer"
				autoFocus={false}
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				returnFocusOnClose={false}
				onOverlayClick={onClose}
				size="full"
			>
				<DrawerContent>
					<Sidebar
						id="dashboard-drawer"
						onClose={onClose}
					/>
				</DrawerContent>
			</Drawer>

			<MobileNav
				id="dashboard-header"
				display={{ base: 'flex', md: 'none' }}
				onOpen={onOpen}
			/>
			<Header id="dashboard" />

			<Box
				bg="orange.50"
				minH="90vh"
				ml={{ base: 0, md: 320 }}
			>
				{children ?? <Outlet />}
			</Box>
		</Box>
	);
};

export default DashboardLayout;
