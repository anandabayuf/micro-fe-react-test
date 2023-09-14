import { Flex, Button, Box, Text } from '@chakra-ui/react';
import { FormattedMessage } from 'react-intl';
import type { Cell } from 'react-table';

import type { UserModel } from 'lib/services/api/userManagement/user/getUserSearch/types';

export type Row = {
	index: number;
	cells: Cell[];
	original: UserModel;
};

interface RowMobileProps {
	handleEditOpen: (id: number) => void;
	setCellDelete: React.Dispatch<React.SetStateAction<number | null>>;
	row: Row;
	id?: string;
}

export const RenderMobileTable = ({
	row,
	handleEditOpen,
	setCellDelete,
	id,
}: RowMobileProps) => (
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
				User ID
			</Text>
			<Text
				fontSize="14px"
				color="gray.900"
				w="45%"
			>
				{row.original?.userId}
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
				Email
			</Text>
			<Text
				fontSize="14px"
				color="gray.900"
				w="45%"
			>
				{row.original?.email}
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
				No. HP
			</Text>
			<Text
				fontSize="14px"
				color="gray.900"
				w="45%"
			>
				{row.original?.mobilePhone}
			</Text>
			<Text w={10} />
		</Flex>
		<Flex
			justifyContent="flex-end"
			alignItems="center"
			wrap="wrap"
			my={1}
			flex={1}
		>
			<Button
				id={`${id}-table-row-${row.index}-edit-btn`}
				p={0}
				variant="unstyled"
				_focus={{ boxShadow: 'none' }}
				ml={4}
				onClick={() => handleEditOpen(row?.index as number)}
			>
				<Box
					color="gray.900"
					fontWeight="bold"
				>
					<Text fontSize={14}>
						<FormattedMessage id="editUser" />
					</Text>
				</Box>
			</Button>
			<Button
				id={`${id}-table-row-${row.index}-delete-btn`}
				p={0}
				variant="unstyled"
				_focus={{ boxShadow: 'none' }}
				ml={4}
				onClick={() => setCellDelete(row?.index as number)}
			>
				<Box
					color="gray.900"
					fontWeight="bold"
				>
					<Text fontSize={14}>
						<FormattedMessage id="deleteUser" />
					</Text>
				</Box>
			</Button>
		</Flex>
	</Flex>
);
