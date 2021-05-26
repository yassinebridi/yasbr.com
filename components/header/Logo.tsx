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
          <span className="text-2xl font-normal dark:text-white text-primary-900 border-2 p-1.5 dark:border-white border-primary-900 dark:hover:bg-white dark:hover:bg-white hover:bg-primary-900 dark:hover:text-primary-900 hover:text-white transition">
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
