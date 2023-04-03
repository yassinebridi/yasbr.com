import { getPortfolioPage } from '@adapters';
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
import { hostname } from '@utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My portfolio',
  alternates: {
    canonical: `${hostname}/portfolio`,
  },
};
export default async function PortfolioPage() {
  const { portfolio } = await getData();
  const portfolioData = portfolio.portfolio?.data?.attributes;
  return (
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
  );
}

async function getData() {
  const portfolio = await getPortfolioPage();

  return {
    portfolio,
  };
}
