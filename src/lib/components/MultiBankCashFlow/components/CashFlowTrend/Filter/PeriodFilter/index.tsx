import { Select, useMediaQuery } from '@chakra-ui/react';
import { FilterProps } from 'lib/components/MultiBankCashFlow/types';
import { useGetDashboardPeriod } from 'lib/services/api/multiBankCashFlow/getDashboardPeriod';
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useLocale } from '../../../../../../store/locale';

const PeriodFilter: React.FC<FilterProps> = ({ params, setParams }) => {
	const { formatMessage } = useIntl();
	const [isNotLargeThan768] = useMediaQuery('not all and (min-width: 768px)');

	const { locale } = useLocale();
	const { data } = useGetDashboardPeriod();

	const PERIOD_OPTIONS = React.useMemo(() => {
		if (!data?.content) return [];

		return data?.content?.map((item) => ({
			label: formatMessage({
				id: `multiBankCashFlow.label.${item?.code}`,
			}),
			value: item?.code,
		}));
	}, [data, locale]);

	const onChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
		if (!params || !setParams) return;

		const value = e.target.value;

		setParams({
			...params,
			period: value,
		});
	};

	return (
		<div
			style={{
				marginBottom: '1rem',
				width: isNotLargeThan768 ? '100%' : undefined,
			}}
		>
			<div
				style={{
					fontSize: '0.875rem',
					lineHeight: '1.25rem',
					fontWeight: 700,
					marginBottom: '0.75rem',
				}}
			>
				<FormattedMessage id="multiBankCashFlow.label.period" />
			</div>

			<Select
				style={{ width: isNotLargeThan768 ? '100%' : 'auto' }}
				value={params?.period}
				onChange={onChange}
			>
				{PERIOD_OPTIONS.map((item, index) => (
					<option
						value={item.value}
						key={index}
					>
						{item.label}
					</option>
				))}
			</Select>
		</div>
	);
};

export default PeriodFilter;
