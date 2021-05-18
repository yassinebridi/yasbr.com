import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface BannerProps {}
const Banner: React.FC<BannerProps> = () => {
  return (
    <div className="py-16 bg-primary-400">
      <div className="flex max-w-4xl mx-auto grid grid-cols-5">
        <div className="py-12 font-normal col-span-3">
          <h3 className="text-3xl font-bold text-white">
            Have a project on your mind
          </h3>
          <p className="text-primary-100">
            Maecenas faucibus neque tellus, egestas tincidunt arcu iaculis id.
            Maecenas faucibus neque tellus
          </p>
          <div className="mt-5">
            <Link href="/#contact">
              <a className="btn btn-lg btn-white">Contact Me</a>
            </Link>
          </div>
        </div>

        <div className="relative py-12 -mb-2 col-span-2">
          <Image
            className=""
            src="/static/images/manag.svg"
            alt="Yassine Bridi's avatar"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
