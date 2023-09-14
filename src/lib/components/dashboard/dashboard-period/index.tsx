import { HStack, Select, Text } from '@chakra-ui/react';
import { useEffect, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';

import { useDashboardPeriod } from 'lib/services/api/asset/getdashboardperiod';
import { changeIntoIdFormat } from 'lib/utils/id';

type DashboardPeriodProps = {
	onSelectPeriod: (code: string) => void;
	id?: string;
};

const DashboardPeriod = ({ onSelectPeriod, id }: DashboardPeriodProps) => {
	const { data } = useDashboardPeriod();
	const period = useMemo(() => data?.content, [data?.content]);

	useEffect(() => {
		if (period) onSelectPeriod(period[0].code);
	}, [period, onSelectPeriod]);

	const handleSelect: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
		onSelectPeriod(e.target.value);
	};

	return (
		<HStack
			width="100%"
			maxWidth={{ base: '100%', md: 400 }}
			flexDirection={{ base: 'column', md: 'row' }}
			justifyContent="flex-end"
		>
			<Text
				whiteSpace="nowrap"
				fontWeight={700}
				mr={{ base: 0, md: 4 }}
				mb={{ base: 2, md: 0 }}
				width={{ base: '100%', md: 'initial' }}
			>
				<FormattedMessage id="period" />
			</Text>
			<Select
				id={`${id}-select-period`}
				onChange={handleSelect}
				maxWidth={{ base: '100%', md: 200 }}
				rootProps={{ marginLeft: '0 !important' }}
			>
				{period?.map(({ code, name }) => (
					<option
						value={code}
						key={code}
						id={`${id}-select-period-option-${changeIntoIdFormat(
							name
						)}`}
					>
						<FormattedMessage id={code} />
					</option>
				))}
			</Select>
		</HStack>
	);
};

export default DashboardPeriod;
