import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import type { StepType } from '@reactour/tour';
import * as yup from 'yup';

import type { UserAuthenticationForm } from 'lib/store/connectServiceForm';

export const connectSSOClassName = 'connect-channel-button';

export const onBoardingSteps = (
	onClose: () => void,
	id?: string
): Array<StepType> => [
	{
		selector: `#${id}`,
		position: 'right',
		content: (
			<Flex
				direction="column"
				gap={8}
			>
				<Heading fontSize="2xl">
					Selamat datang di BNI CX Platform!
				</Heading>
				<Text>
					Hubungkan layanan adalah fitur untuk nasabah non-individu
					agar dapat melakukan single sign on dari aplikasi CX
					Platform, pastikan kamu sudah terdaftar di masing-masing
					layanan BNI yang tersedia.
				</Text>
				<Button
					fontWeight="bold"
					marginLeft="auto"
					variant="ghost"
					onClick={onClose}
					paddingX={0}
				>
					Hubungkan Nanti
				</Button>
			</Flex>
		),
	},
];

export const userAuthFormValidationSchema = ({
	needCorporateId,
}: {
	needCorporateId: boolean;
}): yup.SchemaOf<UserAuthenticationForm> =>
	yup.object({
		corporateId: needCorporateId ? yup.string().required() : yup.string(),
		userId: yup.string().required(),
		password: yup.string().required(),
	});
