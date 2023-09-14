import type { APIResponse } from 'lib/services/api/types';

export type GetLiabilitiesTrendParams = {
  cifNo: string;
  period: string;
};

export type LiabilitiesTrendContent = {
  barName: string;
  outstanding: number;
  available: number;
};

export type GetLiabilitiesTrendResponse = APIResponse<
  Array<LiabilitiesTrendContent>
>;
