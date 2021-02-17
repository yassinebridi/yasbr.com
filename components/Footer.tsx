import React from 'react';
import Link from 'next/link';

export interface FooterProps {}
const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="">
      <nav className="flex font-bold text-md space-x-6">
        <Link href="/blog">
          <a className="relative pointer-events-none">
            <span className="uppercase opacity-50">blog</span>
            <span className="absolute text-xs -top-2 -right-2">soon</span>
          </a>
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
          <li>
            <span className="mr-2">a</span>
            <span className="font-bold">Twitter,</span>
          </li>
          <li>
            <span className="mr-2">a</span>
            <span className="font-bold">Github</span>
          </li>
        </ul>
      </div>

      <div className="flex mt-2">
        <p className="mr-2 font-light">Built with ❤️ using: </p>
        <ul className="flex space-x-2">
          <li>
            <span className="mr-2">a</span>
            <span className="font-bold">Next.js,</span>
          </li>
          <li>
            <span className="mr-2">a</span>
            <span className="font-bold">Tailwind,</span>
          </li>
          <li>
            <span className="mr-2">a</span>
            <span className="font-bold">Vercel</span>
          </li>
        </ul>
      </div>

      <p className="mt-4 text-sm font-light">© 2021 Yassine Bridi.</p>
    </div>
  );
};

export default Footer;
