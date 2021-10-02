import { MenuIcon } from '@heroicons/react/solid';
import { useMobileMenuStore } from '@utils';

export interface HumMenuProps {}
const HumMenu: React.FC<HumMenuProps> = () => {
  const { setMobileMenuProps } = useMobileMenuStore();

  const handleMenu = () => {
    setMobileMenuProps(true);
  };

  return (
    <div className="flex items-center space-x-4 sm:hidden">
      <button
        type="button"
        className="inline-flex items-center justify-center p-1 dark:text-white dark:bg-primary-900 text-black bg-white rounded-none ringify"
        aria-expanded="false"
        onClick={handleMenu}
      >
        <span className="sr-only">Open menu</span>
        <MenuIcon className="w-7 h-7" />
      </button>
    </div>
  );
};

export default HumMenu;
