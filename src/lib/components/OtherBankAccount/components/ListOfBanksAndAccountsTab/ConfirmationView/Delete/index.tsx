import { Button, Container, Flex, Text } from '@chakra-ui/react';
import { ConfirmationViewProps } from 'lib/components/OtherBankAccount/types';
import deleteBankAndAccount from 'lib/services/api/otherBankAccount/listOfBanksAndAccounts/deleteBankAndAccount';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useOtherBankAccount } from '../../../../../../store/otherBankAccount';
import { TPayloadDeleteOtherBank } from '../../../../types';

const DeleteConfirmationView: React.FC<ConfirmationViewProps> = ({
	handleClose,
}) => {
	const { selectedBankAndAccount, setModalState } = useOtherBankAccount();
	const [isLoading, setIsLoading] = React.useState(false);

	const handleDelete = () => {
		if (!selectedBankAndAccount?.id) return;
		setIsLoading(true);

		const payload: TPayloadDeleteOtherBank = {
			id: selectedBankAndAccount?.id,
		};

		deleteBankAndAccount(payload)
			.then(() => {
				handleClose();
				setModalState({
					isOpen: true,
					type: 'SUCCESS',
					message: 'listOfBanksAndAccounts.message.success.delete',
				});
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<Container paddingY={4}>
			<Text
				mb={4}
				textAlign="justify"
			>
				<FormattedMessage id="listOfBanksAndAccounts.delete.confirmation" />
			</Text>

			<Container
				borderColor={'orange.500'}
				borderWidth="1px"
				roundedTop={8}
				paddingY={4}
			>
				<Flex>
					<Text flex={1}>
						<FormattedMessage id="listOfBanksAndAccounts.label.bankName" />
					</Text>

					<Text
						flex={1}
						fontWeight="bold"
					>
						{selectedBankAndAccount?.bankName}
					</Text>
				</Flex>
			</Container>
			<Container
				borderColor={'orange.500'}
				borderWidth="1px"
				borderTop={'none'}
				roundedBottom={8}
				paddingTop={4}
				paddingBottom={40}
			>
				<Flex>
					<Text flex={1}>
						<FormattedMessage id="listOfBanksAndAccounts.label.accountNo" />
					</Text>

					<Text flex={1}>
						{selectedBankAndAccount?.accountNumber}
					</Text>
				</Flex>
			</Container>

			<Text mt={4}>
				<FormattedMessage id="listOfBanksAndAccounts.delete.helper" />
			</Text>

			<Button
				mt={4}
				variant={'outline'}
				w="full"
				isLoading={isLoading}
				onClick={handleDelete}
			>
				<FormattedMessage id="listOfBanksAndAccounts.button.delete" />
			</Button>
		</Container>
	);
};

export default DeleteConfirmationView;
