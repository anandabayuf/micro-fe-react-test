import {
	Flex,
	Text,
	Box,
	IconButton,
	Icon,
	MenuButton,
	Menu,
	MenuItem,
	MenuList,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import {
	FiCheck,
	FiX,
	FiEdit,
	FiTrash2,
	FiChevronUp,
	FiChevronDown,
	FiMoreVertical,
} from 'react-icons/fi';
import { FormattedMessage } from 'react-intl';
import type { Cell } from 'react-table';

import { limitShowingRoleAccess } from 'lib/constants';

import type { CellItemPropsType } from './types';

const StatusBox = ({
	cell,
	isFirstColumn,
}: {
	cell: Cell<object>;
	isFirstColumn: boolean;
}) => {
	const status = () => {
		if (cell.value === '0') {
			return 'active';
		}
		if (cell.value === '1') {
			return 'inactive';
		}
		return 'locked';
	};

	return (
		<Flex
			alignSelf="center"
			justifyContent="center"
			w={cell.column.width}
			maxW={cell.column.maxWidth}
			minW={cell.column.minWidth}
			h={10}
			bg={cell.value === '0' ? 'teal.500' : 'supportingRed.500'}
			borderRadius={4}
			py={2}
			overflow="hidden"
		>
			<Text
				color="white"
				px={1}
				fontSize={{ base: 14, md: 16 }}
				maxW={cell.column.width}
				fontWeight={isFirstColumn ? 'bold' : 400}
				textTransform="capitalize"
			>
				<FormattedMessage id={status()} />
			</Text>
		</Flex>
	);
};

const CellItem = ({
	cell,
	isFirstColumn,
	isUseMenu,
	// handleDetailItem,
	handleStatusItem,
	handleSessionItem,
	handleDeleteItem,
	handleEditItem,
	id,
}: CellItemPropsType) => {
	if (cell.column.id === 'status') {
		return (
			<StatusBox
				cell={cell}
				isFirstColumn={isFirstColumn}
			/>
		);
	}
	if (typeof cell.value === 'boolean') {
		return (
			<Flex
				alignItems="center"
				w={cell.column.width}
				maxW={cell.column.maxWidth}
				minW={cell.column.minWidth}
			>
				{cell.value ? (
					<FiCheck
						color="gray.900"
						size={20}
					/>
				) : (
					<FiX
						color="gray.900"
						size={20}
					/>
				)}
			</Flex>
		);
	}

	if (cell.column.id === 'expander') {
		return (
			<Flex
				id={`${id}-cell-item-expander-btn`}
				alignItems="center"
				justifyContent="center"
				w={cell.column.width}
				{...cell.row.getToggleRowExpandedProps()}
			>
				{cell.row.isExpanded ? (
					<FiChevronUp
						color="gray.900"
						size={20}
					/>
				) : (
					<FiChevronDown
						color="gray.900"
						size={20}
					/>
				)}
			</Flex>
		);
	}

	if (cell.column.id === 'userManagementGroup') {
		const listMenu = cell.value.menuList;
		return (
			<Flex
				alignItems="center"
				flexDir={{ base: 'column', md: 'row' }}
				flexWrap="wrap"
				minW={cell.column.minWidth}
				gap={2}
				w="full"
			>
				{listMenu
					.slice(
						0,
						cell.value.length > limitShowingRoleAccess
							? limitShowingRoleAccess
							: cell.value.length
					)
					.map(
						(cellDetail: {
							id: number;
							name: string;
							viewOnly: boolean;
						}) => (
							<Box
								key={`cellValue-${cellDetail.id}`}
								backgroundColor="white"
								borderColor="orange.500"
								color="orange.500"
								borderWidth={1}
								borderRadius={4}
								mr={1}
								px={2}
								py={1}
								my={1}
							>
								<Text fontSize={12}>
									{cellDetail.name}
									{cellDetail.viewOnly && ' (Read-Only)'}
								</Text>
							</Box>
						)
					)}
				{/* {cell.value.length > limitShowingRoleAccess && handleDetailItem && (
          <Button
            variant="unstyled"
            _focus={{ boxShadow: 'none' }}
            p={0}
            onClick={() => handleDetailItem(Number(cell.row.id))}
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
              my={1}
            >
              <Text fontSize={12}>...</Text>
            </Box>
          </Button>
        )} */}
			</Flex>
		);
	}

	if (cell.column.id === 'actions') {
		return (
			<Flex
				ml={2}
				justifyContent="flex-end"
				alignItems="center"
				w={cell.column.width}
				maxW={cell.column.maxWidth}
				minW={cell.column.minWidth}
			>
				{isUseMenu ? (
					<Menu id={`${id}-cell-item-menu`}>
						<MenuButton
							id={`${id}-cell-item-menu-btn`}
							as={IconButton}
							w={0}
							h={0}
							icon={
								<Icon
									as={FiMoreVertical}
									color="orange.500"
									fontSize={20}
								/>
							}
							variant="unstyled"
							_focus={{ boxShadow: 'none' }}
							display="flex"
							alignItems="center"
							aria-label="Open Menu button"
						/>
						<MenuList
							id={`${id}-cell-item-menu-list`}
							minW="150px"
							textTransform="capitalize"
						>
							<MenuItem
								id={`${id}-cell-item-menu-list-item-unlock`}
								onClick={() =>
									handleStatusItem &&
									handleStatusItem(Number(cell.row.id))
								}
							>
								<FormattedMessage id="unlock" />
							</MenuItem>
							<MenuItem
								id={`${id}-cell-item-menu-list-item-release-session`}
								onClick={() =>
									handleSessionItem &&
									handleSessionItem(Number(cell.row.id))
								}
							>
								<FormattedMessage id="releaseSession" />
							</MenuItem>
							<MenuItem
								id={`${id}-cell-item-menu-list-item-edit`}
								onClick={() =>
									handleEditItem(Number(cell.row.id))
								}
							>
								<FormattedMessage id="edit" />
							</MenuItem>
							<MenuItem
								id={`${id}-cell-item-menu-list-item-delete`}
								onClick={() =>
									handleDeleteItem(Number(cell.row.id))
								}
							>
								<FormattedMessage id="delete" />
							</MenuItem>
						</MenuList>
					</Menu>
				) : (
					<>
						<IconButton
							id={`${id}-cell-item-edit-btn`}
							w={0}
							h={0}
							variant="unstyled"
							_focus={{ boxShadow: 'none' }}
							display="flex"
							alignItems="center"
							aria-label="Edit Icon button"
							onClick={() => handleEditItem(Number(cell.row.id))}
						>
							<Icon
								as={FiEdit}
								color="orange.500"
								fontSize={20}
							/>
						</IconButton>
						<IconButton
							id={`${id}-cell-item-delete-btn`}
							variant="unstyled"
							_focus={{ boxShadow: 'none' }}
							display="flex"
							alignItems="center"
							aria-label="Delete Icon button"
							onClick={() =>
								handleDeleteItem(Number(cell.row.id))
							}
						>
							<Icon
								as={FiTrash2}
								color="orange.500"
								fontSize={20}
							/>
						</IconButton>
					</>
				)}
			</Flex>
		);
	}

	return (
		<Flex
			alignItems="center"
			w={cell.column.width}
			maxW={cell.column.maxWidth}
			minW={cell.column.minWidth}
			my={{ base: 1, md: 2 }}
			bg="orange.50"
			overflow="hidden"
		>
			<Text
				noOfLines={1}
				color="gray.900"
				fontSize={{ base: 14, md: 16 }}
				mr={4}
				maxW={cell.column.width}
				fontWeight={isFirstColumn ? 'bold' : 400}
			>
				{cell.column.id === 'createdDate'
					? format(new Date(cell.value), 'yyyy-MMM-dd')
					: cell.render('Cell')}
			</Text>
		</Flex>
	);
};

export default CellItem;
