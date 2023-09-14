import {
	Container,
	Heading,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Text,
} from '@chakra-ui/react';
import { FormattedMessage } from 'react-intl';
import { useSearchParams } from 'react-router-dom';

import {
	userManagementTabs,
	defaultTabIndex,
	defaultItemPerPage,
	defaultPageNumber,
} from 'lib/constants';
import RoleTab from 'lib/pages/user-management/roleTab';
import UserTab from 'lib/pages/user-management/userTab';
import { changeIntoIdFormat } from 'lib/utils/id';

const UserManagement = () => {
	const [searchParams] = useSearchParams();
	const tabIndex = searchParams.get('tab') === 'user' ? 1 : defaultTabIndex;
	const item = Number(searchParams.get('item') || defaultItemPerPage);
	const page = Number(searchParams.get('page') || defaultPageNumber);

	return (
		<Container
			minHeight="80vh"
			w="full"
			maxW="full"
		>
			{'INI DARI MODULE'}
			<Heading
				fontSize={{ base: 24, md: 32 }}
				py={8}
				fontWeight="bold"
				color="black"
			>
				<FormattedMessage id="userManagement" />
			</Heading>
			<Tabs
				id="user-management-tabs"
				defaultIndex={tabIndex}
				mt={8}
			>
				<TabList
					id="user-management-tab-list"
					borderBottomWidth={1}
					borderColor="gray.200"
				>
					{userManagementTabs.map((tab) => (
						<Tab
							id={`user-management-tab-${changeIntoIdFormat(
								tab
							)}`}
							key={tab}
							w={{ base: 'full', md: 120 }}
							_focus={{ boxShadow: 'none' }}
							_active={{ backgroundColor: 'none' }}
							_selected={{
								borderBottomWidth: 4,
								borderBottomColor: 'orange.500',
								fontWeight: 'bold',
								color: 'orange.500',
							}}
						>
							<Text fontSize={16}>
								<FormattedMessage id={tab} />
							</Text>
						</Tab>
					))}
				</TabList>
				<TabPanels
					id="user-management-tab-panels"
					py={8}
				>
					<TabPanel
						id="user-management-tab-panel-user-group"
						p={0}
					>
						<RoleTab
							id="user-management-group"
							defaultItemPerPage={item}
							defaultPageNumber={page}
						/>
					</TabPanel>
					<TabPanel
						id="user-management-tab-panel-user"
						p={0}
					>
						<UserTab
							id="user-management-user"
							defaultItemPerPage={item}
							defaultPageNumber={page}
						/>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Container>
	);
};

export default UserManagement;
