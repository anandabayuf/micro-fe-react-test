import { Box, Text, Flex, Button, useMediaQuery } from '@chakra-ui/react';
import type React from 'react';
import { useCallback, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { FormattedMessage, useIntl } from 'react-intl';

import { SearchBar, CustomTable } from 'lib/components/userManagement';
import type { SortProps } from 'lib/components/userManagement/CustomTable/types';
import ModalDelete from 'lib/components/userManagement/modal/delete';
import StepModal from 'lib/components/userManagement/modal/steps';
import { roleTableHeaders, roleTableHeadersMobile } from 'lib/constants';
import { useToastWrapper } from 'lib/hooks/useAppToast';
import { Spinner } from '@chakra-ui/react';
import addGroup from 'lib/services/api/userManagement/group/addGroup';
import delGroupManagement from 'lib/services/api/userManagement/group/deleteGroup';
import editGroup from 'lib/services/api/userManagement/group/editGroup';
import { useConnectedUserGroup } from 'lib/services/api/userManagement/group/getUserGroup';
import { useUserManagement } from 'lib/store/userManagement';
import type { TabPropsType } from 'lib/types/UserManagement';

import DeleteBody from './deleteBody';
import { RenderMobileTable } from './mobileTable';
import { steps } from './steps';

const RoleTab: React.FC<TabPropsType> = ({ id }) => {
	const intl = useIntl();
	const [isMobile] = useMediaQuery('(max-width: 768px)');
	const [searchText, setSearchText] = useState('');
	const [cellDelete, setCellDelete] = useState<number | null>(null);
	const [cellEdit, setCellEdit] = useState<string | null>(null);
	const [isOpen, setOpen] = useState<boolean>(false);
	const [isLoading, setLoading] = useState<boolean>(false);

	const [sort, setSort] = useState<SortProps['sortBy']>([]);
	const [page, setPage] = useState<number>(0);
	const [pageSizeUser, setPageSize] = useState<number>(10);
	const { data: userManagementGroupList, mutate } = useConnectedUserGroup({
		direction: sort[0]?.desc ? 'DESC' : 'ASC' ?? 'DESC',
		size: pageSizeUser,
		page: page ?? 0,
		sortBy: sort[0]?.id ?? 'name',
		searchValue: searchText,
	});

	const { setFormGroup, formGroup, setActiveSteps, resetFormGroup } =
		useUserManagement();

	const userManagementGroups = userManagementGroupList?.content;

	const handleSort = useCallback(
		({ sortBy, pageSize, pageIndex }: SortProps) => {
			setSort(sortBy);
			setPage(pageIndex);
			setPageSize(pageSize);
		},
		[]
	);

	const toast = useToastWrapper();

	const handleTextChange = (text: string) => setSearchText(text);

	const handleEditOpen = (id: number) => {
		const groups = userManagementGroups;
		if (groups) {
			setFormGroup({
				...groups[id],
				code: userManagementGroups[id].id,
				menuList: groups[id].details.menuList,
			});
			setCellEdit(userManagementGroups[id].id);
		}
	};

	const handleCloseEdit = () => setCellEdit(null);

	const handleNewGroup = () => setOpen(true);

	const handleCloseNewGroup = () => setOpen(false);

	const handleMobileRender = (row: any) => (
		<RenderMobileTable
			id={id}
			row={row}
			handleEditOpen={handleEditOpen}
			setCellDelete={setCellDelete}
		/>
	);

	const getDeleteId = (index: number) => {
		if (userManagementGroups) {
			return userManagementGroups[index]?.id;
		}
		return '';
	};

	const handleDelete = () => {
		setLoading(true);
		return delGroupManagement(getDeleteId(cellDelete ?? 0))
			.then(() => {
				setLoading(false);
				toast({
					status: 'success',
					description: intl.formatMessage({
						id: 'successDeleteGroup',
					}),
				});
				mutate();
				return true;
			})
			.catch(() => {
				setLoading(false);
				return true;
			});
	};

	const handleEdit = () => {
		setLoading(true);
		const body = {
			...formGroup,
			id: cellEdit,
			description: '',
		};
		editGroup(body)
			.then(() => {
				mutate();
				toast({
					status: 'success',
					description: intl.formatMessage({ id: 'successEditGroup' }),
				});
				setActiveSteps(0);
				setLoading(false);
				handleCloseEdit();
				resetFormGroup();
			})
			.catch(() => {
				setLoading(false);
			});
	};

	const handleCreate = () => {
		setLoading(true);
		const body = {
			...formGroup,
			userList: [],
			description: '',
		};
		addGroup(body)
			.then(() => {
				mutate();
				toast({
					status: 'success',
					description: intl.formatMessage({ id: 'successAddGroup' }),
				});
				handleCloseNewGroup();
				setLoading(false);
				setActiveSteps(0);
				resetFormGroup();
			})
			.catch(() => {
				setLoading(false);
			});
	};

	return (
		<>
			<Box>
				{!userManagementGroups ? (
					<Flex
						justifyContent="center"
						alignItems="center"
						minH="50vh"
					>
						<Spinner
							width={32}
							height={32}
						/>
					</Flex>
				) : (
					<Box>
						<Box>
							<Flex
								direction={{ base: 'column', md: 'row' }}
								justifyContent="space-between"
								alignItems="center"
							>
								<SearchBar
									id={id}
									value={searchText}
									onChange={handleTextChange}
									placeHolder={intl.formatMessage({
										id: 'searchGroup',
									})}
								/>
								<Button
									id={`${id}-create-group-btn`}
									leftIcon={<FaPlus />}
									onClick={handleNewGroup}
								>
									<Text fontWeight={400}>
										<FormattedMessage id="createGroup" />
									</Text>
								</Button>
							</Flex>
							{userManagementGroups &&
							userManagementGroups.length > 0 ? (
								<CustomTable
									id={id}
									onSort={handleSort}
									totalPage={
										userManagementGroupList?.totalRecord
									}
									columns={
										isMobile
											? roleTableHeadersMobile
											: roleTableHeaders
									}
									tableData={userManagementGroups}
									defaultItemPerPage={pageSizeUser}
									defaultPageNumber={page}
									handleDeleteItem={setCellDelete}
									handleEditItem={handleEditOpen}
									renderRowSubComponent={handleMobileRender}
								/>
							) : (
								<Flex
									flex={1}
									justifyContent="center"
									alignItems="center"
									flexDirection="column"
									minH="50vh"
									fontWeight={400}
									fontSize={16}
								>
									<Text
										color="gray.900"
										textAlign="center"
										my={8}
									>
										Anda belum memiliki group.
										<br />
										Silakan membuat group terlebih dahulu.
									</Text>
								</Flex>
							)}
						</Box>
					</Box>
				)}
			</Box>
			<ModalDelete
				id={id}
				cellSelect={cellDelete ?? null}
				title={intl.formatMessage({ id: 'deleteGroup' })}
				description={intl.formatMessage({
					id: 'deleteGroupConfirmation',
				})}
				note={intl.formatMessage({ id: 'deleteGroupNote' })}
				setCellSelect={setCellDelete}
				onDelete={handleDelete}
			>
				<DeleteBody
					cellDelete={cellDelete ?? 0}
					userManagementGroups={userManagementGroups ?? []}
				/>
			</ModalDelete>
			<StepModal
				id={`${id}-edit-group`}
				onClose={handleCloseEdit}
				isOpen={cellEdit !== null}
				title={intl.formatMessage({ id: 'editGroup' })}
				onComplete={handleEdit}
				steps={steps({ id: `${id}-edit-group-modal` })}
				isLoading={isLoading}
			/>
			<StepModal
				id={`${id}-create-group`}
				isOpen={isOpen}
				onClose={handleCloseNewGroup}
				title={intl.formatMessage({ id: 'createGroup' })}
				onComplete={handleCreate}
				steps={steps({ id: `${id}-create-group-modal` })}
				isLoading={isLoading}
			/>
		</>
	);
};

export default RoleTab;
