import { Button, Container, Flex, Text } from '@chakra-ui/react';
import { ConfirmationViewProps } from 'lib/components/OtherBankAccount/types';
import editBankAndAccount from 'lib/services/api/otherBankAccount/listOfBanksAndAccounts/editBankAndAccount';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useOtherBankAccount } from '../../../../../../store/otherBankAccount';
import { TPayloadEditOtherBank } from '../../../../types';

const ActivateDeactivateConfirmationView: React.FC<ConfirmationViewProps> = ({
	handleClose,
}) => {
	const { selectedBankAndAccount, setModalState } = useOtherBankAccount();

	const IS_ACTIVE = selectedBankAndAccount?.status === '0';

	const [isLoading, setIsLoading] = React.useState(false);

	const handleActivateDeactivate = () => {
		if (!selectedBankAndAccount) return;
		setIsLoading(true);

		const payload: TPayloadEditOtherBank = {
			...selectedBankAndAccount,
			status: IS_ACTIVE ? '1' : '0',
		};
		editBankAndAccount(payload)
			.then(() => {
				handleClose();
				setModalState({
					isOpen: true,
					message: IS_ACTIVE
						? 'listOfBanksAndAccounts.message.success.deactivate'
						: 'listOfBanksAndAccounts.message.success.activate',
					type: 'SUCCESS',
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
				<FormattedMessage
					id={
						IS_ACTIVE
							? 'listOfBanksAndAccounts.deactivate.confirmation'
							: 'listOfBanksAndAccounts.activate.confirmation'
					}
				/>
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
				<FormattedMessage
					id={
						IS_ACTIVE
							? 'listOfBanksAndAccounts.deactivate.helper'
							: 'listOfBanksAndAccounts.activate.helper'
					}
				/>
			</Text>

			<Button
				mt={4}
				variant={'outline'}
				w="full"
				onClick={handleActivateDeactivate}
				isLoading={isLoading}
			>
				<FormattedMessage
					id={
						IS_ACTIVE
							? 'listOfBanksAndAccounts.button.deactivate'
							: 'listOfBanksAndAccounts.button.activate'
					}
				/>
			</Button>
		</Container>
	);
};

export default ActivateDeactivateConfirmationView;
