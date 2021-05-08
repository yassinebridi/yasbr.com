import Link from 'next/link';
import React from 'react';

export interface NavProps {}
const Nav: React.FC<NavProps> = () => {
  return (
    <nav className="items-center hidden md:flex space-x-10">
      <Link href="/">
        <a className="text-sm font-medium text-gray-500 hover:text-gray-900">
          Home
        </a>
      </Link>

      <Link href="/">
        <a className="text-sm font-medium text-gray-500 hover:text-gray-900">
          Introduction
        </a>
      </Link>

      <Link href="/">
        <a className="text-sm font-medium text-gray-500 hover:text-gray-900">
          Services
        </a>
      </Link>

      <Link href="/">
        <a className="text-sm font-medium text-gray-500 hover:text-gray-900">
          Testimonial
        </a>
      </Link>

      <Link href="/">
        <a className="text-sm font-medium text-gray-500 hover:text-gray-900">
          Blog
        </a>
      </Link>

      <Link href="/">
        <a className="btn btn-primary btn-md">Hire me</a>
      </Link>
    </nav>
  );
};

export default Nav;
