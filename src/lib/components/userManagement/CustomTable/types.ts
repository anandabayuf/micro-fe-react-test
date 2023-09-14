/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactNode } from 'react';
import type { Cell, Row, SortingRule } from 'react-table';

export interface SortProps {
	sortBy: SortingRule<object>[];
	pageIndex: number;
	pageSize: number;
}

export type CustomTablePropsType = {
	onSort?: ({ sortBy, pageIndex, pageSize }: SortProps) => void;
	tableData: any;
	columns: any;
	defaultItemPerPage: number;
	defaultPageNumber: number;
	totalPage?: number | 0;
	isUseMenu?: boolean;
	handleDetailItem?: (id: number) => void;
	handleStatusItem?: (id: number) => void;
	handleSessionItem?: (id: number) => void;
	handleDeleteItem: (id: number) => void;
	handleEditItem: (id: number) => void;
	renderRowSubComponent: (row: Row<object>) => ReactNode;
	id?: string;
};

export type CellItemPropsType = {
	cell: Cell<object>;
	isFirstColumn: boolean;
	isUseMenu?: boolean;
	handleDetailItem?: (id: number) => void;
	handleStatusItem?: (id: number) => void;
	handleSessionItem?: (id: number) => void;
	handleDeleteItem: (id: number) => void;
	handleEditItem: (id: number) => void;
	id?: string;
};
