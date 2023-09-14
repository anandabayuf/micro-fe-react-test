import type { APIResponse } from "lib/services/api/types";

export type GetCorporateList = {
  cif: string;
  id: string;
  name: string;
};

export type GetCorporateListResponse = APIResponse<GetCorporateList[]>;
