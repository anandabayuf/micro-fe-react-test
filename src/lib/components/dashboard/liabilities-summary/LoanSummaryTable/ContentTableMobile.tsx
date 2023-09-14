import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Flex,
	Grid,
	Text,
} from '@chakra-ui/react';
import { formatDecimal, parseMoney } from 'lib/utils/currency';
import { changeIntoIdFormat } from 'lib/utils/id';
import { formatPercentage } from 'lib/utils/number';
import React from 'react';
import { useIntl } from 'react-intl';
import { TableContentProps } from './interfaces';

const ContentTableMobile: React.FC<TableContentProps> = ({
	headerGroups,
	rows,
	onOpen,
	setSelectedData,
	isHomepage,
	id,
}) => {
	const intl = useIntl();
	return (
		<>
			{!isHomepage && (
				<Grid
					templateColumns="6fr 6fr"
					pb="1"
					borderBottom={'1px'}
					borderBottomColor="orange.100"
				>
					{headerGroups[0]?.headers?.map((header, index) => {
						if (header.id === 'currency' || header.id === 'balance')
							return (
								<Box
									fontSize={12}
									color="gray.500"
									key={index}
								>
									{header.render('Header')}
								</Box>
							);
					})}
				</Grid>
			)}
			<Accordion
				id={`${id}-accordion`}
				allowToggle
				borderColor="orange.100"
				pointerEvents={isHomepage ? 'none' : 'initial'}
			>
				{rows.length === 0 ? (
					<Flex
						alignItems="center"
						justifyContent="center"
						w="100%"
						h="20"
					>
						<Text
							fontSize={12}
							color="gray.400"
							fontStyle="italic"
						>
							No Data
						</Text>
					</Flex>
				) : (
					<>
						{rows.map((row, index) => {
							return (
								<AccordionItem
									id={`${id}-accordion-item-${changeIntoIdFormat(
										row.values.currency
									)}`}
									key={`${index}-Accordion`}
									borderBottom={'1px'}
									borderBottomColor="orange.100"
								>
									<AccordionButton
										id={`${id}-accordion-item-${changeIntoIdFormat(
											row.values.currency
										)}-btn`}
										px={0}
										py={2}
									>
										<Grid
											textAlign="left"
											w="full"
											templateColumns="4fr 4fr"
											fontSize={14}
										>
											<Flex alignItems="center">
												<Box
													width="14px"
													height="14px"
													marginRight={2}
													rounded="full"
													bgColor={row.values.color}
												/>
												<Text>
													{row.values.currency}
												</Text>
											</Flex>
											<Flex justifyContent="space-between">
												<Box
													fontWeight={700}
													ml={isHomepage ? 'auto' : 0}
												>
													{parseMoney(
														row.values.balance
													)}
												</Box>
												{!isHomepage && (
													<AccordionIcon color="orange.500" />
												)}
											</Flex>
										</Grid>
									</AccordionButton>
									<AccordionPanel px={0}>
										<Flex flexDirection="column">
											{headerGroups[0]?.headers?.map(
												(header, index) => {
													if (
														header.id !==
															'currency' &&
														header.id !==
															'balance' &&
														header.id !== 'color'
													)
														return (
															<Grid
																key={index}
																textAlign="left"
																w="full"
																templateColumns="4fr 4fr"
																mb="2"
															>
																<Box
																	fontSize={
																		12
																	}
																	color="gray.500"
																	key={index}
																>
																	{header.render(
																		'Header'
																	)}
																</Box>
																<Box
																	fontSize={
																		14
																	}
																>
																	{header.id ===
																	'localBalance'
																		? parseMoney(
																				row
																					.values[
																					header
																						.id
																				]
																		  )
																		: header.id ===
																		  'percentage'
																		? formatPercentage(
																				row
																					.values[
																					header
																						.id
																				]
																		  )
																		: row
																				.values[
																				header
																					.id
																		  ]}
																</Box>
															</Grid>
														);
												}
											)}
											<Box ml="auto">
												<Text
													id={`${id}-accordion-item-${changeIntoIdFormat(
														row.values.currency
													)}-see-detail-btn`}
													onClick={() => {
														setSelectedData(
															row.values
														);
														onOpen();
													}}
													fontWeight="bold"
													fontSize={14}
													cursor="pointer"
													color="orange.500"
												>
													{intl.formatMessage({
														id: 'detail',
													})}
												</Text>
											</Box>
										</Flex>
									</AccordionPanel>
								</AccordionItem>
							);
						})}
					</>
				)}
			</Accordion>
		</>
	);
};

export default ContentTableMobile;
