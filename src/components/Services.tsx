import { ComponentDynamicsTitleImage } from '@adapters';
import clsx from 'clsx';
import React from 'react';

export interface ServicesProps {
  items: ComponentDynamicsTitleImage[] | undefined;
}
const Services: React.FC<ServicesProps> = ({ items }) => {
  return (
    <div className="py-16">
      <div className="flex items-center max-w-4xl px-4 mx-auto">
        <div className="w-full">
          <div className="font-normal text-center">
            <h3 className="uppercase text-md text-primary-500">Services</h3>
            <h2 id="services" className="text-3xl font-extrabold">
              <a href="#services" title="services" className="ringify">
                What I offer
              </a>
            </h2>
          </div>

          <div className="mt-12">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 sm:gap-8">
              {items?.map((item, i) => {
                return <ServiceCard key={i} item={item} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

export interface ServiceCardProps {
  item: ComponentDynamicsTitleImage;
}
const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {
  return (
    <li
      className={clsx(
        'relative flex flex-col px-3 pb-3 pt-4 sm:p-6 border-2 border-dashed dark:border-primary-600 border-primary-300'
      )}
    >
      <span className="absolute -top-6">
        <div className="w-12 h-12 p-3 text-white rounded-full dark:bg-primary-500 bg-primary-100 group-hover:bg-white group-hover:text-primary-400 group-hover:shadow-md">
          <img
            alt={item.title}
            src={item.image?.data?.attributes?.url!}
            width={23}
            height={23}
          />
        </div>
      </span>
      <span className="mt-3 text-sm font-extrabold dark:text-primary-100 text-primary-900 sm:text-md group-hover:text-white">
        {item.title}
      </span>
      <span className="mt-2 text-xs sm:text-sm dark:text-primary-200 text-primary-800 group-hover:text-white">
        {item.desc}
      </span>
    </li>
  );
};
