import create from 'zustand';

type LayoutStore = {
  isUsingLandingLayout : boolean;
  setIsUsingLandingLayout : (usingLandingLayout : boolean) => void;
};

export const useLayout = create<LayoutStore>((set) => ({
  isUsingLandingLayout : true,
  setIsUsingLandingLayout : (usingLandingLayout) => set({isUsingLandingLayout : usingLandingLayout})
}));
