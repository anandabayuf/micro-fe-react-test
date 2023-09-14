import {
	Box,
	Flex,
	Heading,
	HStack,
	Icon,
	Spacer,
	Text,
} from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

type PageTitleProps = {
	title: string;
	controlComponent?: ReactNode;
	id?: string;
};

const PageTitle = ({ title, controlComponent, id }: PageTitleProps) => {
	return (
		<>
			<Flex alignItems="center">
				<Icon
					as={FiArrowLeft}
					color="gray.400"
					mr={1}
				/>

				<Link
					id={`${id}-back-to-dashboard-link`}
					to="/"
				>
					<Text
						color="orange.500"
						fontWeight={700}
					>
						<FormattedMessage id="backDashboard" />
					</Text>
				</Link>
			</Flex>
			<Spacer height={4} />
			<Box mb={6}>
				<HStack
					flexDirection={{ base: 'column', md: 'row' }}
					justifyContent="space-between"
				>
					<Heading
						fontSize={36}
						width="100%"
					>
						{title}
					</Heading>

					{controlComponent && (
						<Flex
							width="100%"
							justifyContent={{ base: 'start', md: 'end' }}
							pt={{ base: 4, md: 0 }}
						>
							{controlComponent}
						</Flex>
					)}
				</HStack>
			</Box>
		</>
	);
};

export default PageTitle;
