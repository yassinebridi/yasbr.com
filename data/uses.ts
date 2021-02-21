import { Item } from '@components/List';
import FigmaIcon from '@design-system/icons/figma';
import GraphqlIcon from '@design-system/icons/graphql';
import NestIcon from '@design-system/icons/nest';
import NextIcon from '@design-system/icons/next';
import NgrokIcon from '@design-system/icons/ngrok';
import NodeIcon from '@design-system/icons/node';
import NotionIcon from '@design-system/icons/notion';
import PostgresIcon from '@design-system/icons/postgres';
import PrismaIcon from '@design-system/icons/prisma';
import ReactIcon from '@design-system/icons/react';
import SpotifyIcon from '@design-system/icons/spotify';
import TailwindIcon from '@design-system/icons/tailwind';
import TypescriptIcon from '@design-system/icons/typescript';
import VercelIcon from '@design-system/icons/vercel';

export const webStackItems: Item[] = [
  {
    desc: 'React/React Native - UI Library',
    icon: ReactIcon,
  },
  {
    desc: 'Next.js - React Framework',
    icon: NextIcon,
  },
  {
    desc: 'Vercel - Static / Serverless Deployment & CDN',
    icon: VercelIcon,
  },
  {
    desc: 'Node.js - JavaScript Runtime',
    icon: NodeIcon,
  },
  {
    desc: 'NestJS - A progressive Node.js framework',
    icon: NestIcon,
  },
  {
    desc: 'GraphQL - A query language for your API',
    icon: GraphqlIcon,
  },
  {
    desc: 'Tailwind CSS - A utility-first CSS framework',
    icon: TailwindIcon,
  },
];

export const alsoUseItems: Item[] = [
  {
    desc: 'TypeScript - Typed Superset of JavaScript',
    icon: TypescriptIcon,
  },
  {
    desc: 'Prisma - Next-generation ORM for Node.js and TypeScript',
    icon: PrismaIcon,
  },
  {
    desc: "PostgreSQL - The world's most advanced open source database",
    icon: PostgresIcon,
  },
];

export const toolsItems: Item[] = [
  {
    desc: 'Figma - Interface design',
    icon: FigmaIcon,
  },
  {
    desc: 'Notion - Todo / Management',
    icon: NotionIcon,
  },
  {
    desc: 'Spotify - Music Streaming',
    icon: SpotifyIcon,
  },
  {
    desc: 'Ngrok - Secure Localhost Tunnel',
    icon: NgrokIcon,
  },
];
