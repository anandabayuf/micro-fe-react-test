import create from 'zustand';
import { persist } from 'zustand/middleware';

type CaptchaStore = {
  image: string;
  setImage: (image: string) => void;
};

export const useCaptcha = create<CaptchaStore>()(
  persist(
    (set) => ({
      image: '',
      setImage: (image) => set({ image }),
      clear: () => set({ image: '' }),
    }),
    { name: 'captcha' }
  )
);
