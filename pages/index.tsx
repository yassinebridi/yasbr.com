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
import { ProjectsType, ServicesType, SkillsType, TestimsType } from '@utils';
import { GetStaticProps } from 'next';
import React from 'react';
import { BlockMapType } from 'react-notion';

export interface HomeProps {
  introPage: BlockMapType;
  skillsTable: SkillsType[];
  servicesTable: ServicesType[];
  projectsTable: ProjectsType[];
  testimsTable: TestimsType[];
}
const Home: React.FC<HomeProps> = ({
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

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const introPage = await getBlocks(databasesId.sections.intro);
  const skillsTable = await getDatabase<SkillsType>(
    databasesId.sections.skills
  );
  const servicesTable = await getDatabase<ServicesType>(
    databasesId.sections.services
  );
  const projectsTable = await getDatabase<ProjectsType>(
    databasesId.sections.projects
  );
  const testimsTable = await getDatabase<TestimsType>(
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
