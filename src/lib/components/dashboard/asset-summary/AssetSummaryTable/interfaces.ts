import { HeaderGroup, Row } from 'react-table';

export interface TableContentProps {
	headerGroups: HeaderGroup<any>[];
	rows: Row<any>[];
	onOpen: () => void;
	isHomepage?: boolean;
	setSelectedData: React.Dispatch<React.SetStateAction<any>>;
	id?: string;
}
