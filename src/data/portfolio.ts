import awsIcon from '@/assets/sections/skills/aws.svg';
import cloudflareIcon from '@/assets/sections/skills/cloudflare.svg';
import figmaIcon from '@/assets/sections/skills/figma.svg';
import gopherIcon from '@/assets/sections/skills/gopher.svg';
import graphqlIcon from '@/assets/sections/skills/graphql.svg';
import nestjsIcon from '@/assets/sections/skills/nestjs.svg';
import nextjsIcon from '@/assets/sections/skills/nextjs.svg';
import nodejsIcon from '@/assets/sections/skills/nodejs.svg';
import postgresqlIcon from '@/assets/sections/skills/postgresql.svg';
import prismaIcon from '@/assets/sections/skills/prisma.svg';
import reactIcon from '@/assets/sections/skills/react.svg';
import strapiIcon from '@/assets/sections/skills/strapi.svg';
import tailwindIcon from '@/assets/sections/skills/tailwind.svg';
import typescriptIcon from '@/assets/sections/skills/typescript.svg';
import omarIbnoussinaAvatar from '@/assets/sections/testimonials/omar_ibnoussina.jpg';
import oussamaMlahfiAvatar from '@/assets/sections/testimonials/oussama_mlahfi.jpg';
import type { PortfolioContent, Service, Skill, Testimonial } from '@/data/types';

export const skills: Skill[] = [
  { id: 'react', title: 'React/React Native', image: reactIcon },
  { id: 'graphql', title: 'GraphQL', image: graphqlIcon },
  { id: 'nextjs', title: 'Next.js', image: nextjsIcon },
  { id: 'golang', title: 'Golang', image: gopherIcon },
  { id: 'strapi', title: 'Strapi', image: strapiIcon },
  { id: 'typescript', title: 'TypeScript', image: typescriptIcon },
  { id: 'nestjs', title: 'NestJS', image: nestjsIcon },
  { id: 'tailwind', title: 'Tailwind CSS', image: tailwindIcon },
  { id: 'nodejs', title: 'Node.js', image: nodejsIcon },
  { id: 'postgresql', title: 'PostgreSQL', image: postgresqlIcon },
  { id: 'aws', title: 'AWS', image: awsIcon },
  { id: 'cloudflare', title: 'Cloudflare', image: cloudflareIcon },
  { id: 'prisma', title: 'Prisma', image: prismaIcon },
  { id: 'figma', title: 'Figma', image: figmaIcon },
];

export const services: Service[] = [
  {
    id: 'full-stack-development',
    title: 'Full Stack Development',
    description:
      'I can help you converting your idea into a reality, using modern but well-tested technologies.',
  },
  {
    id: 'ux-ui-design',
    title: 'UX/UI Design',
    description:
      'Good-looking but pragmatic user interfaces, with an emphasis on user experience.',
  },
  {
    id: 'seo-strategy',
    title: 'SEO Strategy',
    description:
      'Keyword research to identify top opportunities and integrate targeted tactics into your product.',
  },
  {
    id: 'maintenance-tweaking',
    title: 'Maintenance & Tweaking',
    description:
      "Filling your recent developers' shoes, by fixing bugs, and adding new functionality.",
  },
  {
    id: 'performance-optimizations',
    title: 'Performance Optimizations',
    description:
      'Analyzing the performance of your applications and identifying ways to improve them.',
  },
  {
    id: 'automation',
    title: 'Automation',
    description:
      'Automate tedious tasks in your project, to help you focus on growing your business.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'omar-ibnoussina',
    name: 'Omar Ibnoussina',
    role: 'Client',
    quote:
      'Yassine is one of the most skilled developers I know, striking the right balance between being pragmatic and delivering high-quality code. This helped us to move forward quickly with our products',
    avatar: omarIbnoussinaAvatar,
  },
  {
    id: 'oussama-mlahfi',
    name: 'Oussama Mlahfi',
    role: 'Client',
    quote:
      "Yassine is an absolute pleasure to work with. Not only is he one of the most skilled developers I've ever collaborated with, but he's one of the nicest people too",
    avatar: oussamaMlahfiAvatar,
  },
];

export const portfolioContent: PortfolioContent = {
  intro: {
    greeting: "Hey, I'm Yassine Bridi 👋",
    bio: [
      'I’m a developer who also designs, with a keen interest in web and mobile technology.',
      'I enjoy sharing my knowledge and helping others adopt the technologies I’m passionate about. I do this by blogging about my work and developing open-source projects.',
    ],
    focusAreas: [
      '🎛️ Designing user interfaces with a strong focus on user experience',
      '🌐 Developing full-stack websites that scale',
    ],
    coreValues: [
      '⏱️ Efficiency',
      '🎯 Consistency',
      '♻️ Reusability',
      '⚙️ Scalability',
      '🤖 Automation',
      '💠 Modular Design',
    ],
  },
  services,
  skills,
  testimonials,
};
