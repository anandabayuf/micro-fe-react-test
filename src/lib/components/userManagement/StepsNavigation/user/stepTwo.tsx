import {
	Flex,
	Text,
	Box,
	Radio,
	RadioGroup,
	Button,
	Spinner,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

import { useConnectedUserGroup } from 'lib/services/api/userManagement/user/getUserGroup';
import { useUserManagement } from 'lib/store/userManagement';
import { changeIntoIdFormat } from 'lib/utils/id';

type StepTwoUserProps = {
	id?: string;
};

export const StepTwoUser = ({ id }: StepTwoUserProps) => {
	const { data } = useConnectedUserGroup({
		direction: 'DESC',
		page: 0,
		sortBy: 'name',
		size: 100,
	});
	const { activeStep, setActiveSteps, setFormUser, formUser } =
		useUserManagement();

	const prevStep = () => setActiveSteps(activeStep - 1);
	const nextStep = () => setActiveSteps(activeStep + 1);

	const handleSelect = (nextValue: string) => {
		setFormUser({ ...formUser, userGroupId: nextValue });
	};

	const defaultValue = data?.content?.find(
		(group) => group.id === formUser?.userGroupId
	);

	const checkDefaultValue = defaultValue
		? `${defaultValue?.id}:${defaultValue?.admin}:${defaultValue?.name}`
		: formUser?.userGroupId;

	useEffect(() => {
		setFormUser({
			...formUser,
			userGroupId: checkDefaultValue,
		});
	}, [checkDefaultValue]);

	return (
		<Flex
			mt={8}
			gap={4}
			flexDir="column"
			maxH="70vh"
		>
			<Text
				fontWeight={400}
				fontSize={16}
			>
				<FormattedMessage id="chooseGroup" />
			</Text>
			<Box overflowY="scroll">
				<RadioGroup
					onChange={handleSelect}
					value={formUser?.userGroupId}
					gap={6}
					display="flex"
					flexDir="column"
				>
					{!data ? (
						<Flex
							justifyContent="center"
							alignItems="center"
						>
							<Spinner size="lg" />
						</Flex>
					) : (
						data?.content?.map((item) => (
							<Box
								p={4}
								key={`checkbox-${item.name}`}
								border="1px solid"
								borderColor="gray.200"
							>
								<Radio
									id={`${id}-step-2-form-radio-${changeIntoIdFormat(
										item.name
									)}`}
									value={`${item.id}:${item.admin}:${item.name}`}
									size="md"
								>
									{item.name}
								</Radio>
							</Box>
						))
					)}
				</RadioGroup>
			</Box>
			<Flex
				gap={6}
				mt={10}
			>
				<Button
					id={`${id}-step-2-back-btn`}
					w="full"
					borderColor="gray.400"
					rounded={0}
					mb={4}
					onClick={prevStep}
				>
					<FormattedMessage id="back" />
				</Button>
				<Button
					id={`${id}-step-2-next-btn`}
					w="full"
					borderColor="gray.400"
					rounded={0}
					isDisabled={!formUser?.userGroupId}
					onClick={nextStep}
				>
					<FormattedMessage id="next" />
				</Button>
			</Flex>
		</Flex>
	);
};
