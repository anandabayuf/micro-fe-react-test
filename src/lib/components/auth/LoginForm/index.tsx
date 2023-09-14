import {
	Box,
	Button,
	Divider,
	Flex,
	Grid,
	Heading,
	HStack,
	Link as ChakraLink,
	Text,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FiArrowLeft } from 'react-icons/fi';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { useSWRConfig } from 'swr';
import shallow from 'zustand/shallow';

import ControlledInput from 'lib/components/shared/form/ControlledInput';
import Loader from 'lib/layout/Loader';
import { getCaptcha } from 'lib/services/api/auth/captcha';
import login from 'lib/services/api/auth/login';
import type { LoginRequest } from 'lib/services/api/auth/login/types';
import { useAuth } from 'lib/store/auth';
import { useCaptcha } from 'lib/store/captcha';
import { parseJwt } from 'lib/utils/auth';

import { loginFormValidationSchema } from './constants';

const LoginForm = () => {
	const intl = useIntl();
	const { cache } = useSWRConfig();
	const { image, setImage } = useCaptcha();
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [isNextPage, setIsNextPage] = React.useState<boolean>(false);
	const [captchaText, setCaptchaText] = React.useState<string | null>(null);
	const [captchaCountdown, setCaptchaCountdown] = React.useState<number>(0);
	const [token, setToken, setCompanyId, setUser, setFirstTimeLogin] = useAuth(
		(state) => [
			state.token,
			state.setToken,
			state.setCompanyId,
			state.setUser,
			state.setFirstTimeLogin,
		],
		shallow
	);

	const {
		register,
		handleSubmit,
		getValues,
		formState: { isDirty, isValid },
	} = useForm<LoginRequest>({
		mode: 'onChange',
		resolver: yupResolver(loginFormValidationSchema),
	});

	const generateCaptcha = async () => {
		const values = getValues();
		setIsLoading(true);
		await getCaptcha({
			corporateId: values.companyId,
			userId: values.username,
		})
			.then((res) => {
				const otp64 = res?.content?.otp as string;
				const expired = res?.content?.requestInterval as number;
				setImage(otp64);
				setCaptchaCountdown(expired);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const handleSubmitRequest = async () => {
		const values = getValues();
		(cache as Map<unknown, unknown>).clear();
		if (isValid && values) {
			setIsLoading(true);
			await login({
				...values,
				captcha: captchaText as string,
			})
				.then((loginRes) => {
					const accessToken = loginRes?.headers?.access_token;

					setCompanyId(values.companyId);
					setUser(parseJwt(accessToken));
					setToken(accessToken);
					setFirstTimeLogin(true);
				})
				.catch(() => {
					generateCaptcha();
					setCaptchaText(null);
				})
				.finally(() => {
					setIsLoading(false);
				});
		}
	};

	const handleGenerateCaptcha = () => {
		generateCaptcha();
		setIsNextPage(true);
	};

	const onChangeCaptcha: React.ChangeEventHandler<HTMLInputElement> = (e) =>
		setCaptchaText(e.target.value);

	React.useEffect(() => {
		const interval = setInterval(() => {
			if (captchaCountdown > 0) {
				setCaptchaCountdown(captchaCountdown - 1);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [captchaCountdown]);

	if (!token) {
		return (
			<>
				<HStack>
					{isNextPage && (
						<Button
							id="login-form-back-btn"
							variant="ghost"
							color="gray.400"
							leftIcon={<FiArrowLeft size={24} />}
							paddingX={0}
							_hover={{ bgColor: 'transparent' }}
							onClick={() => setIsNextPage(false)}
						/>
					)}
					<Heading fontSize="2xl">
						<FormattedMessage id="loginTitle" />
					</Heading>
				</HStack>
				<Flex
					gap={4}
					direction="column"
				>
					<Grid gap={4}>
						<ControlledInput
							id="login-form-input-corporate-id"
							label={<FormattedMessage id="corpIdLoginLabel" />}
							placeholder={intl.formatMessage({
								id: 'corpIdLoginPlaceholder',
							})}
							isDisabled={isNextPage}
							{...register('companyId')}
						/>
						<ControlledInput
							id="login-form-input-user-id"
							label={<FormattedMessage id="userIdLoginLabel" />}
							placeholder={intl.formatMessage({
								id: 'userIdLoginPlaceholder',
							})}
							isDisabled={isNextPage}
							{...register('username')}
						/>
						<ControlledInput
							id="login-form-input-password"
							label={<FormattedMessage id="passwordLoginLabel" />}
							placeholder={intl.formatMessage({
								id: 'passwordLoginPlaceholder',
							})}
							isDisabled={isNextPage}
							type="password"
							{...register('password')}
						/>
						{isNextPage && (
							<Flex
								flexDirection="column"
								gap={4}
								mt={4}
							>
								<Box
									backgroundImage={`url("data:image/png;base64,${image}")`}
									backgroundRepeat="no-repeat"
									bgPosition="center left"
									bgSize="75%"
									width="50%"
									height={12}
								/>
								<Flex gap={8}>
									{captchaCountdown > 0 ? (
										<Text color="GrayText">
											<FormattedMessage
												id="refreshCaptchaInSecond"
												values={{
													count: captchaCountdown,
												}}
											/>
										</Text>
									) : (
										<ChakraLink
											id="login-form-refresh-captcha-link"
											color="orange.500"
											fontWeight="bold"
											onClick={() => generateCaptcha()}
										>
											<FormattedMessage id="refreshCaptcha" />
										</ChakraLink>
									)}
								</Flex>
								<ControlledInput
									id="login-form-input-captcha"
									onChange={onChangeCaptcha}
									placeholder={intl.formatMessage({
										id: 'captcha',
									})}
									value={captchaText ?? ''}
								/>
							</Flex>
						)}
					</Grid>

					<Divider
						borderColor="orange.100"
						marginY={8}
					/>

					<Flex
						alignItems="center"
						gap="8"
						justifyContent="space-between"
					>
						<ChakraLink
							id="login-form-forgot-password-link"
							as={Link}
							to="/forgot-password"
							fontWeight="bold"
							color="orange.500"
						>
							<FormattedMessage id="forgotPasswordTitle" />
						</ChakraLink>
						{!isNextPage ? (
							<Button
								id="login-form-next-btn"
								color="white"
								isDisabled={!isDirty || !isValid || isLoading}
								isLoading={isLoading}
								_hover={{ backgroundColor: 'gray.600' }}
								onClick={handleGenerateCaptcha}
								width={{ base: 40, md: 180 }}
							>
								<FormattedMessage id="next" />
							</Button>
						) : (
							<Button
								id="login-btn"
								color="white"
								isDisabled={
									!isDirty ||
									!isValid ||
									isLoading ||
									!captchaText
								}
								isLoading={isLoading}
								_hover={{ backgroundColor: 'gray.600' }}
								onClick={handleSubmit(handleSubmitRequest)}
								width={{ base: 40, md: 180 }}
							>
								<FormattedMessage id="login" />
							</Button>
						)}
					</Flex>
				</Flex>
			</>
		);
	}

	return <Loader />;
};

export default LoginForm;
