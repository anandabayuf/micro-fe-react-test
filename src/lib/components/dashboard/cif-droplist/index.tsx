import { HStack, Select, Text } from '@chakra-ui/react';
import { useEffect, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';

import { useCIFDroplist } from 'lib/services/api/asset/cifdroplist';
import { changeIntoIdFormat } from 'lib/utils/id';

type CIFDroplistProps = {
	onSelectCIF: (cifId: string) => void;
	componentId?: string;
};

const CIFDroplist = ({ onSelectCIF, componentId }: CIFDroplistProps) => {
	const { data } = useCIFDroplist();
	const cifList = useMemo(() => data?.content, [data?.content]);

	useEffect(() => {
		if (cifList) onSelectCIF(cifList[0].id);
	}, [cifList, onSelectCIF]);

	const handleSelectCIF: React.ChangeEventHandler<HTMLSelectElement> = (
		e
	) => {
		onSelectCIF(e.target.value);
	};

	return (
		<HStack
			width="100%"
			maxWidth={{ base: '100%', md: 400 }}
			flexDirection={{ base: 'column', md: 'row' }}
		>
			<Text
				whiteSpace="nowrap"
				fontWeight={700}
				mr={{ base: 0, md: 4 }}
				mb={{ base: 2, md: 0 }}
				width={{ base: '100%', md: 'initial' }}
			>
				<FormattedMessage id="chooseCIF" />
			</Text>
			<Select
				id={`${componentId}-select-cif`}
				onChange={handleSelectCIF}
				maxWidth="100%"
				rootProps={{ marginLeft: '0 !important' }}
			>
				{cifList?.map(({ id, cifName }) => (
					<option
						value={id}
						key={id}
						id={`${componentId}-select-cif-option-${changeIntoIdFormat(
							id
						)}-${changeIntoIdFormat(cifName)}`}
					>
						{id} - {cifName}
					</option>
				))}
			</Select>
		</HStack>
	);
};

export default CIFDroplist;
