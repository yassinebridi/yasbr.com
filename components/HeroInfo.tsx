import {
  BriefcaseIcon,
  CheckCircleIcon,
  SupportIcon,
} from '@heroicons/react/outline';
import React from 'react';

export interface HeroInfoProps {}
const HeroInfo: React.FC<HeroInfoProps> = () => {
  return (
    <div className="flex justify-center">
      <div className="absolute py-6 bg-white border-2 border-dashed sm:py-10 dark:bg-primary-900 dark:border-primary-500 border-primary-300 sm:-bottom-16 -bottom-28 hover:border-b-4">
        <div className="flex flex-col justify-between p-2 space-y-4 sm:space-y-0 sm:flex-row sm:p-0 divide-x-0 divide-x sm:divide-y-0 sm:divide-x dark:divide-primary-600">
          <InfoCard
            title="5 Years job"
            subtitle="Experience"
            icon={
              <BriefcaseIcon className="w-8 h-8 p-1.5 text-white rounded-full sm:p-3 sm:w-12 sm:h-12 dark:bg-primary-500 bg-primary-400" />
            }
          />
          <InfoCard
            title="20+ Projects"
            subtitle="Completed"
            icon={
              <CheckCircleIcon className="w-8 h-8 p-1.5 text-white rounded-full sm:p-3 sm:w-12 sm:h-12 dark:bg-primary-500 bg-primary-400" />
            }
          />
          <InfoCard
            title="Support"
            subtitle="Online 24/7"
            icon={
              <SupportIcon className="w-8 h-8 p-1.5 text-white rounded-full sm:p-3 sm:w-12 sm:h-12 dark:bg-primary-500 bg-primary-400" />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default HeroInfo;

export interface InfoCardProps {
  icon: JSX.Element;
  title: string;
  subtitle: string;
}
const InfoCard: React.FC<InfoCardProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="flex items-center px-3 sm:px-12 space-x-2">
      <div>{icon}</div>
      <div className="flex flex-col">
        <span className="text-xs font-bold text-primary-800 dark:text-primary-300 sm:text-md">
          {title}
        </span>
        <span className="text-xs sm:text-sm dark:text-primary-400 text-primary-500">
          {subtitle}
        </span>
      </div>
    </div>
  );
};
