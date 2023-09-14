import { Flex, Text, Box } from '@chakra-ui/react';
import { FormattedMessage } from 'react-intl';

import { useUserManagement } from 'lib/store/userManagement';

type StepFourUser = {
	id?: string;
};

export const StepFourUser = ({ id }: StepFourUser) => {
	const { formUser } = useUserManagement();

	return (
		<Box>
			<Flex
				mt={8}
				gap={4}
				flexDir="column"
			>
				<Text
					fontWeight={400}
					fontSize={16}
				>
					<FormattedMessage id="userCreateConfirmation" />
				</Text>
				<Flex
					flexDir="column"
					p={4}
					border="1px solid"
					borderColor="gray.200"
					gap="4"
				>
					<Flex justify="space-between">
						<Text color="gray.400">
							<FormattedMessage id="name" />
						</Text>
						<Text
							color="black"
							fontWeight={700}
						>
							{formUser?.name ?? ''}
						</Text>
					</Flex>
					<Flex justify="space-between">
						<Text color="gray.400">
							<FormattedMessage id="nik" />
						</Text>
						<Text
							color="black"
							fontWeight={700}
						>
							{formUser?.nik ?? ''}
						</Text>
					</Flex>
					<Flex justify="space-between">
						<Text color="gray.400">
							<FormattedMessage id="group" />
						</Text>
						<Text
							color="black"
							fontWeight={700}
						>
							{formUser?.userGroupId?.split(':')[2] ?? ''}
						</Text>
					</Flex>
					<Flex justify="space-between">
						<Text color="gray.400">
							<FormattedMessage id="role" />
						</Text>
						<Text
							color="black"
							fontWeight={700}
						>
							{formUser?.role ?? ''}
						</Text>
					</Flex>
					<Flex justify="space-between">
						<Text color="gray.400">
							<FormattedMessage id="userIdLoginLabel" />
						</Text>
						<Text
							color="black"
							fontWeight={700}
						>
							{formUser?.identifier ?? ''}
						</Text>
					</Flex>
					<Flex justify="space-between">
						<Text color="gray.400">
							<FormattedMessage id="email" />
						</Text>
						<Text
							color="black"
							fontWeight={700}
						>
							{formUser?.email ?? ''}
						</Text>
					</Flex>
					<Flex justify="space-between">
						<Text color="gray.400">
							<FormattedMessage id="phone" />
						</Text>
						<Text
							color="black"
							fontWeight={700}
						>
							{formUser?.mobilePhone ?? ''}
						</Text>
					</Flex>
				</Flex>
				<Text
					fontWeight={400}
					fontSize={16}
				>
					<FormattedMessage id="userCreateConfirmationNote" />
				</Text>
			</Flex>
		</Box>
	);
};
