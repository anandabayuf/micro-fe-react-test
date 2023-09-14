import { Flex, Text } from '@chakra-ui/react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import shallow from 'zustand/shallow';

import GridIcon from 'lib/components/icons/grid';
import UsersIcon from 'lib/components/icons/users';
import { useAuth } from 'lib/store/auth';
import OtherBankAccountIcon from '../../components/icons/OtherBankAccountIcon';

type MyDashboardProps = {
	id?: string;
};

const MyDashboard: React.FC<MyDashboardProps> = ({ id }) => {
	const [additionalInfo, permissions] = useAuth(
		(state) => [state.user?.additionalInfo, state.user?.permissions],
		shallow
	);

	return (
		<Flex
			flexDir="column"
			gap={4}
		>
			<Link
				id={`${id}-item-dashboard-link`}
				to="/"
			>
				<Flex
					w="full"
					justifyContent="start"
					alignItems="center"
				>
					<GridIcon />
					<Text
						fontSize={16}
						fontWeight={700}
						ml={2}
					>
						Dashboard
					</Text>
				</Flex>
			</Link>
			{additionalInfo?.role === 'MAKER_APPROVER' && (
				<Link
					id={`${id}-item-user-management-link`}
					to="/user-management"
				>
					<Flex
						w="full"
						justifyContent="start"
						alignItems="center"
					>
						<UsersIcon />
						<Text
							fontSize={16}
							fontWeight={700}
							ml={2}
						>
							<FormattedMessage id="userManagement" />
						</Text>
					</Flex>
				</Link>
			)}
			{permissions?.includes('MNU_CUST_HUB_OTHERBANKSTATEMENT') && (
				<Link
					id={`${id}-item-dashboard-link`}
					to="/other-bank-account"
				>
					<Flex
						w="full"
						justifyContent="start"
						alignItems="center"
					>
						<OtherBankAccountIcon />
						<Text
							fontSize={16}
							fontWeight={700}
							ml={2}
						>
							<FormattedMessage id="menu.title.otherBankAccount" />
						</Text>
					</Flex>
				</Link>
			)}
		</Flex>
	);
};

export default MyDashboard;
