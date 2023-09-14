import {
	AppStepsProps,
	NewComponentProps,
	StepsModel,
} from 'lib/components/OtherBankAccount/types';
import { useOtherBankAccount } from 'lib/store/otherBankAccount';
import React from 'react';
import StepOne from '../Form/StepOne';
import StepTwo from '../Form/StepTwo';
import { FormBankAndAccountType, TPayloadAddOtherBank } from '../../../types';
import addBankAndAccount from 'lib/services/api/otherBankAccount/listOfBanksAndAccounts/addBankAndAccount';

const withAddNewBankAndAccount = (
	Component: React.ComponentType<AppStepsProps>
) => {
	const NewComponent: React.FC<NewComponentProps> = ({ handleClose }) => {
		const { activeStep, setModalState } = useOtherBankAccount();
		const [isLoading, setIsLoading] = React.useState(false);

		const handleSubmit = (values: FormBankAndAccountType) => {
			setIsLoading(true);
			const payload: TPayloadAddOtherBank = {
				...values,
			};

			addBankAndAccount(payload)
				.then(() => {
					handleClose();
					setModalState({
						isOpen: true,
						type: 'SUCCESS',
						message: 'listOfBanksAndAccounts.message.success.add',
					});
				})
				.finally(() => {
					setIsLoading(false);
				});
		};

		const STEPS_COMPONENTS: StepsModel[] = [
			{
				label: 'step-one',
				content: <StepOne />,
			},
			{
				label: 'step-two',
				content: (
					<StepTwo
						handleSubmit={handleSubmit}
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

export default withAddNewBankAndAccount;
