import type { APIResponse } from "lib/services/api/types";

export type GetBalanceTrend = { barName: string; balance: number };

export type GetBalanceTrendResponse = APIResponse<GetBalanceTrend[]>;

export type GetBalanceTrendParams = {
  corporate: string;
  needGetChildCif?: boolean;
  period: string;
};
