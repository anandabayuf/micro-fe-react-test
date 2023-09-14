export interface MenuList {
  viewOnly: boolean;
  name?: string;
  id: string;
}

export interface AdditionalInfo {
  userGroupId: string;
  menuList: MenuList[];
  role: string;
  loginType?: string;
  applicationId: string;
  corporateId: string;
}

export type User = {
  unique_id: string;
  userId: string;
  userName: string;
  additionalInfo?: AdditionalInfo;
  permissions?: Array<string>;
  exp: number;
};
