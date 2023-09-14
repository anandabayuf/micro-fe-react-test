import {
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	useBreakpointValue,
	Box,
	ModalCloseButton,
	Flex,
	Button,
} from '@chakra-ui/react';
import { Step, Steps } from 'chakra-ui-steps';
import { FormattedMessage } from 'react-intl';

import { useUserManagement } from 'lib/store/userManagement';

interface StepsModel {
	label: string;
	content: JSX.Element;
}

interface StepModalProps {
	title: string;
	steps: StepsModel[];
	children?: JSX.Element;
	onClose: () => void;
	isOpen?: boolean;
	onComplete: () => void;
	isLoading?: boolean;
	id?: string;
}

const StepModal = ({
	title,
	children,
	steps,
	onClose,
	isOpen,
	onComplete,
	isLoading,
	id,
}: StepModalProps) => {
	const modalSize = useBreakpointValue({ base: 'full', md: 'md' });
	const { activeStep, setActiveSteps, setFormUser, resetFormGroup } =
		useUserManagement();

	const prevStep = () => setActiveSteps(activeStep - 1);

	const reset = () => setActiveSteps(0);

	const handleClose = () => {
		reset();
		setFormUser(null);
		resetFormGroup();
		onClose();
	};

	return (
		<Modal
			id={`${id}-modal`}
			isOpen={isOpen ?? false}
			size={modalSize}
			onClose={handleClose}
			isCentered
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{title}</ModalHeader>
				<ModalCloseButton id={`${id}-modal-close-btn`} />
				<ModalBody mt={6}>
					<Steps
						id={`${id}-modal-steps`}
						activeStep={activeStep}
						responsive={false}
					>
						{steps.map(({ label, content }, index) => (
							<Step
								id={`${id}-modal-step-${index + 1}`}
								key={label}
							>
								{content}
							</Step>
						))}
					</Steps>
					<Box mt={6}>{children}</Box>
					{steps.length - 1 === activeStep && (
						<Flex
							gap={6}
							mt={10}
						>
							<Button
								id={`${id}-modal-step-${
									activeStep + 1
								}-back-btn`}
								w="full"
								borderColor="gray.400"
								rounded={0}
								mb={4}
								onClick={prevStep}
							>
								<FormattedMessage id="back" />
							</Button>
							<Button
								id={`${id}-modal-step-${activeStep + 1}-${
									steps.length - 1 === activeStep
										? 'save'
										: 'next'
								}-btn`}
								w="full"
								borderColor="gray.400"
								rounded={0}
								onClick={onComplete}
								isLoading={isLoading}
							>
								{steps.length - 1 === activeStep ? (
									<FormattedMessage id="save" />
								) : (
									<FormattedMessage id="next" />
								)}
							</Button>
						</Flex>
					)}
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default StepModal;
