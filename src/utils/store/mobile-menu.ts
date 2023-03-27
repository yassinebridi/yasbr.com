import create from 'zustand';

type MobileMenuState = {
  mobileMenuProps: {
    open: boolean;
  };
  setMobileMenuProps: (open: boolean) => void;
};
export const useMobileMenuStore = create<MobileMenuState>((set) => ({
  mobileMenuProps: { open: false },
  setMobileMenuProps: (open) => {
    set(() => ({
      mobileMenuProps: {
        open,
      },
    }));
  },
}));
