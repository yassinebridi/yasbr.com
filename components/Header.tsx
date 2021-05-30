import { HumMenu, Logo, MenuMobile, Nav, ThemeChanger } from '@components';
import Link from 'next/link';
import React from 'react';

export interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="relative w-full px-4 bg-white text-primary-900 dark:bg-primary-900 dark:text-primary-200">
      <div className="max-w-4xl py-3 mx-auto">
        <div className="flex items-center justify-between py-3 md:space-x-10">
          <Logo />
          <Nav />

          <div className="flex items-center space-x-8">
            <ThemeChanger />
            <Link href="/portfolio">
              <a className="hidden btn btn-lg sm:flex btn-primary ringify">
                Hire me
              </a>
            </Link>
          </div>
          <HumMenu />
        </div>
      </div>

      <MenuMobile />
    </div>
  );
};

export default Header;
