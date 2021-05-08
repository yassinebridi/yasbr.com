import { HumMenu, Logo, MenuMobile, Nav } from '@components';
import React from 'react';

export interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="relative w-full bg-white">
      <div className="px-4 py-3 mx-auto max-w-7xl sm:px-6 max-w-4xl">
        <div className="flex items-center justify-between py-3 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Logo />
          </div>
          <Nav />
          <HumMenu />
        </div>
      </div>

      <MenuMobile />
    </div>
  );
};

export default Header;
