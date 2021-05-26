import Link from 'next/link';
import React from 'react';

export interface NavProps {}
const Nav: React.FC<NavProps> = () => {
  return (
    <nav className="items-center justify-between hidden md:flex space-x-8">
      <NavLink path="/" name="Home" />
      <NavLink path="/portfolio" name="Portfolio" />
      <NavLink path="/blog" name="Blog" />
    </nav>
  );
};

export default Nav;

export interface NavLinkProps {
  path: string;
  name: string;
}
const NavLink: React.FC<NavLinkProps> = ({ name, path }) => {
  return (
    <Link href={path}>
      <a className="text-sm uppercase border-gray-500 dark:border-gray-300 hover:border-b-2 dark:hover:text-gray-100 hover:text-gray-900 ringify">
        {name}
      </a>
    </Link>
  );
};
