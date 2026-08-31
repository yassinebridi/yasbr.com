import type { StaticImageData } from 'next/image';

export type ProjectType = 'client' | 'os';

export interface ProjectImage {
  src: StaticImageData;
  alt: string;
}

export interface Project {
  name: string;
  slug: string;
  type: ProjectType;
  description: string;
  shortUrl?: string;
  images: ProjectImage[];
  partsDeveloped?: string[];
  tech?: string[];
  features?: string[];
  content: string;
}

export interface Skill {
  id: string;
  title: string;
  image: StaticImageData;
}

export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: StaticImageData;
}

export interface PortfolioIntro {
  greeting: string;
  bio: string[];
  focusAreas: string[];
  coreValues: string[];
}

export interface PortfolioContent {
  intro: PortfolioIntro;
  services: Service[];
  skills: Skill[];
  testimonials: Testimonial[];
}

export interface HomeContent {
  title: string;
  description: string;
  heading: string;
  subheading: string;
  bio: string[];
  image: StaticImageData;
}

export interface BlogPost {
  title: string;
  slug: string;
  description: string;
  views: number;
  featured: boolean;
  cover: StaticImageData;
  publishedAt: string;
  content: string;
}

export interface UsesItem {
  label: string;
  url?: string;
}

export interface UsesCategory {
  title: string;
  items: UsesItem[];
}

export interface UsesContent {
  title: string;
  description: string;
  categories: UsesCategory[];
}
