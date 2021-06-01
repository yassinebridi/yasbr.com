import { ExternalLinkIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React from 'react';

export interface ContactProps {}
const Contact: React.FC<ContactProps> = () => {
  return (
    <div className="py-12">
      <div className="flex items-center max-w-4xl mx-auto">
        <div className="w-full">
          <div className="font-normal text-center">
            <h3 className="uppercase text-md text-primary-500">Contact</h3>
            <h2 id="contact" className="text-3xl font-extrabold">
              <a href="#contact" title="contact" className="ringify">
                Get in touch
              </a>
            </h2>
          </div>
          <div className="flex flex-col mt-6 text-center space-y-2">
            <div>
              <span>You can always DM on</span>{' '}
              <a
                target="_blank"
                href="https://yasbr.com/DM"
                className="inline-flex items-center font-bold underline hover:bg-black hover:text-white space-x-1"
              >
                <span>twitter</span>
                <ExternalLinkIcon className="w-4 h-4" />
              </a>
            </div>
            <div>
              <span>Or email me at: </span>
              <a
                target="_blank"
                href="mailto:yassine@yasbr.com"
                className="inline-flex items-center font-bold underline hover:bg-black hover:text-white space-x-1"
              >
                <span>yassine@yasbr.com</span>
                <ExternalLinkIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center mt-6">
            <p className="pt-3 border-t dark:border-primary-800 border-primary-200">
              Or send me you project's details here:{' '}
            </p>
            <Link href="/contact">
              <a className="mt-4 btn btn-md btn-secondary">Contact Me</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
