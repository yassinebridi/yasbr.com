import GithubIcon from '@design-system/icons/github';
import NextIcon from '@design-system/icons/next';
import TailwindIcon from '@design-system/icons/tailwind';
import TwitterIcon from '@design-system/icons/twitter';
import VercelIcon from '@design-system/icons/vercel';
import Link from 'next/link';
import React from 'react';

export interface FooterProps {}
const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="">
      <nav className="flex font-bold text-md space-x-6">
        <Link href="/blog">
          <a className="relative pointer-events-none">
            <span className="uppercase opacity-50">blog</span>
            <span
              style={{ color: '#f6e204' }}
              className="absolute text-xs -top-2 -right-2"
            >
              soon
            </span>
          </a>
        </Link>
        <Link href="/about">
          <a className="uppercase">about</a>
        </Link>
        <a
          className="uppercase"
          href="mailto:yassine@yasbr.com"
          target="_blank"
        >
          contact
        </a>
      </nav>

      <div className="flex mt-6">
        <p className="mr-2 font-light">Follow me on: </p>
        <ul className="flex space-x-2">
          <li className="flex items-center">
            <span className="mr-1">
              <TwitterIcon cn="h-3 w-3" />
            </span>
            <span className="font-bold">
              <a href="https://twitter.com/yassinebridi" target="_blank">
                Twitter
              </a>
            </span>
          </li>
          <li className="flex items-center">
            <span className="mr-1">
              <GithubIcon cn="h-3 w-3" />
            </span>
            <span className="font-bold">
              <a href="https://github.com/yassinebridi" target="_blank">
                Github
              </a>
            </span>
          </li>
        </ul>
      </div>

      <div className="flex mt-2">
        <p className="mr-2 font-light">Built with ❤️ using: </p>
        <ul className="flex space-x-2">
          <li className="flex items-center">
            <span className="mr-1">
              <NextIcon cn="h-3 w-3" />
            </span>
            <span className="font-bold">Next.js</span>
          </li>
          <li className="flex items-center">
            <span className="mr-1">
              <TailwindIcon cn="h-3 w-3" />
            </span>
            <span className="font-bold">Tailwind</span>
          </li>
          <li className="flex items-center">
            <span className="mr-1">
              <VercelIcon cn="h-3 w-3" />
            </span>
            <span className="font-bold">Vercel</span>
          </li>
        </ul>
      </div>

      <p className="mt-4 text-sm font-light">© 2021 Yassine Bridi.</p>
    </div>
  );
};

export default Footer;
