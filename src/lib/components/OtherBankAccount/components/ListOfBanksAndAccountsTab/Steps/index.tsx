import React from 'react';
import { Step, Steps } from 'chakra-ui-steps';
import { AppStepsProps } from 'lib/components/OtherBankAccount/types';

const AppSteps: React.FC<AppStepsProps> = ({ activeStep, steps }) => {
	return (
		<Steps
			activeStep={activeStep}
			responsive={false}
		>
			{steps.map(({ label, content }, index) => (
				<Step key={label}>{content}</Step>
			))}
		</Steps>
	);
};

export default AppSteps;
