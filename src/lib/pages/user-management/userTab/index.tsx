import { Box, Text, Flex, Button, useMediaQuery } from '@chakra-ui/react';
import type React from 'react';
import { useCallback, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { FormattedMessage, useIntl } from 'react-intl';

import { SearchBar, CustomTable } from 'lib/components/userManagement';
import type { SortProps } from 'lib/components/userManagement/CustomTable/types';
import ModalDelete from 'lib/components/userManagement/modal/delete';
import ModalLock from 'lib/components/userManagement/modal/lock';
import ModalSession from 'lib/components/userManagement/modal/session';
import StepModal from 'lib/components/userManagement/modal/steps';
import { userTableHeaders, userTableHeadersMobile } from 'lib/constants';
import { useToastWrapper } from 'lib/hooks/useAppToast';
import { Spinner } from '@chakra-ui/react';
import addUser from 'lib/services/api/userManagement/user/addUser';
import delUserManagement from 'lib/services/api/userManagement/user/deleteUser';
import editUserManagement from 'lib/services/api/userManagement/user/editUser';
import { useConnectedSearchUser } from 'lib/services/api/userManagement/user/getUserSearch';
import releaseUserManagement from 'lib/services/api/userManagement/user/releaseUserSession';
import unlockUserManagement from 'lib/services/api/userManagement/user/unlockUser';
import { useUserManagement } from 'lib/store/userManagement';
import type { TabPropsType } from 'lib/types/UserManagement';

import { DeleteBody } from './deleteBody';
import { LockBody } from './lockBody';
import { RenderMobileTable } from './mobileTable';
import { SessionBody } from './sessionBody';
import { steps } from './steps';

const UserTab: React.FC<TabPropsType> = ({ id }) => {
	const intl = useIntl();
	const [isMobile] = useMediaQuery('(max-width: 1077px)');
	const [searchText, setSearchText] = useState('');
	const [sort, setSort] = useState<SortProps['sortBy']>([]);
	const [page, setPage] = useState<number>(0);
	const [pageSizeUser, setPageSize] = useState<number>(10);
	const [cellStatus, setCellStatus] = useState<number | null>(null);
	const [cellSession, setCellSession] = useState<number | null>(null);
	const [cellDelete, setCellDelete] = useState<number | null>(null);
	const [cellEdit, setCellEdit] = useState<string | null>(null);
	const [isOpen, setOpen] = useState<boolean>(false);
	const [isLoading, setLoading] = useState<boolean>(false);
	const { data: listUsers, mutate } = useConnectedSearchUser({
		direction: sort[0]?.desc ? 'DESC' : 'ASC' ?? 'DESC',
		size: pageSizeUser,
		page: page ?? 0,
		sortBy: sort[0]?.id ?? 'email',
		...(searchText === '' ? {} : { searchValue: searchText }),
	});
	const toast = useToastWrapper();
	const { setFormUser, formUser, setActiveSteps } = useUserManagement();
	const body = {
		...formUser,
		userGroupId: formUser?.userGroupId?.split(':')[0],
	};

	const userData = listUsers?.content;

	const handleSort = useCallback(
		({ sortBy, pageSize, pageIndex }: SortProps) => {
			setSort(sortBy);
			setPage(pageIndex);
			setPageSize(pageSize);
		},
		[]
	);

	const handleTextChange = (text: string) => setSearchText(text);

	const handleEditOpen = (id: number) => {
		if (userData) {
			setFormUser({
				email: userData[id].email || '',
				mobilePhone: userData[id].mobilePhone || '',
				name: userData[id].name || '',
				nik: userData[id].nik || '',
				role: userData[id].role || '',
				identifier: userData[id]?.userId || '',
				userGroupId: userData[id]?.userGroup?.id || '',
			});
			setCellEdit(userData[id]?.id);
		}
	};
	const handleNewGroup = () => setOpen(true);

	const handleCloseNewUser = () => setOpen(false);

	const handleCloseEdit = () => setCellEdit(null);

	const handleMobileRender = (row: any) => (
		<RenderMobileTable
			id={id}
			row={row}
			handleEditOpen={handleEditOpen}
			setCellDelete={setCellDelete}
		/>
	);

	const catchError = () => {
		setLoading(false);
		mutate();
	};

	const handleStatus = () => {
		setLoading(true);
		return unlockUserManagement(
			userData ? userData[cellStatus ?? 0].id : ''
		)
			.then(() => {
				toast({
					status: 'success',
					description: 'unlock user berhasil',
				});
				setLoading(false);
				mutate();
				return true;
			})
			.catch(() => {
				catchError();
				return true;
			});
	};

	const handleSession = () => {
		setLoading(true);
		return releaseUserManagement(
			userData ? userData[cellSession ?? 0].id : ''
		)
			.then(() => {
				toast({
					status: 'success',
					description: 'release user berhasil',
				});
				setLoading(false);
				mutate();
				return true;
			})
			.catch(() => {
				catchError();
				return true;
			});
	};

	const handleDelete = () => {
		setLoading(true);
		return delUserManagement(userData ? userData[cellDelete ?? 0]?.id : '')
			.then(() => {
				toast({
					status: 'success',
					description: intl.formatMessage({
						id: 'successDeleteUser',
					}),
				});
				setLoading(false);
				mutate();
				return true;
			})
			.catch(() => {
				catchError();
				return true;
			});
	};

	const handleEdit = () => {
		setLoading(true);
		editUserManagement({ ...body, id: cellEdit, status: 0 })
			.then(() => {
				mutate();
				toast({
					status: 'success',
					description: intl.formatMessage({ id: 'successEditUser' }),
				});
				setLoading(false);
				handleCloseEdit();
				setActiveSteps(0);
				setFormUser(null);
			})
			.catch(() => {
				setLoading(false);
			});
	};

	const handleCreate = () => {
		setLoading(true);
		addUser(body)
			.then(() => {
				mutate();
				toast({
					status: 'success',
					description: intl.formatMessage({ id: 'successAddUser' }),
				});
				setLoading(false);
				handleCloseNewUser();
				setActiveSteps(0);
				setFormUser(null);
			})
			.catch(() => {
				setLoading(false);
			});
	};

	return (
		<>
			<Box>
				{!userData ? (
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
									id: 'searchUser',
								})}
							/>
							<Button
								id={`${id}-create-user-btn`}
								onClick={handleNewGroup}
								leftIcon={<FaPlus />}
							>
								<Text fontWeight={400}>
									<FormattedMessage id="createUser" />
								</Text>
							</Button>
						</Flex>
						{userData && userData?.length > 0 ? (
							<CustomTable
								id={id}
								onSort={handleSort}
								columns={
									isMobile
										? userTableHeadersMobile
										: userTableHeaders
								}
								tableData={userData}
								defaultItemPerPage={pageSizeUser}
								defaultPageNumber={page}
								isUseMenu
								handleStatusItem={setCellStatus}
								handleSessionItem={setCellSession}
								handleDeleteItem={setCellDelete}
								handleEditItem={handleEditOpen}
								totalPage={listUsers?.totalRecord}
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
									Anda belum memiliki daftar user.
									<br />
									Silakan menambahkan user baru terlebih
									dahulu.
								</Text>
							</Flex>
						)}
					</Box>
				)}
			</Box>
			<ModalLock
				id={id}
				cellSelect={cellStatus}
				setCellSelect={setCellStatus}
				onUnlock={handleStatus}
			>
				<LockBody
					cellSelect={cellStatus}
					userData={userData}
				/>
			</ModalLock>
			<ModalSession
				id={id}
				cellSelect={cellSession ?? null}
				setCellSelect={setCellSession}
				onRelease={handleSession}
			>
				<SessionBody
					cellSelect={cellSession ?? 0}
					userData={userData}
				/>
			</ModalSession>
			<ModalDelete
				id={id}
				cellSelect={cellDelete ?? null}
				title={intl.formatMessage({ id: 'deleteUser' })}
				description={intl.formatMessage({
					id: 'deleteUserConfirmation',
				})}
				note={intl.formatMessage({ id: 'deleteUserNote' })}
				setCellSelect={setCellDelete}
				onDelete={handleDelete}
			>
				<DeleteBody
					cellSelect={cellDelete ?? 0}
					userData={userData}
				/>
			</ModalDelete>
			<StepModal
				id={`${id}-edit-user`}
				onClose={handleCloseEdit}
				isOpen={cellEdit !== null}
				title={intl.formatMessage({ id: 'editUser' })}
				steps={steps({ id: `${id}-edit-user-modal` })}
				onComplete={handleEdit}
				isLoading={isLoading}
			/>
			<StepModal
				id={`${id}-create-user`}
				isOpen={isOpen}
				onClose={handleCloseNewUser}
				title={intl.formatMessage({ id: 'createUser' })}
				steps={steps({ id: `${id}-create-user-modal` })}
				onComplete={handleCreate}
				isLoading={isLoading}
			/>
		</>
	);
};

export default UserTab;
