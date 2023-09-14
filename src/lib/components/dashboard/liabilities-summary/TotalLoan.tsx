import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useIntl } from 'react-intl';
import { parseMoney } from '../../../utils/currency';

interface TotalLoanProps {
	balanceLocal: string;
	isHomePage?: boolean;
}

const TotalLoan: React.FC<TotalLoanProps> = ({ balanceLocal, isHomePage }) => {
	const intl = useIntl();

	return (
		<Flex
			flexDirection={{ base: 'row', md: isHomePage ? 'row' : 'column' }}
			justifyContent="space-between"
		>
			<Text fontSize={14}>{intl.formatMessage({ id: 'totalLoan' })}</Text>
			<Text
				fontSize={18}
				fontWeight={700}
			>
				IDR {parseMoney(balanceLocal) ?? '-'}
			</Text>
		</Flex>
	);
};

export default TotalLoan;
