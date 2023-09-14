import { HeaderGroup, Row } from "react-table";

export interface TableContentProps {
  headerGroups: HeaderGroup<any>[];
  rows: Row<any>[];
  id?: string;
}
