import {
	AppStepsProps,
	NewComponentProps,
	StepsModel,
} from 'lib/components/OtherBankAccount/types';
import { useOtherBankAccount } from 'lib/store/otherBankAccount';
import React from 'react';
import StepOne from '../Form/StepOne';
import StepTwo from '../Form/StepTwo';
import { FormBankAndAccountType, TPayloadEditOtherBank } from '../../../types';
import editBankAndAccount from 'lib/services/api/otherBankAccount/listOfBanksAndAccounts/editBankAndAccount';

const withEditBankAndAccount = (
	Component: React.ComponentType<AppStepsProps>
) => {
	const NewComponent: React.FC<NewComponentProps> = ({ handleClose }) => {
		const { activeStep, selectedBankAndAccount, setModalState } =
			useOtherBankAccount();

		const [isLoading, setIsLoading] = React.useState(false);

		const handleSubmit = (values: FormBankAndAccountType) => {
			if (!selectedBankAndAccount) return;

			setIsLoading(true);

			const payload: TPayloadEditOtherBank = {
				...values,
				id: selectedBankAndAccount?.id,
				status: selectedBankAndAccount?.status,
			};

			editBankAndAccount(payload)
				.then(() => {
					handleClose();
					setModalState({
						isOpen: true,
						type: 'SUCCESS',
						message: 'listOfBanksAndAccounts.message.success.edit',
					});
				})
				.finally(() => {
					setIsLoading(false);
				});
		};

		const STEPS_COMPONENTS: StepsModel[] = [
			{
				label: 'step-one',
				content: <StepOne isEditing />,
			},
			{
				label: 'step-two',
				content: (
					<StepTwo
						handleSubmit={handleSubmit}
						isEditing
						isLoading={isLoading}
					/>
				),
			},
		];

		return (
			<Component
				activeStep={activeStep}
				steps={STEPS_COMPONENTS}
			/>
		);
	};

	return NewComponent;
};

export default withEditBankAndAccount;
