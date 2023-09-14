import { securedAPI } from 'lib/services/api/configs';

const UNLINK_SERVICE_RESOURCE_PATH = 'channelportal/unlinkservice';

export const unlinkService = (id: string) =>
  securedAPI(`${UNLINK_SERVICE_RESOURCE_PATH}/${id}`, 'POST');
