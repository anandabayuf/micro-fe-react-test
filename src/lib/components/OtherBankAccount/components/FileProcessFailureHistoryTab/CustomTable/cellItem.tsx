import { Flex, Text } from '@chakra-ui/react';
import { format } from 'date-fns';
import { CellItemPropsType } from 'lib/components/OtherBankAccount/types';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import StatusBox from '../StatusBox';

const CellItem: React.FC<CellItemPropsType> = ({ cell, isFirstColumn, id }) => {
	if (cell.column.id === 'status') {
		return (
			<StatusBox
				maxWidth={cell.column.maxWidth}
				minWidth={cell.column.minWidth}
				value={cell.value}
				width={cell.column.width}
				isFirstColumn={isFirstColumn}
			/>
		);
	}

	if (cell.column.id === 'expander') {
		return (
			<Flex
				id={`${id}-cell-item-expander-btn`}
				alignItems="center"
				justifyContent="center"
				w={cell.column.width}
				{...cell.row.getToggleRowExpandedProps()}
			>
				{cell.row.isExpanded ? (
					<FiChevronUp
						color="gray.900"
						size={20}
					/>
				) : (
					<FiChevronDown
						color="gray.900"
						size={20}
					/>
				)}
			</Flex>
		);
	}

	return (
		<Flex
			alignItems="center"
			w={cell.column.width}
			maxW={cell.column.maxWidth}
			minW={cell.column.minWidth}
			my={{ base: 1, md: 2 }}
			overflow="hidden"
		>
			<Text
				noOfLines={1}
				color="gray.900"
				fontSize={{ base: 14, md: 16 }}
				mr={4}
				maxW={cell.column.width}
				fontWeight={isFirstColumn ? 'bold' : 400}
			>
				{cell.column.id === 'processDate'
					? format(new Date(cell.value), 'yyyy-MM-dd HH:mm:ss')
					: cell.render('Cell')}
			</Text>
		</Flex>
	);
};

export default CellItem;
