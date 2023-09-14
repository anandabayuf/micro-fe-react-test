import { Button, Container, Flex, Image, Text } from '@chakra-ui/react';
import { StepOneProps } from 'lib/components/OtherBankAccount/types';
import { APP_ASSETS_URL } from 'lib/constants/env';
import { useOtherBankAccount } from 'lib/store/otherBankAccount';
import React from 'react';
import { FormattedMessage } from 'react-intl';

const StepOne: React.FC<StepOneProps> = () => {
	const { setActiveSteps, activeStep } = useOtherBankAccount();

	const handleNext = () => {
		setActiveSteps(activeStep + 1);
	};

	return (
		<Container paddingY={4}>
			<Text
				mb={4}
				textAlign="justify"
			>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
				enim ad minim veniam, quis nostrud exercitation ullamco laboris
			</Text>

			<Text
				mb={4}
				textAlign="justify"
			>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
				enim ad minim veniam, quis nostrud exercitation ullamco laboris
			</Text>

			<Text
				fontWeight={'bold'}
				mb={4}
			>
				Download dibawah ini
			</Text>

			<Container
				p={8}
				border={'1px solid orange'}
				rounded={8}
				mb={4}
			>
				<Flex
					justifyContent={'center'}
					mb={4}
				>
					<Image
						src={`./${APP_ASSETS_URL}/images/otherbankaccount/format-MT940-MT942.svg`}
					/>
				</Flex>

				<Text textAlign="justify">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna
				</Text>
			</Container>

			<Button
				w="full"
				rounded={8}
				onClick={handleNext}
			>
				<FormattedMessage id="listOfBanksAndAccounts.button.next" />
			</Button>
		</Container>
	);
};

export default StepOne;
