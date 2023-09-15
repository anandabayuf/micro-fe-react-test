import React from 'react';
import {
	Container,
	Heading,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from '@chakra-ui/react';
import { FormattedMessage } from 'react-intl';
import { OTHER_BANK_ACCOUNT_TABS } from './constants';
import ListOfBanksAndAccountsTab from './components/ListOfBanksAndAccountsTab';
import FileProcessFailureHistoryTab from './components/FileProcessFailureHistoryTab';

const OtherBankAccount: React.FC = () => {
	return (
		<Container
			minHeight="80vh"
			w="full"
			maxW="full"
		>
			{'HAHAHAHAHAH'}
			<Heading
				fontSize={{ base: 24, md: 32 }}
				py={8}
				fontWeight="bold"
				color="black"
			>
				<FormattedMessage id="otherBankAccount.title.page" />
			</Heading>

			<Tabs mt={2}>
				<TabList
					borderBottomWidth={0.5}
					borderColor="gray.200"
				>
					{OTHER_BANK_ACCOUNT_TABS.map((tab) => (
						<Tab
							key={tab}
							w={{ base: 'full', md: 'auto' }}
							backgroundColor={'white'}
							marginRight={1}
							roundedTop={8}
							borderWidth={0.5}
							borderColor="gray.200"
							_focus={{ boxShadow: 'none' }}
							_active={{ backgroundColor: 'none' }}
							_selected={{
								fontWeight: 'bold',
								color: 'orange.500',
							}}
						>
							<Text fontSize={16}>
								<FormattedMessage
									id={`otherBankAccount.title.tab.${tab}`}
								/>
							</Text>
						</Tab>
					))}
				</TabList>
				<TabPanels py={2}>
					<TabPanel p={0}>
						<ListOfBanksAndAccountsTab />
					</TabPanel>
					<TabPanel p={0}>
						<FileProcessFailureHistoryTab />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Container>
	);
};

export default OtherBankAccount;
