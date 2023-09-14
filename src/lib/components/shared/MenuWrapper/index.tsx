import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { changeIntoIdFormat } from 'lib/utils/id';
import { Link } from 'react-router-dom';

export type MenuWrapperProps = {
	items?: {
		title: string;
		href?: string;
		onClick?: () => void;
	}[];
	button?: React.ReactNode;
	id?: string;
};

const MenuWrapper = ({ items, button, id }: MenuWrapperProps) => {
	return (
		<Menu id={`${id}-menu`}>
			<MenuButton
				id={`${id}-menu-btn`}
				py={2}
				transition="all 0.3s"
				_focus={{ boxShadow: 'none' }}
			>
				{button}
			</MenuButton>
			<MenuList
				id={`${id}-menu-list`}
				border="2px solid"
				borderColor="orange.500"
				boxShadow="0px 16px 32px -8px rgba(240, 141, 84, 0.4)"
				borderRadius="16px 0 16px 16px"
				px={4}
			>
				{items?.map((menu) => (
					<Link
						id={`${id}-menu-list-item-${changeIntoIdFormat(
							menu.title
						)}-link`}
						key={menu.title}
						to={menu.href ?? '#'}
					>
						<MenuItem
							px={4}
							py={2}
							borderRadius={20}
							fontSize={14}
							justifyContent="flex-end"
							_focus={{
								background: 'brand.100',
							}}
							_hover={{
								background: 'brand.100',
							}}
							onClick={menu.onClick}
						>
							{menu.title}
						</MenuItem>
					</Link>
				))}
			</MenuList>
		</Menu>
	);
};

export default MenuWrapper;
