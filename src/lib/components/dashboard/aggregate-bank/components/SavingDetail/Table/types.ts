/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Cell, SortingRule } from "react-table";

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
  id?: string;
};

export type CellItemPropsType = {
  cell: Cell<object>;
  isFirstColumn: boolean;
  id?: string;
};
