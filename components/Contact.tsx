import React from 'react';

export interface ContactProps {}
const Contact: React.FC<ContactProps> = () => {
  return (
    <div className="py-12">
      <div className="flex items-center max-w-4xl mx-auto">
        <div className="w-full">
          <div className="font-normal text-center">
            <h3 className="uppercase text-md text-primary-500">Contact Me</h3>
            <h2 id="projects" className="text-3xl font-extrabold">
              <a href="#projects" title="projects" className="ringify">
                Get in touch
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
