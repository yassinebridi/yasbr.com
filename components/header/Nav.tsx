import Link from 'next/link';
import React from 'react';

export interface NavProps {}
const Nav: React.FC<NavProps> = () => {
  return (
    <nav className="items-center hidden md:flex space-x-10">
      <NavLink path="/" name="Home" />
      <NavLink path="#introduction" name="Introduction" />
      <NavLink path="#services" name="Services" />
      <NavLink path="#testimonial" name="Testimonial" />
      <NavLink path="#blog" name="Blog" />
      <Link href="/">
        <a className="btn btn-primary btn-md">Hire me</a>
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
      <a className="text-sm font-medium text-gray-500 hover:text-gray-900 ringify">
        {name}
      </a>
    </Link>
  );
};
