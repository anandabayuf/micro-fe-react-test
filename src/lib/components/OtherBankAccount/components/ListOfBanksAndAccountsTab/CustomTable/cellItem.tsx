import {
	Flex,
	Icon,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	Tooltip,
} from '@chakra-ui/react';
import { CellItemPropsType } from 'lib/components/OtherBankAccount/types';
import { parseAccountType } from 'lib/components/OtherBankAccount/utils';
import {
	FiChevronUp,
	FiChevronDown,
	FiTrash2,
	FiEdit,
	FiMoreVertical,
} from 'react-icons/fi';
import StatusBox from '../StatusBox';
import { FormattedMessage, useIntl } from 'react-intl';
import { TBanksAndAccountsResponse } from '../../../types';

const CellItem: React.FC<CellItemPropsType> = ({
	cell,
	isFirstColumn,
	id,
	handleEdit,
	handleActivateDeactivate,
	handleDelete,
}) => {
	const { formatMessage } = useIntl();

	if (cell.column.id === 'status') {
		return (
			<StatusBox
				maxWidth={cell.column.maxWidth}
				minWidth={cell.column.minWidth}
				value={cell.value}
				width={cell.column.width}
				isFirstColumn={isFirstColumn}
			/>
		);
	}

	if (cell.column.id === 'bankName')
		return (
			<Flex
				alignItems="center"
				w={cell.column.width}
				maxW={cell.column.maxWidth}
				minW={cell.column.minWidth}
				my={{ base: 1, md: 2 }}
				overflow="hidden"
			>
				<Tooltip label={cell.value}>
					<Text
						noOfLines={1}
						color="gray.900"
						fontSize={{ base: 14, md: 16 }}
						mr={4}
						maxW={cell.column.width}
						fontWeight={isFirstColumn ? 'bold' : 400}
					>
						{cell.render('Cell')}
					</Text>
				</Tooltip>
			</Flex>
		);

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
				<IconButton
					id={`${id}-cell-item-edit-btn`}
					w={0}
					h={0}
					variant="unstyled"
					_focus={{ boxShadow: 'none' }}
					display="flex"
					alignItems="center"
					aria-label="Edit Icon button"
					onClick={() => {
						if (!handleEdit) return;

						const { actions, ...rest } = cell.row.values;

						handleEdit(rest as TBanksAndAccountsResponse);
					}}
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
					onClick={() => {
						if (!handleDelete) return;

						const { actions, ...rest } = cell.row.values;

						handleDelete(rest as TBanksAndAccountsResponse);
					}}
				>
					<Icon
						as={FiTrash2}
						color="orange.500"
						fontSize={20}
					/>
				</IconButton>
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
							onClick={() => {
								if (!handleActivateDeactivate) return;

								const { actions, ...rest } = cell.row.values;

								handleActivateDeactivate(
									rest as TBanksAndAccountsResponse
								);
							}}
						>
							<FormattedMessage
								id={
									cell.row.values.status === '0'
										? 'listOfBanksAndAccounts.button.deactivate'
										: 'listOfBanksAndAccounts.button.activate'
								}
							/>
						</MenuItem>
					</MenuList>
				</Menu>
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
				{cell.column.id === 'accountType'
					? formatMessage({ id: parseAccountType(cell.value) })
					: cell.render('Cell')}
			</Text>
		</Flex>
	);
};

export default CellItem;
