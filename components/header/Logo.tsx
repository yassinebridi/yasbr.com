import Link from 'next/link';
import React from 'react';

export interface LogoProps {
  cn?: string;
}
const Logo: React.FC<LogoProps> = () => {
  return (
    <Link href="/">
      <a className="flex flex-col items-center">
        <div className="hidden md:flex">
          <span className="text-2xl font-normal text-black border-2 p-1.5 border-black">
            YB
          </span>
        </div>
        <div className="flex md:hidden">
          <span className="text-2xl font-extrabold text-primary-800">Y</span>
          <span className="text-2xl font-extrabold">B</span>
        </div>
      </a>
    </Link>
  );
};

export default Logo;
