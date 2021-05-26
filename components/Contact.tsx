import { ExternalLinkIcon } from '@heroicons/react/outline';
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
                href="https://twitter.com/messages/compose?recipient_id=895843232"
                className="inline-flex items-center font-bold underline hover:bg-black hover:text-white space-x-1"
              >
                <span>twitter</span>
                <ExternalLinkIcon className="w-4 h-4" />
              </a>
            </div>
            <div>
              <span>
                Or if you are used to the old ways, you can email me at:{' '}
              </span>
              <a
                target="_blank"
                href="mailto:yassine@yasbr.com"
                className="font-bold underline inline-flex items-center hover:bg-black hover:text-white space-x-1"
              >
                <span>yassine@yasbr.com</span>
                <ExternalLinkIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
