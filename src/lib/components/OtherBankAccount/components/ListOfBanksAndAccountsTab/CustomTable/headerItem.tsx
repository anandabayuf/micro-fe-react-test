import { Flex, Text } from '@chakra-ui/react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useIntl } from 'react-intl';

const HeaderItem: React.FC<any> = ({ header, id }) => {
	const intl = useIntl();
	return (
		<Flex
			id={id}
			py={2}
			alignItems="center"
			{...header.getSortByToggleProps()}
			w={header.width}
			maxW={header.maxWidth}
			minW={header.minWidth}
		>
			<Text
				color="gray.600"
				textTransform="capitalize"
				fontWeight="400"
				fontSize={{ base: 12, md: 14 }}
				mr={4}
			>
				{header.Header !== ''
					? intl.formatMessage({ id: header.Header as string })
					: ''}
				{/* {header.render('Header')} */}
			</Text>
			{header.isSorted &&
				(header.isSortedDesc ? (
					<FiChevronDown
						color="gray.400"
						size={16}
					/>
				) : (
					<FiChevronUp
						color="gray.400"
						size={16}
					/>
				))}
		</Flex>
	);
};

export default HeaderItem;
