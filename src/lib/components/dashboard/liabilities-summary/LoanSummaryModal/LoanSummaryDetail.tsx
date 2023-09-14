import { Wrap } from '@chakra-ui/react';
import { SummaryLiabilitiesCIF } from 'lib/services/api/liabilities/summaryliabilitiescif/types';
import { parseMoney } from 'lib/utils/currency';
import React from 'react';
import { useIntl } from 'react-intl';
import ContentHeader from './ContentHeader';
import ContentTable from './ContentTable';

interface LoanSummaryDetail {
	data: SummaryLiabilitiesCIF;
	currency: string;
	id?: string;
}

const LoanSummaryDetail: React.FC<LoanSummaryDetail> = ({
	data,
	currency,
	id,
}) => {
	const { formatMessage } = useIntl();

	const filteredData = React.useMemo(() => {
		return data.details.summary.find(
			(detail) => detail.currency.toUpperCase() === currency
		);
	}, [currency]);

	const allAccount = {
		accountType: formatMessage({ id: 'all', defaultMessage: 'All' }),
		balance: filteredData?.balance,
		localBalance: filteredData?.localBalance,
		percentage: filteredData?.percentage,
		totalAccount: filteredData?.totalAccount,
	};

	return (
		<>
			<Wrap justifyContent="flex-end">
				{[
					{
						type: `Total ${formatMessage({ id: 'allLoansUsed' })}`,
						amount: parseMoney(filteredData?.balance),
						conversionAmount: parseMoney(
							filteredData?.localBalance
						),
						totalAccount: `${
							filteredData?.totalAccount
						} ${formatMessage({
							id: 'account',
						})}`,
					},
					{
						type: `Total ${formatMessage({ id: 'limitLoan' })}`,
						amount: parseMoney(
							filteredData?.details.availableBalance
						),
						conversionAmount: parseMoney(
							filteredData?.details.availableBalanceLocal
						),
					},
				].map((item, index) => (
					<React.Fragment key={index}>
						<ContentHeader
							currency={currency}
							{...item}
						/>
					</React.Fragment>
				))}
			</Wrap>
			<ContentTable
				id={id}
				currency={currency}
				columns={[
					{
						accessor: 'accountNo',
						Header: formatMessage({ id: 'accountNo' }),
					},
					{
						accessor: 'currency',
						Header: formatMessage({ id: 'currency' }),
					},
					{
						accessor: 'usedLoan',
						Header: formatMessage({ id: 'usedLoan' }),
					},
					{
						accessor: 'loanLimit',
						Header: formatMessage({ id: 'limitLoan' }),
					},
				]}
				dataSets={[
					...(filteredData?.accounts?.map((account) => ({
						accountNo: account.account,
						currency: currency,
						usedLoan: parseMoney(account.outstandingAmount),
						loanLimit: parseMoney(account.availableBalance),
					})) || []),
				]}
			/>
		</>
	);
};

export default LoanSummaryDetail;
