export type RoleItemType = {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
  details: DetailRoleType[];
};

type DetailRoleType = {
  id: string;
  name: string;
  viewOnly: boolean;
};
