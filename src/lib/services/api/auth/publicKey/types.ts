import type { APIResponse } from 'lib/services/api/types';

export type PublicKeyResponse = APIResponse<{
  publicKey: string;
}>;
