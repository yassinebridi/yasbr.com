import {
  Banner,
  Contact,
  Hero,
  HeroInfo,
  Introduction,
  Projects,
  Services,
  Skills,
  Testimonial,
} from '@components';
import { HomeLayout } from '@layouts';
import { databasesId, getBlocks, getDatabase } from '@lib';
import { ProjectType, ServiceType, SkillType, TestimType } from '@utils';
import { GetStaticProps } from 'next';
import React from 'react';
import { BlockMapType } from 'react-notion';

export interface PortfolioProps {
  introPage: BlockMapType;
  skillsTable: SkillType[];
  servicesTable: ServiceType[];
  projectsTable: ProjectType[];
  testimsTable: TestimType[];
}
const Portfolio: React.FC<PortfolioProps> = ({
  introPage,
  skillsTable,
  servicesTable,
  projectsTable,
  testimsTable,
}) => {
  return (
    <HomeLayout>
      <div className="">
        <div className="relative">
          <Hero />
          <HeroInfo />
        </div>
        <Introduction blocks={introPage} />
        <Skills items={skillsTable} />
        <Services items={servicesTable} />
        <Projects items={projectsTable} />
        <Banner />
        <Testimonial items={testimsTable} />
        <Contact />
      </div>
    </HomeLayout>
  );
};

export default Portfolio;

export const getStaticProps: GetStaticProps = async () => {
  const introPage = await getBlocks(databasesId.sections.intro);
  const skillsTable = await getDatabase<SkillType>(databasesId.sections.skills);
  const servicesTable = await getDatabase<ServiceType>(
    databasesId.sections.services
  );
  const projectsTable = await getDatabase<ProjectType>(
    databasesId.sections.projects
  );
  const testimsTable = await getDatabase<TestimType>(
    databasesId.sections.testims
  );

  return {
    props: {
      introPage,
      skillsTable,
      servicesTable,
      projectsTable,
      testimsTable,
    },
    revalidate: 1,
  };
};
