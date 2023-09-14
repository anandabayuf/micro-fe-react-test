import { Button, Flex, FormControl, FormLabel, Select } from '@chakra-ui/react';
import { StepTwoProps } from 'lib/components/OtherBankAccount/types';
import ControlledInput from 'lib/components/shared/form/ControlledInput';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormBankAndAccountType } from '../../../../types';
import { bankAndAccountFormValidationSchema } from 'lib/components/OtherBankAccount/utils';
import { FormattedMessage, useIntl } from 'react-intl';
import { useOtherBankAccount } from '../../../../../../store/otherBankAccount';
import { OPTIONS_ACCOUNT_TYPE } from 'lib/components/OtherBankAccount/constants';
import { useGetListOfBankName } from '../../../../../../services/api/otherBankAccount/listOfBanksAndAccounts/getBankNameList/index';
import { useGetListOfCurrency } from '../../../../../../services/api/otherBankAccount/listOfBanksAndAccounts/getCurrencyList/index';
import Loading from '../../Loading';

const StepTwo: React.FC<StepTwoProps> = ({
	handleSubmit,
	isEditing,
	isLoading,
}) => {
	const {
		setActiveSteps,
		activeStep,
		formBanksAndAccounts,
		setFormBanksAndAccounts,
	} = useOtherBankAccount();

	const { data: bankNameData, isLoading: isLoadingBankName } =
		useGetListOfBankName();
	const { data: currencyData, isLoading: isLoadingCurrency } =
		useGetListOfCurrency();

	const {
		register,
		getValues,
		setValue,
		formState: { isDirty, isValid },
	} = useForm<FormBankAndAccountType>({
		mode: 'onChange',
		resolver: yupResolver(bankAndAccountFormValidationSchema),
	});

	const { formatMessage } = useIntl();

	const handleBack = () => {
		setFormBanksAndAccounts({
			...getValues(),
		});
		setActiveSteps(activeStep - 1);
	};

	const handleClickSubmit = () => {
		handleSubmit(getValues());
	};

	React.useEffect(() => {
		if (!formBanksAndAccounts) return;

		setValue('accountNumber', formBanksAndAccounts.accountNumber, {
			shouldDirty: true,
			shouldValidate: true,
		});

		setValue('accountType', formBanksAndAccounts.accountType, {
			shouldDirty: true,
			shouldValidate: true,
		});

		setValue('bankName', formBanksAndAccounts.bankName, {
			shouldDirty: true,
			shouldValidate: true,
		});

		setValue('currency', formBanksAndAccounts.currency, {
			shouldDirty: true,
			shouldValidate: true,
		});
	}, [formBanksAndAccounts, setValue]);

	return isLoadingBankName || isLoadingCurrency ? (
		<Loading />
	) : (
		<Flex
			flexDir="column"
			gap={4}
			paddingY={4}
		>
			<FormControl {...register('bankName')}>
				<FormLabel>
					<FormattedMessage id="listOfBanksAndAccounts.label.bankName" />
				</FormLabel>

				<Select
					placeholder={formatMessage({
						id: 'listOfBanksAndAccounts.placeholder.bankName',
					})}
					borderColor="orange.100"
					_hover={{
						borderColor: 'orange.100',
					}}
					{...register('bankName')}
				>
					{bankNameData?.content?.bankName?.map((item, index) => (
						<option
							key={index}
							value={item}
						>
							{item}
						</option>
					))}
				</Select>
			</FormControl>

			<ControlledInput
				{...register('accountNumber')}
				label={formatMessage({
					id: 'listOfBanksAndAccounts.label.accountNo',
				})}
				type="number"
				placeholder={formatMessage({
					id: 'listOfBanksAndAccounts.placeholder.accountNo',
				})}
				maxLength={isEditing ? 100 : undefined}
				isDisabled={isEditing}
			/>

			<FormControl {...register('accountType')}>
				<FormLabel>
					<FormattedMessage id="listOfBanksAndAccounts.label.accountType" />
				</FormLabel>
				<Select
					placeholder={formatMessage({
						id: 'listOfBanksAndAccounts.placeholder.accountType',
					})}
					borderColor="orange.100"
					_hover={{
						borderColor: 'orange.100',
					}}
					{...register('accountType')}
				>
					{OPTIONS_ACCOUNT_TYPE.map((item, index) => (
						<option
							key={index}
							value={item.value}
						>
							{item.label}
						</option>
					))}
				</Select>
			</FormControl>

			<FormControl {...register('currency')}>
				<FormLabel>
					<FormattedMessage id="listOfBanksAndAccounts.label.currency" />
				</FormLabel>

				<Select
					placeholder={formatMessage({
						id: 'listOfBanksAndAccounts.placeholder.currency',
					})}
					borderColor="orange.100"
					_hover={{
						borderColor: 'orange.100',
					}}
					{...register('currency')}
				>
					{currencyData?.content?.currency?.map((item, index) => (
						<option
							key={index}
							value={item}
						>
							{item}
						</option>
					))}
				</Select>
			</FormControl>

			<Flex
				justifyContent={'center'}
				alignItems="center"
				gap={4}
			>
				<Button
					w="full"
					rounded={8}
					onClick={handleBack}
				>
					<FormattedMessage id="listOfBanksAndAccounts.button.back" />
				</Button>
				<Button
					w="full"
					rounded={8}
					onClick={handleClickSubmit}
					isDisabled={!isDirty || !isValid}
					isLoading={isLoading}
				>
					<FormattedMessage
						id={
							isEditing
								? 'listOfBanksAndAccounts.button.submit.edit'
								: 'listOfBanksAndAccounts.button.submit.add'
						}
					/>
				</Button>
			</Flex>
		</Flex>
	);
};

export default StepTwo;
