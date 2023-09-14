import { Flex, Text } from '@chakra-ui/react';
import { RowMobileProps } from 'lib/components/OtherBankAccount/types';
import { FormattedMessage } from 'react-intl';
import StatusBox from '../../StatusBox';

export const RenderMobileTable: React.FC<RowMobileProps> = ({ row }) => (
	<Flex
		direction="column"
		display={{ base: 'flex', md: 'none' }}
		flex={1}
	>
		<Flex
			align="center"
			mb={2}
		>
			<Text
				fontSize="14px"
				color="gray.600"
				w="50%"
				minW={120}
			>
				<FormattedMessage id="fileProcessFailureHistory.label.bank" />
			</Text>
			<Text
				fontSize="14px"
				color="gray.900"
				w="45%"
			>
				{row.original?.bank}
			</Text>
			<Text w={10} />
		</Flex>
		<Flex
			align="center"
			mb={2}
		>
			<Text
				fontSize="14px"
				color="gray.600"
				w="50%"
				minW={120}
			>
				<FormattedMessage id="fileProcessFailureHistory.label.status" />
			</Text>
			<StatusBox value={row.original?.status} />
			<Text w={10} />
		</Flex>
		<Flex
			align="center"
			mb={2}
		>
			<Text
				fontSize="14px"
				color="gray.600"
				w="50%"
				minW={120}
			>
				<FormattedMessage id="fileProcessFailureHistory.label.additionalInformation" />
			</Text>
			<Text
				fontSize="14px"
				color="gray.900"
				w="45%"
			>
				{row.original?.additionalInformation}
			</Text>
			<Text w={10} />
		</Flex>
	</Flex>
);
