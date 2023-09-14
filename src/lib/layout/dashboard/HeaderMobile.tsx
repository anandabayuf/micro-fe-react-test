import {
	Box,
	Flex,
	Text,
	Divider,
	Center,
	Icon,
	VStack,
} from '@chakra-ui/react';
import { FiCalendar, FiCheckCircle } from 'react-icons/fi';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import shallow from 'zustand/shallow';

import LocaleSelector from 'lib/components/LocaleSelector';
import { useAuth } from 'lib/store/auth';

import MyDashboard from './MyDashboard';

type HeaderMobileProps = {
	id?: string;
};

const HeaderMobile = ({ id }: HeaderMobileProps) => {
	const [companyId, additionalInfo, permissions] = useAuth(
		(state) => [
			state.companyId,
			state.user?.additionalInfo,
			state.user?.permissions,
		],
		shallow
	);

	return (
		<Box
			display={{ base: 'block', md: 'none' }}
			ml={{ base: 0, md: 80 }}
			px={{ base: 4 }}
			py={3}
		>
			<Flex
				justifyContent="space-between"
				alignItems="start"
			>
				<VStack
					spacing={4}
					align="left"
				>
					<Text
						fontSize="xl"
						textTransform="uppercase"
						fontWeight={700}
					>
						{companyId}
					</Text>

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
				</VStack>

				<LocaleSelector id={`${id}-header`} />
			</Flex>

			<Center
				height={4}
				my={4}
			>
				<Divider
					opacity={1}
					borderColor="gray.200"
				/>
			</Center>

			<MyDashboard id={`${id}-header-menu`} />
		</Box>
	);
};

export default HeaderMobile;
