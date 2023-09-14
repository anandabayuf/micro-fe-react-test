import { Flex, Text } from '@chakra-ui/react';
import { useAssetSummaryStore } from 'lib/store/useAssetSummary';
import React from 'react';
import { useIntl } from 'react-intl';
import shallow from 'zustand/shallow';
import { parseMoney } from '../../../utils/currency';

interface TotalDepositProps {
	isHomepage?: boolean;
}

const TotalDeposit: React.FC<TotalDepositProps> = ({ isHomepage }) => {
	const intl = useIntl();
	const { balanceLocal } = useAssetSummaryStore(
		(state) => ({ balanceLocal: state.balanceLocal }),
		shallow
	);

	return (
		<Flex
			flexDirection={{ base: 'row', md: isHomepage ? 'row' : 'column' }}
			justifyContent="space-between"
		>
			<Text fontSize={14}>
				{intl.formatMessage({ id: 'totalDeposit' })}
			</Text>
			<Text
				fontSize={18}
				fontWeight={700}
			>
				IDR {parseMoney(balanceLocal) ?? '-'}
			</Text>
		</Flex>
	);
};

export default TotalDeposit;
