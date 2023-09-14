import { Spacer, Wrap } from '@chakra-ui/react';
import { useAssetSummaryStore } from 'lib/store/useAssetSummary';
import { parseAccountType } from 'lib/utils/parser';
import React from 'react';
import { useIntl } from 'react-intl';
import shallow from 'zustand/shallow';
import ContentHeader from './ContentHeader';
import ContentTable from './ContentTable';
import { parseMoney } from '../../../../utils/currency';

interface AssetSummaryDetailProps {
	currency: string;
	id?: string;
}

const AssetSummaryDetail: React.FC<AssetSummaryDetailProps> = ({
	currency,
	id,
}) => {
	const { formatMessage } = useIntl();
	const { details } = useAssetSummaryStore(
		(state) => ({ details: state.details }),
		shallow
	);

	const filteredData = React.useMemo(() => {
		return details.summary.find(
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

	const emptyAccount = {
		balance: '0',
		localBalance: '0',
		totalAccount: '0',
		percentage: '0',
	};

	return (
		<>
			<Wrap>
				{filteredData?.details && filteredData?.details.length > 0
					? [
							allAccount,
							filteredData.details.find(
								(item) =>
									item.accountType === 'CA' ||
									item.accountType.startsWith('1')
							) || {
								...emptyAccount,
								accountType: formatMessage({
									id: 'CurrentAccount',
								}),
							},
							filteredData.details.find(
								(item) =>
									item.accountType === 'SA' ||
									item.accountType.startsWith('2')
							) || {
								...emptyAccount,
								accountType: formatMessage({
									id: 'SavingAccount',
								}),
							},
							filteredData.details.find(
								(item) =>
									item.accountType === 'D' ||
									item.accountType.startsWith('3')
							) || {
								...emptyAccount,
								accountType: formatMessage({
									id: 'DepositAccount',
								}),
							},
							filteredData.details.find(
								(item) =>
									item.accountType === 'K' ||
									item.accountType.startsWith('4')
							) || {
								...emptyAccount,
								accountType: formatMessage({
									id: 'KustodialAccount',
								}),
							},
					  ]
							.map((item) => ({
								type: `Total ${parseAccountType(
									item?.accountType || ''
								)}`,
								amount: parseMoney(item?.balance) || '0',
								conversionAmount:
									parseMoney(item?.localBalance) || '0',
								totalAccount: `${
									String(item?.totalAccount || '') || '0'
								} rekening`,
							}))
							.map((item, index) => (
								<React.Fragment key={index}>
									<ContentHeader
										{...item}
										currency={currency}
									/>
									<Spacer />
								</React.Fragment>
							))
					: null}
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
						accessor: 'accountType',
						Header: formatMessage({ id: 'accountType' }),
					},
					{
						accessor: 'currency',
						Header: formatMessage({ id: 'currency' }),
					},
					{
						accessor: 'amount',
						Header: formatMessage({ id: 'amount' }),
					},
				]}
				dataSets={[
					...(filteredData?.accounts?.map((account) => ({
						accountNo: account?.account,
						accountType: parseAccountType(account?.accountType),
						currency: currency,
						amount: parseMoney(account?.accountBalance),
					})) || []),
				]}
			/>
		</>
	);
};

export default AssetSummaryDetail;
