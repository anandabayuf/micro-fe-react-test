import type { APIResponse } from 'lib/services/api/types';

export type CIFDrop = {
  id: string;
  cifName: string;
};

export type CIFDroplistResponse = APIResponse<Array<CIFDrop>>;
