'use client';

import { Nav, HumMenu, MenuMobile, MyLogo } from '@components/header-comps';
import Link from 'next/link';
import React from 'react';

export interface AppHeaderProps {}
const AppHeader: React.FC<AppHeaderProps> = () => {
  return (
    <header className="relative w-full px-4 bg-white text-primary-900 dark:bg-primary-900 dark:text-primary-200">
      <div className="max-w-4xl py-3 mx-auto">
        <div className="flex items-center justify-between py-3 md:space-x-10">
          <MyLogo />
          <Nav />

          <div className="flex items-center space-x-8">
            {/* <div className="w-[40px] h-[32px]"> */}
            {/*   <ThemeChanger /> */}
            {/* </div> */}
            <Link
              href="/portfolio"
              className="hidden btn btn-lg sm:flex btn-primary ringify"
            >
              Hire me
            </Link>
          </div>
          <HumMenu />
        </div>
      </div>

      <MenuMobile />
    </header>
  );
};

export default AppHeader;
