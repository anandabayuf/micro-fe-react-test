import { HeaderGroup, Row, SortingRule } from "react-table";

export interface SortProps {
  sortBy: SortingRule<object>[];
  pageIndex: number;
  pageSize: number;
}

export interface TableContentProps {
  onSort?: ({ sortBy, pageIndex, pageSize }: SortProps) => void;
  tableData: any;
  columns: any;
  defaultItemPerPage: number;
  defaultPageNumber: number;
  totalPage?: number | 0;
  isUseMenu?: boolean;
  id?: string;
}
