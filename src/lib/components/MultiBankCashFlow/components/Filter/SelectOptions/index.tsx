import React from 'react';
import { SelectOptionsProps } from 'lib/components/MultiBankCashFlow/types';
import { Select, Text, Container } from '@chakra-ui/react';

const SelectOptions: React.FC<SelectOptionsProps> = ({
	title,
	style,
	options,
	...rest
}) => {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				marginRight: '0.75rem',
				width: '100%',
				...style,
			}}
		>
			<Text
				fontWeight={700}
				whiteSpace="nowrap"
				style={{ marginRight: '0.75rem' }}
			>
				{title}
			</Text>
			<div style={{ width: '100%', marginLeft: '0.75rem' }}>
				<Select
					{...rest}
					style={{ width: '100%' }}
				>
					{options?.map((item, index) => (
						<option
							key={index}
							value={item.value}
						>
							{item.label}
						</option>
					))}
				</Select>
			</div>
		</div>
	);
};

export default SelectOptions;
