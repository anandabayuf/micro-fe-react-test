import { Flex, Text, Divider, Center, HStack, Icon } from '@chakra-ui/react';
import { FiCalendar, FiCheckCircle } from 'react-icons/fi';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import shallow from 'zustand/shallow';

import LocaleSelector from 'lib/components/LocaleSelector';
import { useAuth } from 'lib/store/auth';

import UserAvatar from './UserAvatar';

type HeaderProps = {
	id?: string;
};

const Header = ({ id }: HeaderProps) => {
	const [companyId, additionalInfo, permissions] = useAuth(
		(state) => [
			state.companyId,
			state.user?.additionalInfo,
			state.user?.permissions,
		],
		shallow
	);

	return (
		<Flex
			display={{ base: 'none', md: 'flex' }}
			ml={{ base: 0, md: 320 }}
			px={{ base: 12 }}
			py={3}
			bg="white"
			alignItems="center"
			boxShadow="0px 8px 16px -8px rgba(252, 236, 226, 1)"
			justifyContent="space-between"
			position="sticky"
			top={0}
			zIndex={2}
		>
			<Text
				fontSize="xl"
				textTransform="uppercase"
				fontWeight={700}
			>
				{companyId}
			</Text>
			<HStack spacing={{ base: '0', md: '6' }}>
				<Link
					id={`${id}-header-menu-item-calendar-link`}
					to="/calendar"
				>
					<Flex
						align="center"
						role="group"
						cursor="pointer"
						fontWeight={700}
						style={{ textDecoration: 'none' }}
						_focus={{ boxShadow: 'none' }}
					>
						{permissions?.includes('MNU_CUST_HUB_CALENDAR') && (
							<>
								<Icon
									as={FiCalendar}
									mr="2"
									color="orange.500"
									strokeWidth={3}
								/>
								<Text
									fontWeight={500}
									fontSize={14}
								>
									<FormattedMessage id="calendar" />
								</Text>
							</>
						)}
					</Flex>
				</Link>
				{additionalInfo?.role === 'MAKER_APPROVER' && (
					<Link
						id={`${id}-header-menu-item-my-approval-link`}
						to="/my-approval"
					>
						<Flex
							align="center"
							role="group"
							cursor="pointer"
							fontWeight={700}
							style={{ textDecoration: 'none' }}
							_focus={{ boxShadow: 'none' }}
						>
							<Icon
								as={FiCheckCircle}
								mr="2"
								color="orange.500"
								strokeWidth={3}
							/>
							<Text
								fontWeight={500}
								fontSize={14}
							>
								<FormattedMessage id="myApprovalTitle" />
							</Text>
						</Flex>
					</Link>
				)}
				<Center height={4}>
					<Divider
						orientation="vertical"
						opacity={1}
						borderWidth={1}
						borderColor="gray.200"
					/>
				</Center>
				<LocaleSelector id={`${id}-header`} />
				<Flex alignItems="center">
					<UserAvatar id={`${id}-header`} />
				</Flex>
			</HStack>
		</Flex>
	);
};

export default Header;
