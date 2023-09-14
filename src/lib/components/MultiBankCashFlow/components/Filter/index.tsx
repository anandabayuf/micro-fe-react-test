import { useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { useIntl } from 'react-intl';
import { useAuth } from 'lib/store/auth';
import SelectOptions from './SelectOptions';
import { useGetCorporateList } from 'lib/services/api/multiBankCashFlow/getCorporateList/index';
import { useGetBankNameListMultiBank } from 'lib/services/api/multiBankCashFlow/getBankNameListMultiBank';
import { useMultiBankCashFlow } from 'lib/store/multiBankCashFlow';
import { useLocale } from 'lib/store/locale';

const Filter: React.FC = () => {
	const { formatMessage } = useIntl();
	const { locale } = useLocale();
	const { companyId } = useAuth();
	const {
		corporateId: selectedCorpId,
		setCorporateId,
		setNeedGetChildCif,
		setBankCode,
		bankCode,
	} = useMultiBankCashFlow();

	const [isLargerThan940] = useMediaQuery('(min-width: 940px)');

	const { data: corporateList } = useGetCorporateList();

	const { data: bankNameList } = useGetBankNameListMultiBank(
		selectedCorpId || companyId
	);

	const CORPORATE_LIST_OPTIONS = React.useMemo(() => {
		if (!corporateList?.content) return [];

		return [
			{
				id: 'all',
				name: formatMessage({ id: 'multiBankCashFlow.label.all' }),
			},
			...corporateList?.content,
		].map((item) => ({
			label: item?.name,
			value: item?.id,
		}));
	}, [corporateList, locale]);

	const BANK_NAME_LIST_OPTIONS = React.useMemo(() => {
		if (!bankNameList?.content) return [];

		return [
			{
				bankName: 'all',
			},
			...bankNameList?.content,
		].map((item) => ({
			label:
				item?.bankName === 'all'
					? formatMessage({ id: 'multiBankCashFlow.label.all' })
					: item?.bankName,
			value: item?.bankName,
		}));
	}, [bankNameList, locale]);

	const onChangeCorp: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
		const value = e.target.value;

		setCorporateId(value === '' ? undefined : value);
		setNeedGetChildCif(value === 'all' ? true : false);
	};

	const onChangeBank: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
		const value = e.target.value;
		setBankCode(value === '' ? 'all' : value);
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: isLargerThan940 ? 'row' : 'column',
				alignItems: isLargerThan940 ? 'center' : undefined,
				justifyContent: isLargerThan940 ? 'space-between' : undefined,
				marginBottom: isLargerThan940 ? '1rem' : undefined,
			}}
		>
			<SelectOptions
				title={formatMessage({
					id: 'multiBankCashFlow.label.select.customerId',
				})}
				placeholder={formatMessage({
					id: 'multiBankCashFlow.placeholder.select.customerId',
				})}
				value={selectedCorpId || companyId}
				options={CORPORATE_LIST_OPTIONS}
				style={{
					width: isLargerThan940 ? '50%' : '100%',
					marginBottom: isLargerThan940 ? 0 : '0.75rem',
				}}
				onChange={onChangeCorp}
			/>
			<SelectOptions
				title={formatMessage({
					id: 'multiBankCashFlow.label.select.bank',
				})}
				placeholder={formatMessage({
					id: 'multiBankCashFlow.placeholder.select.bank',
				})}
				value={bankCode}
				options={BANK_NAME_LIST_OPTIONS}
				style={{
					width: isLargerThan940 ? '50%' : '100%',
					marginBottom: isLargerThan940 ? 0 : '0.75rem',
				}}
				onChange={onChangeBank}
			/>
		</div>
	);
};

export default Filter;
