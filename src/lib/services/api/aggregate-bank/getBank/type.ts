import type { APIResponse } from "lib/services/api/types";

export type GetBankList = {
  bankName: string;
};

export type GetBankListResponse = APIResponse<GetBankList[]>;
