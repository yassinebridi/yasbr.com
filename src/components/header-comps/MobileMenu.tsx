'use client';

import { Backdrop } from '@design-system';
import { Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { useMobileMenuStore } from '@utils';
import { cn } from '@utils/helpers';
import Link from 'next/link';
import * as React from 'react';
import MyLogo from './MyLogo';

export interface MenuMobileProps {}
const MenuMobile: React.FC<MenuMobileProps> = () => {
  const { mobileMenuProps, setMobileMenuProps } = useMobileMenuStore();

  React.useEffect(() => {
    if (mobileMenuProps.open) {
      setMobileMenuProps(!mobileMenuProps.open);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCloseMenu = () => {
    setMobileMenuProps(false);
  };

  const hideStatus = cn(mobileMenuProps.open ? null : 'hidden');

  return (
    <Transition
      show={mobileMenuProps.open}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Backdrop onClick={handleCloseMenu} />

      <div
        className={`absolute inset-x-0 z-50 top-0 p-2 transition transform origin-top-right md:hidden ${hideStatus}`}
      >
        <div className="bg-white rounded-none shadow-lg dark:bg-primary-900 ring-1 dark:text-white text-primary-900 ring-black ring-opacity-5 divide-y-2 divide-primary-50">
          <div className="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between py-2">
              <div>
                <MyLogo />
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-1 text-black bg-white rounded-none dark:text-white dark:bg-primary-900 ringify"
                  onClick={handleCloseMenu}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="mt-6">
              <div className="grid gap-y-8">
                {linkItems.map((item) => (
                  <LinkItem
                    key={item.title}
                    title={item.title}
                    path={item.path}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default MenuMobile;

export const linkItems = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Portfolio',
    path: '/portfolio',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
  {
    title: 'Uses',
    path: '/uses',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];
export interface LinkItemProps {
  path: string;
  title: string;
}
const LinkItem: React.FC<LinkItemProps> = ({ title, path }) => {
  return (
    <Link
      className="flex items-center justify-between p-3 -m-3 rounded-none hover:bg-primary-50 dark:hover:bg-primary-800"
      href={`${path}`}
    >
      {title}
    </Link>
  );
};
