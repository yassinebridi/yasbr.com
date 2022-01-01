import React from 'react';

export interface FooterProps {}
const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="relative w-full text-primary-700 dark:bg-primary-900 dark:text-primary-200">
      <div className="flex items-center justify-between max-w-4xl px-4 py-6 mx-auto border-t dark:border-primary-800 border-primary-200">
        <div className="flex items-center space-x-8">
          <a
            href="https://yasbr.com/twitter"
            target="_blank"
            className="text-sm uppercase dark:hover:text-primary-100 hover:text-primary-900 ringify"
          >
            Twitter
          </a>
          <a
            href="https://yasbr.com/github"
            target="_blank"
            className="text-sm uppercase dark:hover:text-primary-100 hover:text-primary-900 ringify"
          >
            Github
          </a>
        </div>
        <p className="text-sm font-normal">
          © {new Date().getFullYear()} Yassine Bridi
        </p>
      </div>
    </div>
  );
};

export default Footer;
