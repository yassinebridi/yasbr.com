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
import { portfolioContent, projects } from '@/data';
import { hostname } from '@utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My portfolio',
  alternates: {
    canonical: `${hostname}/portfolio`,
  },
};
export default function PortfolioPage() {
  return (
    <div className="">
      <div className="relative">
        <Hero />
        <HeroInfo />
      </div>
      <Introduction intro={portfolioContent.intro} />
      <Skills items={portfolioContent.skills} />
      <Services items={portfolioContent.services} />
      <Projects items={projects} />
      <Banner />
      <Testimonial items={portfolioContent.testimonials} />
      <Contact />
    </div>
  );
}
