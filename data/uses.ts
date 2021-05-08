import { Item } from '@components';
import {
  FigmaIcon,
  GraphqlIcon,
  NestIcon,
  NextIcon,
  NgrokIcon,
  NodeIcon,
  NotionIcon,
  PostgresIcon,
  PrismaIcon,
  ReactIcon,
  SpotifyIcon,
  TailwindIcon,
  TypescriptIcon,
} from '@design-system';

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
  {
    desc: 'Figma - Interface design',
    icon: FigmaIcon,
  },
];

export const toolsItems: Item[] = [
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
