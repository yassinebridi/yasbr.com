import { getPortfolioPage, GetPortfolioPageQuery } from '@adapters';
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
import { GetStaticProps } from 'next';
import React from 'react';

export interface PortfolioProps {
  portfolio: GetPortfolioPageQuery;
}
const Portfolio: React.FC<PortfolioProps> = ({ portfolio }) => {
  console.log('portfolio: ', portfolio);
  const portfolioData = portfolio.portfolio?.data?.attributes;
  console.log('portfolioData: ', portfolioData);
  return (
    <HomeLayout>
      <div className="">
        <div className="relative">
          <Hero />
          <HeroInfo />
        </div>
        <Introduction content={portfolioData?.Intro} />
        <Skills items={portfolio.portfolio?.data?.attributes?.Skills as any} />
        <Services
          items={portfolio.portfolio?.data?.attributes?.Services as any}
        />
        <Projects
          items={portfolio.portfolio?.data?.attributes?.Projects as any}
        />
        <Banner />
        <Testimonial
          items={portfolio.portfolio?.data?.attributes?.Clients as any}
        />
        <Contact />
      </div>
    </HomeLayout>
  );
};

export default Portfolio;

export const getStaticProps: GetStaticProps = async () => {
  const portfolio = await getPortfolioPage();

  return {
    props: {
      portfolio,
    },
    revalidate: 1,
  };
};
