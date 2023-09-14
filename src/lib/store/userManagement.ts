import create from 'zustand';
import { persist } from 'zustand/middleware';

interface FormUserModel {
  identifier?: string;
  role?: string;
  userGroupId?: string;
  name?: string;
  nik?: string;
  email?: string;
  mobilePhone?: string;
}

interface FeatureModel {
  id: string;
  name: string;
  viewOnly: boolean;
}

interface AccessModel {
  id: string;
  name: string;
  viewOnly: boolean;
  subHeader?: string;
  features?: FeatureModel[];
}

interface FormGroupModel {
  name?: string;
  code?: string;
  id?: string;
  menuList: AccessModel[];
  userList?: Array<string>;
}

export type UserStoreVariable = {
  formUser: FormUserModel | null;
  formGroup: FormGroupModel;
  activeStep: number;
};

export type UserStore = UserStoreVariable & {
  setFormUser: (formUser: FormUserModel | null) => void;
  setFormGroup: (formGroup: FormGroupModel) => void;
  resetFormGroup: () => void;
  setActiveSteps: (activeStep: number) => void;
};

const INITIAL_VALUE = {
  formUser: null,
  formGroup: {
    name: '',
    id: '',
    code: '',
    menuList: [],
    userList: [],
  },
  activeStep: 0,
};

export const useUserManagement = create<UserStore>()(
  persist(
    (set) => ({
      ...INITIAL_VALUE,
      setFormUser: (formUser) => set({ formUser }),
      setFormGroup: (formGroup) => set({ formGroup }),
      setActiveSteps: (activeStep) => set({ activeStep }),
      resetFormGroup: () => set({ formGroup: INITIAL_VALUE.formGroup }),
    }),
    { name: 'userManagement' }
  )
);
