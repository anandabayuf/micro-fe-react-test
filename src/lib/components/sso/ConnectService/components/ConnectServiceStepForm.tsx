import { Flex } from '@chakra-ui/react';
import type { StepProps } from 'chakra-ui-steps';
import { Steps, Step } from 'chakra-ui-steps';
import * as React from 'react';

import { useConnectServiceFormStore } from 'lib/store/connectServiceForm';

import ConnectRequestSuccess from './ConnectRequestSuccess';
import ConnectServiceInformation from './Information';
// import SelectChannel from './SelectChannel';
import UserAuthentication from './UserAuthentication';

type ConnectServiceStepFormProps = {
	onClose: () => void;
	id?: string;
};

const ConnectServiceStepForm = ({
	onClose,
	id,
}: ConnectServiceStepFormProps) => {
	const currentStep = useConnectServiceFormStore(
		(state) => state.currentStep
	);

	const stepForm = React.useMemo(() => {
		switch (currentStep) {
			case 1:
				return (
					<ConnectServiceInformation
						id={`${id}-step-${currentStep}-connect-service-information-form`}
					/>
				);
			// case 2:
			//   return <SelectChannel />;
			case 2:
				return (
					<UserAuthentication
						id={`${id}-step-${currentStep}-user-authentication-form`}
					/>
				);
			case 3:
				return (
					<ConnectRequestSuccess
						id={`${id}-step-${currentStep}-connect-request-success-form`}
						onClose={onClose}
					/>
				);
			default:
				return <>Test</>;
		}
	}, [currentStep, onClose]);
	const showSteps = React.useMemo(() => currentStep < 4, [currentStep]);

	const steps: Array<StepProps> = Array.from(Array(2)).map(() => ({}));

	return (
		<Flex
			direction="column"
			width={{ base: 'full', md: 80 }}
			marginX="auto"
			flex={1}
		>
			{showSteps && (
				<Steps
					id={`${id}-steps`}
					responsive={false}
					activeStep={currentStep - 1}
					alignSelf="flex-start"
					paddingTop={{ base: 6, md: 0 }}
					marginBottom={8}
					height="80px"
					flex={0}
				>
					{steps.map((step, index) => (
						// eslint-disable-next-line react/no-array-index-key
						<Step
							id={`${id}-step-${index + 1}`}
							{...step}
							key={`step-${index}`}
						/>
					))}
				</Steps>
			)}
			<Flex
				direction="column"
				gap={8}
				paddingBottom={6}
				paddingTop={showSteps ? undefined : { base: 6, md: 0 }}
				flex={1}
			>
				{stepForm}
			</Flex>
		</Flex>
	);
};

export default ConnectServiceStepForm;
