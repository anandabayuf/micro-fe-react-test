import { securedAPI } from 'lib/services/api/configs';

const DELETE_USER_MANAGEMENT = 'usermanagement/delete';

const delUserManagement = (id: string) => {
  return securedAPI(`${DELETE_USER_MANAGEMENT}/${id}`, 'POST');
};

export default delUserManagement;
