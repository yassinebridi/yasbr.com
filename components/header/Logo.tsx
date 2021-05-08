import Link from 'next/link';
import React from 'react';

export interface LogoProps {
  cn?: string;
}
const Logo: React.FC<LogoProps> = ({ cn }) => {
  return (
    <Link href="/">
      <a className="flex flex-col items-center">
        <div className="hidden md:flex">
          <span className="text-3xl font-extrabold text-primary-800">Y</span>
          <span className="text-3xl font-extrabold">B</span>
        </div>
        <div className="flex md:hidden">
          <span className="text-3xl font-extrabold text-primary-800">Y</span>
          <span className="text-3xl font-extrabold">B</span>
        </div>
      </a>
    </Link>
  );
};

export default Logo;
