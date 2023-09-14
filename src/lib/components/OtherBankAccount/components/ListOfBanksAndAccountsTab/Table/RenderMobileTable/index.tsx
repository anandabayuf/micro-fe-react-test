import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { RowMobileProps } from 'lib/components/OtherBankAccount/types';
import { parseAccountType } from 'lib/components/OtherBankAccount/utils';
import { FormattedMessage } from 'react-intl';
import StatusBox from '../../StatusBox';
import { TBanksAndAccountsResponse } from '../../../../types';

export const RenderMobileTable: React.FC<RowMobileProps> = ({
	row,
	handleActivateDeactivate,
	handleDelete,
	handleEdit,
}) => (
	<Flex
		direction="column"
		display={{ base: 'flex', md: 'none' }}
		flex={1}
	>
		<Flex
			align="center"
			mb={2}
		>
			<Text
				fontSize="14px"
				color="gray.600"
				w="50%"
				minW={120}
			>
				<FormattedMessage id="listOfBanksAndAccounts.label.accountType" />
			</Text>
			<Text
				fontSize="14px"
				color="gray.900"
				w="45%"
			>
				<FormattedMessage
					id={parseAccountType(row.original?.accountType)}
				/>
			</Text>
			<Text w={10} />
		</Flex>
		<Flex
			align="center"
			mb={2}
		>
			<Text
				fontSize="14px"
				color="gray.600"
				w="50%"
				minW={120}
			>
				<FormattedMessage id="listOfBanksAndAccounts.label.currency" />
			</Text>
			<Text
				fontSize="14px"
				color="gray.900"
				w="45%"
			>
				{row.original?.currency}
			</Text>
			<Text w={10} />
		</Flex>
		<Flex
			align="center"
			mb={2}
		>
			<Text
				fontSize="14px"
				color="gray.600"
				w="50%"
				minW={120}
			>
				<FormattedMessage id="listOfBanksAndAccounts.label.status" />
			</Text>
			<StatusBox value={row.original?.status} />
			<Text w={10} />
		</Flex>
		<Flex
			justifyContent="flex-end"
			alignItems="center"
			wrap="wrap"
			my={1}
			flex={1}
		>
			<Button
				p={0}
				variant="unstyled"
				_focus={{ boxShadow: 'none' }}
				ml={4}
				onClick={() => {
					if (!handleEdit) return;
					const { corporateBranch, ...rest } = row?.original;
					handleEdit(rest as TBanksAndAccountsResponse);
				}}
			>
				<Box
					color="gray.900"
					fontWeight="bold"
				>
					<Text fontSize={14}>
						<FormattedMessage id="listOfBanksAndAccounts.button.edit" />
					</Text>
				</Box>
			</Button>
			<Button
				p={0}
				variant="unstyled"
				_focus={{ boxShadow: 'none' }}
				ml={4}
				onClick={() => {
					if (!handleDelete) return;
					const { corporateBranch, ...rest } = row?.original;
					handleDelete(rest as TBanksAndAccountsResponse);
				}}
			>
				<Box
					color="gray.900"
					fontWeight="bold"
				>
					<Text fontSize={14}>
						<FormattedMessage id="listOfBanksAndAccounts.button.delete" />
					</Text>
				</Box>
			</Button>
			<Button
				p={0}
				variant="unstyled"
				_focus={{ boxShadow: 'none' }}
				ml={4}
				onClick={() => {
					if (!handleActivateDeactivate) return;
					const { corporateBranch, ...rest } = row?.original;

					handleActivateDeactivate(rest as TBanksAndAccountsResponse);
				}}
			>
				<Box
					color="gray.900"
					fontWeight="bold"
				>
					<Text fontSize={14}>
						<FormattedMessage
							id={
								row?.original?.status === '0'
									? 'listOfBanksAndAccounts.button.deactivate'
									: 'listOfBanksAndAccounts.button.activate'
							}
						/>
					</Text>
				</Box>
			</Button>
		</Flex>
	</Flex>
);
