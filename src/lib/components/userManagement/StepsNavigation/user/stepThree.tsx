import { Button, Flex, Radio, RadioGroup, Text } from '@chakra-ui/react';
import { FormattedMessage } from 'react-intl';

import { useUserManagement } from 'lib/store/userManagement';

type StepThreeUserProps = {
	id?: string;
};

export const StepThreeUser = ({ id }: StepThreeUserProps) => {
	const { activeStep, setActiveSteps, formUser, setFormUser } =
		useUserManagement();

	const prevStep = () => setActiveSteps(activeStep - 1);
	const nextStep = () => setActiveSteps(activeStep + 1);

	const handleSelect = (value: string) =>
		setFormUser({ ...formUser, role: value });

	return (
		<Flex
			mt={8}
			gap={4}
			flexDir="column"
		>
			<Text
				fontWeight={400}
				fontSize={16}
			>
				<FormattedMessage id="chooseRole" />
			</Text>
			<Flex
				flexDir="column"
				gap={6}
			>
				<RadioGroup
					onChange={handleSelect}
					value={formUser?.role ?? ''}
				>
					{formUser?.userGroupId?.split(':')[1] === 'true' ? (
						<>
							<Radio
								id={`${id}-step-3-form-radio-user-role-maker-approver`}
								textTransform="uppercase"
								value="MAKER_APPROVER"
								size="md"
							>
								<FormattedMessage id="maker" />{' '}
								<FormattedMessage id="and" />{' '}
								<FormattedMessage id="approver" />
							</Radio>
							<Text
								mt={1}
								color="gray.500"
								pl={6}
								fontWeight={500}
							>
								<FormattedMessage id="approverNote" />
							</Text>
						</>
					) : (
						<>
							<Radio
								id={`${id}-step-3-form-radio-user-role-maker`}
								textTransform="uppercase"
								value="MAKER"
								size="md"
							>
								<FormattedMessage id="maker" />
							</Radio>
							<Text
								mt={1}
								mb={8}
								color="gray.500"
								pl={6}
								fontWeight={500}
							>
								<FormattedMessage id="makerNote" />
							</Text>
							{/* <Radio textTransform="uppercase" value="APPROVER" size="md">
                <FormattedMessage id="approver" />
              </Radio>
              <Text mt={1} color="gray.500" pl={6} fontWeight={500}>
                <FormattedMessage id="approverNote" />
              </Text> */}
						</>
					)}
				</RadioGroup>
			</Flex>
			<Flex
				gap={6}
				mt={10}
			>
				<Button
					id={`${id}-step-3-back-btn`}
					w="full"
					borderColor="gray.400"
					rounded={0}
					mb={4}
					onClick={prevStep}
				>
					<FormattedMessage id="back" />
				</Button>
				<Button
					id={`${id}-step-3-next-btn`}
					w="full"
					borderColor="gray.400"
					rounded={0}
					isDisabled={!formUser?.role}
					onClick={nextStep}
				>
					<FormattedMessage id="next" />
				</Button>
			</Flex>
		</Flex>
	);
};
