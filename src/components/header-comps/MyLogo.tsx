'use client';

import Link from 'next/link';
import React from 'react';

export interface LogoProps {}
const MyLogo: React.FC<LogoProps> = () => {
  return (
    <Link href="/" className="flex flex-col items-center">
      <div className="hidden md:flex">
        <span className="text-2xl font-bold dark:text-white text-primary-900 border-2 p-1.5 dark:border-white border-primary-900 dark:hover:bg-white hover:bg-primary-900 dark:hover:text-primary-900 hover:text-white transition">
          YB
        </span>
      </div>
      <div className="flex md:hidden">
        <span className="text-2xl font-bold dark:text-white text-primary-900 border-2 p-1.5 dark:border-white border-primary-900 dark:hover:bg-white hover:bg-primary-900 dark:hover:text-primary-900 hover:text-white transition">
          YB
        </span>
      </div>
    </Link>
  );
};

export default MyLogo;
