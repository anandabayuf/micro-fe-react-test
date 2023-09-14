import { useMediaQuery } from '@chakra-ui/react';
import { ListOfBanksAndAccountsTableProps } from 'lib/components/OtherBankAccount/types';
import React from 'react';
import CustomTable from '../CustomTable';
import EditModal from '../Modal/Edit';
import Columns from './Columns';
import { MobileColumns } from './MobileColumns';
import { RenderMobileTable } from './RenderMobileTable';
import { useOtherBankAccount } from 'lib/store/otherBankAccount';
import { TBanksAndAccountsResponse } from '../../../types';
import DeleteModal from '../Modal/Delete';
import ActivateDeactivateModal from '../Modal/ActivateDeactivate';

const ListOfBanksAndAccountsTable: React.FC<
	ListOfBanksAndAccountsTableProps
> = ({ data, handleSort, page, size }) => {
	const {
		setActiveSteps,
		resetFormBanksAndAccounts,
		setFormBanksAndAccounts,
		setSelectedBankAndAccount,
	} = useOtherBankAccount();

	const [isModalEditOpen, setIsModalEditOpen] = React.useState(false);
	const [isModalDeleteOpen, setIsModalDeleteOpen] = React.useState(false);
	const [isModalActivateDeactivateOpen, setIsModalActivateDeactivateOpen] =
		React.useState(false);

	const [IS_MOBILE] = useMediaQuery('(max-width: 1077px)');

	const columns = React.useMemo(() => {
		if (IS_MOBILE) return MobileColumns();

		return Columns();
	}, [IS_MOBILE]);

	const handleEdit = (values: TBanksAndAccountsResponse) => {
		const { status, id, ...rest } = values;

		setFormBanksAndAccounts(rest);
		setSelectedBankAndAccount(values);

		setIsModalEditOpen(true);
	};

	const handleCloseModalEdit = () => {
		setActiveSteps(0);
		resetFormBanksAndAccounts();
		setIsModalEditOpen(false);
	};

	const handleDelete = (values: TBanksAndAccountsResponse) => {
		setSelectedBankAndAccount(values);

		setIsModalDeleteOpen(true);
	};

	const handleCloseModalDelete = () => {
		resetFormBanksAndAccounts();
		setIsModalDeleteOpen(false);
	};

	const handleActivateDeactivate = (values: TBanksAndAccountsResponse) => {
		setSelectedBankAndAccount(values);

		setIsModalActivateDeactivateOpen(true);
	};

	const handleCloseModalActivateDeactivate = () => {
		resetFormBanksAndAccounts();
		setIsModalActivateDeactivateOpen(false);
	};

	return (
		<>
			<CustomTable
				onSort={handleSort}
				columns={columns}
				tableData={data?.content || []}
				defaultItemPerPage={size}
				defaultPageNumber={page}
				totalPage={data?.totalRecord}
				renderRowSubComponent={(row) => (
					<RenderMobileTable
						row={row}
						handleEdit={handleEdit}
						handleActivateDeactivate={handleActivateDeactivate}
						handleDelete={handleDelete}
					/>
				)}
				handleEdit={handleEdit}
				handleActivateDeactivate={handleActivateDeactivate}
				handleDelete={handleDelete}
			/>

			<EditModal
				isOpen={isModalEditOpen}
				handleClose={handleCloseModalEdit}
			/>

			<DeleteModal
				isOpen={isModalDeleteOpen}
				handleClose={handleCloseModalDelete}
			/>

			<ActivateDeactivateModal
				isOpen={isModalActivateDeactivateOpen}
				handleClose={handleCloseModalActivateDeactivate}
			/>
		</>
	);
};

export default ListOfBanksAndAccountsTable;
