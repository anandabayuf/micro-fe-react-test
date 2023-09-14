import {
	Box,
	Button,
	Grid,
	Heading,
	Image,
	Link,
	Text,
} from '@chakra-ui/react';
import { APP_ASSETS_URL } from 'lib/constants/env';
import { useNavigate } from 'react-router-dom';

const Page404 = () => {
	const navigate = useNavigate();

	const handleBackToHome = () => navigate('/');

	return (
		<Grid
			gap={4}
			textAlign="center"
			pt={{ base: '7', md: '10' }}
		>
			<Heading>Page not Found</Heading>

			<Box
				maxWidth={[280, 400]}
				marginX="auto"
			>
				<Image
					width={400}
					src={`${APP_ASSETS_URL}/404 Error-rafiki.svg`}
				/>
				<Link
					id="page-404-freepik-stories-link"
					fontSize="xs"
					href="https://stories.freepik.com/web"
					isExternal
				>
					Illustration by Freepik Stories
				</Link>
			</Box>

			<Box>
				<Text>It&apos;s Okay!</Text>
				<Button
					id="page-404-back-to-home-btn"
					onClick={handleBackToHome}
				>
					Let&apos;s Head Back
				</Button>
			</Box>
		</Grid>
	);
};

export default Page404;
