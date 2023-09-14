import { securedAPI } from 'lib/services/api/configs';

const DELETE_GROUP_PATH = 'usergroup/delete';

const delGroupManagement = (id: string) => {
  return securedAPI(`${DELETE_GROUP_PATH}/${id}`, 'POST');
};

export default delGroupManagement;
