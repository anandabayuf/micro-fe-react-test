import type { APIResponse } from 'lib/services/api/types';

export type GetAssetTrendParams = {
  cifNo: string;
  period: string;
};

export type AssetTrendContent = {
  barName: string;
  balance: number;
};

export type GetAssetTrendResponse = APIResponse<Array<AssetTrendContent>>;
