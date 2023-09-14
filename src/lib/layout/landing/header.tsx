import { Flex, Heading, Image } from '@chakra-ui/react';
import { FormattedMessage } from 'react-intl';

import LocaleSelector from 'lib/components/LocaleSelector';
import { APP_ASSETS_URL, LANDING_BASE_URL } from 'lib/constants/env';

import { headerList } from './constants';
import { changeIntoIdFormat } from 'lib/utils/id';

const Header = () => {
	return (
		<Flex
			display={{ base: 'none', md: 'flex' }}
			px={{ lg: 32, sm: 22 }}
			height="92"
			alignItems="center"
			justifyContent="space-between"
			bg="rgba(0, 102, 119, 0.9)"
			position="sticky"
			borderTop="6px solid"
			borderColor="orange.500"
			top={0}
			zIndex={50}
			gap={14}
		>
			<Image
				src={`./${APP_ASSETS_URL}/images/logo.png`}
				alt="BNIDirect-logo"
				maxH={37}
			/>
			<Flex
				gap={6}
				align="center"
			>
				{headerList.map((item) => (
					<Heading
						id={`header-list-item-${changeIntoIdFormat(
							item.name
						)}-link`}
						as="a"
						href={`${LANDING_BASE_URL}${item.path}`}
						key={item.name}
						fontWeight={700}
						fontSize="md"
						color="white"
					>
						<FormattedMessage
							key={item.name}
							id={item.name}
						/>
					</Heading>
				))}
				<Flex
					gap={4}
					alignItems="center"
				>
					<LocaleSelector id="header" />
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Header;
