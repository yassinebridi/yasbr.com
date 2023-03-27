import Carousel, { arrowsPlugin, Dots } from '@brainhubeu/react-carousel';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
import { imageTransformer, ProjectType } from '@utils';
import clsx from 'clsx';
import React from 'react';

export interface ProjectSliderProps {
  project: ProjectType;
}
const ProjectSlider: React.FC<ProjectSliderProps> = ({ project }) => {
  const slides = [];
  project.Image.map((img, i) => {
    const rawUrl = imageTransformer(img.rawUrl, 'q_90,f_auto');
    slides.push(
      <div className={clsx('px-4')}>
        <img
          src={rawUrl}
          alt={project.Name}
          className={clsx('shadow-lg h-full w-[800px]')}
          key={i}
        />
      </div>
    );
  });
  const thumbnails = [];
  project.Image.map((img, i) => {
    const rawUrl = imageTransformer(img.rawUrl, 'q_auto,f_auto,w_200');
    thumbnails.push(
      <img
        key={i}
        src={rawUrl}
        alt={project.Name}
        width={100}
        height={100}
        className={clsx('object-cover border-2 border-primary-200')}
      />
    );
  });
  const [carState, setCarState] = React.useState<{
    value: number;
    slides?: any[];
    thumbnails?: any[];
  }>({
    value: 0,
    slides,
    thumbnails,
  });

  const handleChange = (value: number) => {
    setCarState({ ...carState, value });
  };

  return (
    <div className="flex flex-col w-full p-5">
      <Carousel
        value={carState.value}
        slides={carState.slides}
        onChange={handleChange}
        animationSpeed={300}
        plugins={[
          {
            resolve: arrowsPlugin,
            options: {
              arrowLeft: (
                <button className="p-2 mr-3 text-white rounded-none shadow-xl dark:bg-primary-700 bg-primary-400 shadow-sm ringify">
                  <ArrowLeftIcon className="w-5 h-5" />
                </button>
              ),
              arrowLeftDisabled: (
                <button className="p-2 mr-3 text-white rounded-none shadow-xl dark:bg-primary-600 bg-primary-300 shadow-sm ringify disabled">
                  <ArrowLeftIcon className="w-5 h-5" />
                </button>
              ),
              arrowRight: (
                <button className="p-2 ml-3 text-white rounded-none shadow-xl dark:bg-primary-700 bg-primary-400 shadow-sm ringify">
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              ),
              arrowRightDisabled: (
                <button className="p-2 ml-3 text-white rounded-none shadow-xl dark:bg-primary-600 bg-primary-300 shadow-sm ringify disabled">
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              ),
              addArrowClickHandler: true,
            },
          },
        ]}
      />
      <Dots
        number={carState.thumbnails.length}
        thumbnails={carState.thumbnails}
        value={carState.value}
        onChange={handleChange}
      />
    </div>
  );
};

export default ProjectSlider;