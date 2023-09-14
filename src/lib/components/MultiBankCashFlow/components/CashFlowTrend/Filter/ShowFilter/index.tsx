import { Select, useMediaQuery } from '@chakra-ui/react';
import { CASHFLOW_OPTIONS } from 'lib/components/MultiBankCashFlow/constants';
import { FilterProps } from 'lib/components/MultiBankCashFlow/types';
import React from 'react';
import { FormattedMessage } from 'react-intl';

const ShowFilter: React.FC<FilterProps> = ({ value, setValue }) => {
	const [isNotLargeThan768] = useMediaQuery('not all and (min-width: 768px)');

	const onValuesChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
		if (!setValue) return;

		setValue(e.target.value);
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
				<FormattedMessage id="multiBankCashFlow.label.show" />
			</div>

			<Select
				style={{ width: isNotLargeThan768 ? '100%' : 'auto' }}
				value={value}
				onChange={onValuesChange}
			>
				{CASHFLOW_OPTIONS.map((item, index) => (
					<option
						key={index}
						value={item.value}
					>
						{item.label}
					</option>
				))}
			</Select>
		</div>
	);
};

export default ShowFilter;
