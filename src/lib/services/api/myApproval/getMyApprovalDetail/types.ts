import type { APIResponse } from 'lib/services/api/types';

type MenuList = {
	id: string;
	name: string;
	viewOnly: boolean;
};

export type NewValueUser = {
	userGroupId?: string;
	identifier?: string;
	nik?: string;
	role?: string;
	mobilePhone?: string;
	name?: string;
	id?: string;
	email?: string;
	status?: string;
	menuList?: MenuList[];
	userList?: string[];
	description?: string;
	corporateId?: string;
};

export type OldValueUser = {
	userGroupId?: string | null;
	identifier?: string | null;
	nik?: string;
	role?: string;
	mobilePhone?: string;
	email?: string;
	menuList?: MenuList[];
	userList?: string[];
	name?: string;
	description?: string;
	id?: string;
	status?: string;
	corporateId?: string;
};

export type ValueOtherBankAccount = {
	corporateBranch: string;
	accountType: string;
	bankName: string;
	currency: string;
	id: string;
	accountNumber: string;
	status: string;
	corporateId: string | null;
};

export type MyApprovalValue =
	| NewValueUser
	| OldValueUser
	| ValueOtherBankAccount;

export type MyApprovalDetailContentModel = {
	id: string;
	moduleName: string;
	createdDate: Date;
	createdBy: string;
	createdByUsername: string;
	menuCode: string;
	status?: string;
	newValue?: MyApprovalValue;
	oldValue?: MyApprovalValue;
	orderId: string;
};

export type GetMyApprovalDetailResponse =
	APIResponse<MyApprovalDetailContentModel> & {
		status: string;
		message?: string;
		business: boolean;
		error: boolean;
		totalRecord: number;
		offset: number;
		page: number;
		size: number;
		sort: string[];
	};
