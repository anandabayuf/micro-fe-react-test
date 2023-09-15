import { Stack, SimpleGrid, Text } from '@chakra-ui/react';
// import StatusBox from 'lib/components/OtherBankAccount/components/ListOfBanksAndAccountsTab/StatusBox';
// import { parseAccountType } from 'lib/components/OtherBankAccount/utils';
import { FormattedMessage } from 'react-intl';
import { ValueOtherBankAccount } from '../../../services/api/myApproval/getMyApprovalDetail/types';

interface DetailMyApprovalUserProps {
	newValue: ValueOtherBankAccount;
	oldValue: ValueOtherBankAccount;
}

const DetailMyApprovalOtherBankAccount = ({
	newValue,
	oldValue,
}: DetailMyApprovalUserProps) => {
	return (
		<Stack
			direction="column"
			w="full"
		>
			<SimpleGrid
				columns={2}
				gap={12}
			>
				<Text>
					<FormattedMessage id="listOfBanksAndAccounts.label.corporateId" />
				</Text>
				<Text>{newValue?.corporateId || oldValue?.corporateId}</Text>
			</SimpleGrid>
			<SimpleGrid
				columns={2}
				gap={12}
			>
				<Text>
					<FormattedMessage id="listOfBanksAndAccounts.label.bankName" />
				</Text>
				<Text>{newValue?.bankName || oldValue?.bankName}</Text>
			</SimpleGrid>
			<SimpleGrid
				columns={2}
				gap={12}
			>
				<Text>
					<FormattedMessage id="listOfBanksAndAccounts.label.accountNo" />
				</Text>
				<Text>
					{newValue?.accountNumber || oldValue?.accountNumber}
				</Text>
			</SimpleGrid>
			<SimpleGrid
				columns={2}
				gap={12}
			>
				<Text>
					<FormattedMessage id="listOfBanksAndAccounts.label.accountType" />
				</Text>
				<Text>
					{/* <FormattedMessage
						id={parseAccountType(
							newValue?.accountType || oldValue?.accountType
						)}
					/> */}
					{newValue?.accountType || oldValue?.accountType}
				</Text>
			</SimpleGrid>
			<SimpleGrid
				columns={2}
				gap={12}
			>
				<Text>
					<FormattedMessage id="listOfBanksAndAccounts.label.currency" />
				</Text>
				<Text>{newValue?.currency || oldValue?.currency}</Text>
			</SimpleGrid>
			<SimpleGrid
				columns={2}
				gap={12}
				alignItems="center"
			>
				<Text>
					<FormattedMessage id="listOfBanksAndAccounts.label.status" />
				</Text>
				{/* <StatusBox value={newValue?.status || oldValue?.status} /> */}
				{newValue?.status || oldValue?.status}
			</SimpleGrid>
		</Stack>
	);
};

export default DetailMyApprovalOtherBankAccount;
