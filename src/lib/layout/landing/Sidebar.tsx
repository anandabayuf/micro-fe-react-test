import type { BoxProps } from '@chakra-ui/react';
import { Box, Grid, Heading } from '@chakra-ui/react';
import { FormattedMessage } from 'react-intl';

import LocaleSelector from 'lib/components/LocaleSelector';
import { LANDING_BASE_URL } from 'lib/constants/env';

import { headerList } from './constants';
import MobileNav from './MobileNav';
import { changeIntoIdFormat } from 'lib/utils/id';

interface SidebarProps extends BoxProps {
	onClose: () => void;
	isOpen: boolean;
}

const Sidebar = ({ onClose, isOpen, id, ...rest }: SidebarProps) => {
	return (
		<Box
			w={{ base: 'full', md: 80 }}
			pos="fixed"
			h="full"
			{...rest}
		>
			<MobileNav
				id={`${id}-mobile-nav`}
				onOpen={onClose}
				isOpen={isOpen}
			/>
			<Box paddingX="6">
				<Grid
					gap={8}
					mt="8"
					fontWeight={600}
					fontSize={21}
				>
					{headerList.map((item) => (
						<Heading
							id={`${id}-mobile-nav-item-${changeIntoIdFormat(
								item.name
							)}-link`}
							as="a"
							href={`${LANDING_BASE_URL}${item.path}`}
							key={item.name}
							fontSize="xl"
							fontWeight={700}
							color="black"
						>
							<FormattedMessage
								key={item.name}
								id={item.name}
							/>
						</Heading>
					))}
				</Grid>
				<LocaleSelector id={`${id}-mobile-nav`} />
			</Box>
		</Box>
	);
};

export default Sidebar;
