import { HeaderGroup, Row } from 'react-table';

export interface TableContentProps {
	headerGroups: HeaderGroup<any>[];
	rows: Row<any>[];
	onOpen: () => void;
	setSelectedData: React.Dispatch<any>;
	isHomepage?: boolean;
	id?: string;
}
