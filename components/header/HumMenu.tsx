import { MenuIcon } from '@heroicons/react/solid';
import { useMobileMenuStore } from '@utils';

export interface HumMenuProps {}
const HumMenu: React.FC<HumMenuProps> = () => {
  const { setMobileMenuProps } = useMobileMenuStore();

  const handleMenu = () => {
    setMobileMenuProps(true);
  };

  return (
    <div className="flex items-center -my-2 -mr-2 space-x-4 md:hidden">
      <button
        type="button"
        className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        aria-expanded="false"
        onClick={handleMenu}
      >
        <span className="sr-only">Open menu</span>
        <MenuIcon />
      </button>
    </div>
  );
};

export default HumMenu;
