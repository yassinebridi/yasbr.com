import { GithubIcon, TwitterIcon } from '@design-system';
import React from 'react';

export interface FooterProps {}
const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="px-6 py-4 bg-primary-300">
      <div className="flex items-center justify-between">
        <div className="flex">
          <p className="mr-2 font-light">Follow me on: </p>
          <ul className="flex space-x-2">
            <li className="flex items-center">
              <span className="mr-1">
                <TwitterIcon cn="h-3 w-3" />
              </span>
              <span className="font-bold">
                <a href="https://yasbr.com/twitter" target="_blank">
                  Twitter
                </a>
              </span>
            </li>
            <li className="flex items-center">
              <span className="mr-1">
                <GithubIcon cn="h-3 w-3" />
              </span>
              <span className="font-bold">
                <a href="https://yasbr.com/github" target="_blank">
                  Github
                </a>
              </span>
            </li>
          </ul>
        </div>
        <p className="text-sm font-light">© 2021 Yassine Bridi.</p>
      </div>
    </div>
  );
};

export default Footer;
