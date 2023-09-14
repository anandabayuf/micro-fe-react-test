import { Box, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import { useAggregateBankStore } from 'lib/store/useAggregateBank';
import { parseMoney } from 'lib/utils/currency';
import React from 'react';
import shallow from 'zustand/shallow';

const ChartLegend: React.FC = () => {
	const { summaryBalanceWidget } = useAggregateBankStore(
		(state) => state,
		shallow
	);

	return (
		<VStack
			gap={2}
			width={'100%'}
		>
			{summaryBalanceWidget.map(
				({ backgroundColor, balanceLocal, label }, index) => (
					<HStack
						gap={2}
						width={'100%'}
						key={index}
					>
						<Box
							h={8}
							w={8}
							backgroundColor={backgroundColor}
							borderRadius={'50%'}
						/>
						<Stack spacing={0}>
							<Text fontWeight={'bold'}>
								Rp. {parseMoney(String(balanceLocal))}
							</Text>
							<Text>{label}</Text>
						</Stack>
					</HStack>
				)
			)}
		</VStack>
	);
};

export default ChartLegend;
