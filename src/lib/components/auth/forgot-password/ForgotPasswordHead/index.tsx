import { VStack, HStack, Button, Heading, Text } from '@chakra-ui/react';
import { FiArrowLeft } from 'react-icons/fi';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const ForgotPasswordHead = () => {
	return (
		<VStack
			spacing={4}
			alignItems="start"
		>
			<HStack>
				<Button
					id="forgot-password-back-btn"
					as={Link}
					to="/login"
					variant="ghost"
					color="gray.400"
					leftIcon={<FiArrowLeft size={24} />}
					paddingX={0}
					_hover={{ bgColor: 'transparent' }}
				>
					<Text color="orange.500">
						<FormattedMessage id="backLogin" />
					</Text>
				</Button>
			</HStack>
			<VStack
				spacing={{ base: 8, md: 4 }}
				alignItems="start"
			>
				<Heading fontSize="2xl">
					<FormattedMessage id="forgotPassword" />
				</Heading>
				<Text fontSize="sm">
					<FormattedMessage id="forgotPasswordNote" />
				</Text>
			</VStack>
		</VStack>
	);
};

export default ForgotPasswordHead;
