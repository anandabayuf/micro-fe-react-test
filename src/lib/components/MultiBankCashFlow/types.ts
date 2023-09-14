import { SelectProps } from '@chakra-ui/react';
import { ChartData } from 'chart.js';
import { APIResponse } from 'lib/services/api/types';

export type MultiBankCashFlowChartProps = {
	data: ChartData<'line', number[], string>;
};

export type TMultiBankCashflowResponse = {
	barName: string;
	data: {
		Debit: number;
		Credit: number;
	};
};

export type TMultiBankCashflowApi = APIResponse<TMultiBankCashflowResponse[]>;

export type TMultiBankCashflowPayload = {
	corporate: string;
	listActivityCategory?: string[];
	activityFlag?: boolean;
	type?: string;
	period: string;
	needGetChildCif?: boolean;
	bankCode?: string;
};

export type TMultiBankCashflowPeriodResponse = {
	code: string;
	name: string;
};

export type TMultiBankCashflowPeriodApi = APIResponse<
	TMultiBankCashflowPeriodResponse[]
>;

export type TMultiBankCashflowCorporateListResponse = {
	id: string;
	name: string;
	cif: string;
};

export type TMultiBankCashflowCorporateListApi = APIResponse<
	TMultiBankCashflowCorporateListResponse[]
>;

export type TMultiBankCashflowBankNameListResponse = {
	bankName: string;
};

export type TMultiBankCashflowBankNameListApi = APIResponse<
	TMultiBankCashflowBankNameListResponse[]
>;

export type TMultiBankCashflowBankNameListParams = string | undefined;

export type SelectOptionsProps = SelectProps & {
	className?: string;
	title?: string;
	options:
		| {
				label: string;
				value: string;
		  }[]
		| [];
};

export type MultiBankCashFlowStoreVariable = {
	corporateId?: string;
	needGetChildCif: boolean;
	bankCode: string;
};

export type MultiBankCashFlowStore = MultiBankCashFlowStoreVariable & {
	setNeedGetChildCif: (value: boolean) => void;
	setCorporateId: (value: string | undefined) => void;
	setBankCode: (value: string) => void;
};

export type FilterProps = {
	params?: TMultiBankCashflowPayload;
	setParams?: React.Dispatch<React.SetStateAction<TMultiBankCashflowPayload>>;
	value?: string;
	setValue?: React.Dispatch<React.SetStateAction<string>>;
};

export type CashFlowTrendFilterProps = FilterProps & {
	optionalFilter?: React.ReactNode;
	withPeriod?: boolean;
};
