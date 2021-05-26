import Link from 'next/link';
import React from 'react';

export interface BannerProps {}
const Banner: React.FC<BannerProps> = () => {
  return (
    <div className="py-16 bg-primary-900">
      <div className="flex w-full max-w-4xl mx-auto">
        <div className="w-full font-normal text-center">
          <h3 className="text-3xl font-bold text-primary-50">
            Have a project on your mind
          </h3>
          <p className="mt-3 text-primary-300">
            You like what you see, and want something similar?
            <br />
            Let's have a chat.
          </p>
          <div className="mt-10">
            <Link href="#contact">
              <a className="btn btn-lg btn-secondary">Contact Me</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
