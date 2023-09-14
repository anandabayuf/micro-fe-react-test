import { Flex, useCheckbox, chakra, Text, Icon } from '@chakra-ui/react';
import type { UseCheckboxProps } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { changeIntoIdFormat } from 'lib/utils/id';

interface CheckboxWrapperType extends UseCheckboxProps {
	label: string;
	id?: string;
}

const UserGroupCheckBox = (props: CheckboxWrapperType) => {
	const { label, id } = props;
	const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
		useCheckbox(props);

	return (
		<chakra.label
			display="flex"
			flexDirection="row"
			alignItems="center"
			gridColumnGap={2}
			cursor="pointer"
			{...htmlProps}
			id={`${id}-form-input-checkbox-${changeIntoIdFormat(label)}`}
		>
			<input
				id={`${id}-form-input-${changeIntoIdFormat(label)}`}
				{...getInputProps()}
				hidden
			/>
			<Flex
				id={`${id}-form-checkbox-${changeIntoIdFormat(label)}`}
				alignItems="center"
				justifyContent="center"
				border="2px solid"
				borderColor="gray.400"
				w={6}
				h={6}
				rounded="full"
				{...getCheckboxProps()}
			>
				{state.isChecked && (
					<Icon
						w={6}
						h={6}
						as={FaCheckCircle}
						color="orange.500"
					/>
				)}
			</Flex>
			<Text
				fontWeight={700}
				fontSize={16}
				pl={2}
				{...getLabelProps()}
			>
				{label}
			</Text>
		</chakra.label>
	);
};

export default UserGroupCheckBox;
