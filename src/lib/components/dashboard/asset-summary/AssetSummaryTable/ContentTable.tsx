import {
	Box,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import React from 'react';
import { useIntl } from 'react-intl';
import { TableContentProps } from './interfaces';
import { parseMoney } from '../../../../utils/currency';
import { formatPercentage } from '../../../../utils/number';

const ContentTable: React.FC<TableContentProps> = ({
	headerGroups,
	rows,
	onOpen,
	setSelectedData,
}) => {
	const intl = useIntl();
	return (
		<TableContainer>
			<Table w="100%">
				<Thead>
					<Tr>
						{headerGroups[0]?.headers?.map((header, index) => {
							return (
								<Th
									fontSize={12}
									key={index}
									borderBottomWidth={'1px'}
									borderBottomColor="orange.100"
								>
									<Text color="gray.500">
										{header.render('Header')}
									</Text>
								</Th>
							);
						})}
						<Th
							borderBottomWidth={'1px'}
							borderBottomColor="orange.100"
						></Th>
					</Tr>
				</Thead>
				<Tbody>
					{rows.length === 0 ? (
						<>
							<Tr>
								<Td colSpan={5}>
									<Text
										textAlign="center"
										fontSize={12}
										fontStyle="italic"
										color="gray.400"
									>
										No Data
									</Text>
								</Td>
							</Tr>
						</>
					) : (
						<>
							{rows.map((row, index) => (
								<Tr
									fontSize={14}
									key={`${index}-tbody`}
								>
									{headerGroups[0]?.headers?.map(
										(header, index) => {
											return (
												<Td
													fontWeight={
														header.id === 'balance'
															? 700
															: 400
													}
													key={`${index}-trtbody`}
													borderBottom={'1px'}
													borderBottomColor="orange.100"
												>
													{header.id === 'balance' ||
													header.id === 'localBalance'
														? parseMoney(
																row.values[
																	header.id
																]
														  )
														: header.id ===
														  'percentage'
														? formatPercentage(
																row.values[
																	header.id
																]
														  )
														: row.values[header.id]}
												</Td>
											);
										}
									)}
									<Td
										borderBottom={'1px'}
										borderBottomColor="orange.100"
									>
										<Text
											onClick={() => {
												setSelectedData(row.values);
												onOpen();
											}}
											fontWeight="bold"
											cursor="pointer"
											color="orange.500"
										>
											{intl.formatMessage({
												id: 'detail',
											})}
										</Text>
									</Td>
								</Tr>
							))}
						</>
					)}
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default ContentTable;
