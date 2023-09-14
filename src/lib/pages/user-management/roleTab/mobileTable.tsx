import { Flex, Box, Button, Text } from '@chakra-ui/react';
import { FormattedMessage } from 'react-intl';
import type { Cell } from 'react-table';

import { limitShowingRoleAccessMobile } from 'lib/constants';
import type { UserGroupModel } from 'lib/services/api/userManagement/group/getUserGroup/types';

export type Row = {
	index: number;
	cells: Cell[];
	original: UserGroupModel;
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
		<Text
			fontSize="14px"
			color="gray.600"
			my={2}
		>
			Menu
		</Text>
		<Flex
			alignItems="center"
			flex={1}
			wrap="wrap"
			mb={1}
		>
			{row.original.details?.menuList
				.slice(
					0,
					row.original.details?.menuList.length >
						limitShowingRoleAccessMobile
						? limitShowingRoleAccessMobile
						: row.original.details?.menuList.length
				)
				.map((item) => (
					<Box
						key={item.id}
						backgroundColor="white"
						color="orange.500"
						borderWidth={1}
						borderColor="orange.500"
						borderRadius={4}
						mr={1}
						px={2}
						py={1}
						my={1}
					>
						<Text fontSize={12}>
							{item.name}
							{item.viewOnly && ' (Read-Only)'}
						</Text>
					</Box>
				))}
			{row.original.details?.menuList.length >
				limitShowingRoleAccessMobile && (
				<Button
					id={`${id}-limit-showing-menu-btn`}
					variant="unstyled"
					_focus={{ boxShadow: 'none' }}
					p={0}
				>
					<Box
						backgroundColor="orange.500"
						color="white"
						borderWidth={1}
						borderColor="orange.500"
						borderRadius={4}
						mr={1}
						px={2}
						py={1}
					>
						<Text fontSize={12}>...</Text>
					</Box>
				</Button>
			)}
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
						<FormattedMessage id="editGroup" />
					</Text>
				</Box>
			</Button>
			<Button
				id={`${id}-table-row-${row.index}-delete-btn`}
				p={0}
				variant="unstyled"
				_focus={{ boxShadow: 'none' }}
				ml={4}
			>
				<Box
					color="gray.900"
					fontWeight="bold"
					onClick={() => setCellDelete(row?.index as number)}
				>
					<Text fontSize={14}>
						<FormattedMessage id="deleteGroup" />
					</Text>
				</Box>
			</Button>
		</Flex>
	</Flex>
);
