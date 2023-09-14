import { Td, Tr } from '@chakra-ui/react';
import { parseMoney } from 'lib/utils/currency';
import React from 'react';
import { TableBodyProps } from './interfaces/interfaces';

const TableBody: React.FC<TableBodyProps> = ({ datasets, tableHeaders }) => {
	const tableDataProps = {
		fontSize: 14,
		fontWeight: 700,
		isNumeric: true,
	};

	return (
		<>
			{datasets.map((data, i) => {
				return (
					<Tr key={data.currency}>
						<Td
							px={0}
							borderBottom={'1px'}
							borderBottomColor="orange.100"
						>
							{data.currency}
						</Td>
						{tableHeaders.map((_, headerIndex) => (
							<Td
								{...tableDataProps}
								key={headerIndex}
								borderBottom={'1px'}
								borderBottomColor="orange.100"
							>
								{parseMoney(
									data[tableHeaders[headerIndex]]['balance']
								) ?? '-'}
							</Td>
						))}
					</Tr>
				);
			})}
		</>
	);
};

export default TableBody;
