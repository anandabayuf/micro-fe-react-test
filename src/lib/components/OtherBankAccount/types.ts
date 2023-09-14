/* eslint-disable @typescript-eslint/no-explicit-any */
import { APIResponse } from 'lib/services/api/types';
import type { ReactNode } from 'react';
import type { Cell, Row, SortingRule } from 'react-table';

export type TBanksAndAccountsResponse = {
	id: string;
	bankName: string;
	accountNumber: string;
	accountType: string;
	currency: string;
	status: string;
};

export type TBanksAndAccountsApi = APIResponse<
	Array<TBanksAndAccountsResponse>
> & {
	status: string | 'SUCCESS' | 'FAILED';
	error: boolean;
	totalRecord: number;
	offset: number;
	page: number;
	size: number;
	sort: string[];
};

export type TBanksAndAccountsParams = {
	page: number;
	size: number;
	sortBy:
		| 'id'
		| 'accountNum'
		| 'bankName'
		| 'accountType'
		| 'status'
		| string;
	direction: 'ASC' | 'DESC';
	searchValue?: string;
};

export type TBankNameListResponse = {
	bankName: string[];
};

export type TCurrencyListResponse = {
	currency: string[];
};

export type TBankNameListApi = APIResponse<TBankNameListResponse>;

export type TCurrencyListApi = APIResponse<TCurrencyListResponse>;

export type TPayloadAddOtherBank = {
	bankName: string;
	accountNumber: string;
	accountType: string;
	currency: string;
};

export type TPayloadEditOtherBank = TPayloadAddOtherBank & {
	id: string;
	status: string;
};

export type TPayloadDeleteOtherBank = { id: string };

export type FormBankAndAccountType = {
	bankName: string;
	accountNumber: string;
	accountType: string;
	currency: string;
};

export type TRow = {
	index: number;
	cells: Cell[];
	original: any;
};

export type RowMobileProps = {
	row: TRow;
	handleEdit?: (values: TBanksAndAccountsResponse) => void;
	handleDelete?: (values: TBanksAndAccountsResponse) => void;
	handleActivateDeactivate?: (values: TBanksAndAccountsResponse) => void;
};

export type StatusBoxProps = {
	value?: any;
	maxWidth?: number;
	minWidth?: number;
	width?: string | number;
	isFirstColumn?: boolean;
};

export type SortProps = {
	sortBy: SortingRule<object>[];
	pageIndex: number;
	pageSize: number;
};

export type CustomTablePropsType = {
	onSort?: ({ sortBy, pageIndex, pageSize }: SortProps) => void;
	tableData: any;
	columns: any;
	defaultItemPerPage: number;
	defaultPageNumber: number;
	totalPage?: number | 0;
	renderRowSubComponent: (row: Row<object>) => ReactNode;
	id?: string;
	handleEdit?: (values: TBanksAndAccountsResponse) => void;
	handleDelete?: (values: TBanksAndAccountsResponse) => void;
	handleActivateDeactivate?: (values: TBanksAndAccountsResponse) => void;
};

export type CellItemPropsType = {
	cell: Cell<object>;
	isFirstColumn: boolean;
	id?: string;
	handleEdit?: (values: TBanksAndAccountsResponse) => void;
	handleDelete?: (values: TBanksAndAccountsResponse) => void;
	handleActivateDeactivate?: (values: TBanksAndAccountsResponse) => void;
};

export type StepsModel = {
	label: string;
	content: JSX.Element;
};

export type StepsModalProps = {
	title: string;
	steps: StepsModel[];
	children?: JSX.Element;
	onClose: () => void;
	isOpen?: boolean;
	onComplete: () => void;
	isLoading?: boolean;
};

export type ModalState = {
	isOpen: boolean;
	type: 'SUCCESS' | 'FAILED' | null;
	message: string | null;
};

export type OtherBankAccountStoreVariable = {
	formBanksAndAccounts: FormBankAndAccountType | null;
	activeStep: number;
	selectedBankAndAccount: TBanksAndAccountsResponse | null;
	modal: ModalState;
	bankName: TBankNameListApi | null;
	currency: TCurrencyListApi | null;
};

export type OtherBankAccountStore = OtherBankAccountStoreVariable & {
	setFormBanksAndAccounts: (
		formBanksAndAccounts: FormBankAndAccountType | null
	) => void;
	resetFormBanksAndAccounts: () => void;
	setActiveSteps: (activeStep: number) => void;
	setSelectedBankAndAccount: (
		value: TBanksAndAccountsResponse | null
	) => void;
	setModalState: (value: ModalState) => void;
	closeModal: () => void;
	setBankName: (value: TBankNameListApi) => void;
	setCurrency: (value: TCurrencyListApi) => void;
};

export type StepOneProps = {
	isEditing?: boolean;
};

export type StepTwoProps = {
	isEditing?: boolean;
	isLoading?: boolean;
	handleSubmit: (value: FormBankAndAccountType) => void;
};

export type AppStepsProps = {
	activeStep: number;
	steps: StepsModel[];
};

export type ModalProps = {
	isOpen?: boolean;
	handleClose: () => void;
};

export type ConfirmationViewProps = {
	handleClose: () => void;
};

export type SearchBarProps = {
	setSearchValue: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export type ListOfBanksAndAccountsTableProps = {
	data: TBanksAndAccountsApi;
	handleSort: ({ pageIndex, pageSize }: SortProps) => void;
	page: number;
	size: number;
};

export type NewComponentProps = {
	handleClose: () => void;
};
