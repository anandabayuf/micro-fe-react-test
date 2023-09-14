import { HStack, Avatar } from '@chakra-ui/react';
import { useIntl } from 'react-intl';
import { useSWRConfig } from 'swr';
import shallow from 'zustand/shallow';

import MenuWrapper from 'lib/components/shared/MenuWrapper';
import logout from 'lib/services/api/auth/logout';
import { useAuth } from 'lib/store/auth';
import { colors } from 'lib/styles/customTheme/colors';

type UserAvatarProps = {
	id?: string;
};

const UserAvatar = ({ id }: UserAvatarProps) => {
	const intl = useIntl();
	const { cache } = useSWRConfig();
	const [user, clearAuth] = useAuth(
		(state) => [state.user, state.clearAuth],
		shallow
	);
	const submitLogout = () => {
		logout();
		(cache as Map<unknown, unknown>).clear();
		clearAuth();
	};

	const menuItems = [
		{
			title: intl.formatMessage({ id: 'changePassword' }),
			href: '/change-password',
		},
		{
			title: intl.formatMessage({ id: 'logout' }),
			onClick: submitLogout,
		},
	];

	return (
		<MenuWrapper
			id={`${id}-user`}
			button={
				<HStack>
					<Avatar
						size="sm"
						src={`https://ui-avatars.com/api/?name=${
							user?.userName
						}&background=${colors.orange?.[500]?.substring(
							1
						)}&color=fff&length=1`}
					/>
				</HStack>
			}
			items={menuItems}
		/>
	);
};

export default UserAvatar;
