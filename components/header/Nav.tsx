import { ThemeChanger } from '@components';
import Link from 'next/link';
import React from 'react';

export interface NavProps {}
const Nav: React.FC<NavProps> = () => {
  return (
    <nav className="items-center hidden md:flex space-x-8">
      <NavLink path="/" name="Home" />
      <NavLink path="/#introduction" name="Introduction" />
      <NavLink path="/#skills" name="Skills" />
      <NavLink path="/#services" name="Services" />
      <NavLink path="/#projects" name="Projects" />
      <NavLink path="/#testimonial" name="Testimonial" />
      <NavLink path="/blog" name="Blog" />
      <ThemeChanger />
      <Link href="/#contact">
        <a className="btn btn-lg btn-primary">Hire me</a>
      </Link>
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
      <a className="text-sm text-black uppercase border-gray-500 hover:border-b-2 hover:text-gray-900 ringify">
        {name}
      </a>
    </Link>
  );
};
