import React from 'react';

export interface IntroductionProps {}
const Introduction: React.FC<IntroductionProps> = () => {
  return (
    <div className="text-lg font-normal text-gray-400">
      <h2 id="introduction" className="pt-2 text-2xl font-bold text-white">
        <a href="#introduction" title="introduction">
          Introduction
        </a>
      </h2>

      <p className="mt-2">Hey, I'm Yassine Bridi 👋</p>

      <p className="mt-2">
        I’m a developer who also designs, with a keen interest in web technology
        and video games.
      </p>

      <p className="mt-2">
        I enjoy sharing my knowledge and helping others adopt the technologies
        I’m passionate about. I do this by live streaming my work, reviewing
        community code, developing open-source projects, and writing technical
        blog posts.
      </p>

      <div className="mt-6">
        <p className="">I'm usually focused on:</p>
        <ul className="mt-2 space-y-2">
          <li>
            <span className="inline-block mr-2">🎛️</span>
            <span>
              Designing user interfaces with a strong focus on user experience
            </span>
          </li>

          <li>
            <span className="inline-block mr-2">🎛️</span>
            <span>
              Designing user interfaces with a strong focus on user experience
            </span>
          </li>

          <li>
            <span className="inline-block mr-2">🎛️</span>
            <span>
              Designing user interfaces with a strong focus on user experience
            </span>
          </li>

          <li>
            <span className="inline-block mr-2">🎛️</span>
            <span>
              Designing user interfaces with a strong focus on user experience
            </span>
          </li>
        </ul>
      </div>

      <div className="mt-6">
        <p className="">I'm usually focused on:</p>
        <ul className="mt-2 space-y-2">
          <li>
            <span className="inline-block mr-2">🎛️</span>
            <span>
              Designing user interfaces with a strong focus on user experience
            </span>
          </li>

          <li>
            <span className="inline-block mr-2">🎛️</span>
            <span>
              Designing user interfaces with a strong focus on user experience
            </span>
          </li>

          <li>
            <span className="inline-block mr-2">🎛️</span>
            <span>
              Designing user interfaces with a strong focus on user experience
            </span>
          </li>

          <li>
            <span className="inline-block mr-2">🎛️</span>
            <span>
              Designing user interfaces with a strong focus on user experience
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Introduction;
