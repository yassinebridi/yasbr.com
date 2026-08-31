import atharAlmadina1 from '@/assets/sections/projects/athar-almadina/1.png';
import atharAlmadina2 from '@/assets/sections/projects/athar-almadina/2.png';
import atharAlmadina3 from '@/assets/sections/projects/athar-almadina/3.jpg';
import beste1 from '@/assets/sections/projects/beste/1.png';
import beste2 from '@/assets/sections/projects/beste/2.png';
import beste3 from '@/assets/sections/projects/beste/3.png';
import beste4 from '@/assets/sections/projects/beste/4.png';
import beste5 from '@/assets/sections/projects/beste/5.png';
import bestenu1 from '@/assets/sections/projects/bestenu/1.png';
import bestenu2 from '@/assets/sections/projects/bestenu/2.png';
import bestenu3 from '@/assets/sections/projects/bestenu/3.png';
import coinsolde1 from '@/assets/sections/projects/coinsolde/1.png';
import coinsolde2 from '@/assets/sections/projects/coinsolde/2.jpg';
import coinsolde3 from '@/assets/sections/projects/coinsolde/3.jpg';
import fasteach1 from '@/assets/sections/projects/fasteach/1.png';
import fasteach2 from '@/assets/sections/projects/fasteach/2.png';
import fasteach3 from '@/assets/sections/projects/fasteach/3.png';
import fasteach4 from '@/assets/sections/projects/fasteach/4.png';
import fasteach5 from '@/assets/sections/projects/fasteach/5.png';
import findify1 from '@/assets/sections/projects/findify/1.png';
import gokoura1 from '@/assets/sections/projects/gokoura/1.jpg';
import gokoura2 from '@/assets/sections/projects/gokoura/2.jpg';
import gokoura3 from '@/assets/sections/projects/gokoura/3.jpg';
import koca1 from '@/assets/sections/projects/koca/1.jpg';
import motawasit1 from '@/assets/sections/projects/motawasit/1.png';
import myPrivacy1 from '@/assets/sections/projects/my-privacy/1.png';
import nextDirection1 from '@/assets/sections/projects/next-direction/1.gif';
import ogImageGenerator1 from '@/assets/sections/projects/og/1.jpg';
import serpl1 from '@/assets/sections/projects/serpl/1.png';
import shahine1 from '@/assets/sections/projects/shahine/1.png';
import tailwindDirection1 from '@/assets/sections/projects/tailwind-direction/1.gif';
import tamin1 from '@/assets/sections/projects/tamin/1.png';
import tmuxPurpura1 from '@/assets/sections/projects/tmux-purpura/1.jpg';
import urlShortener1 from '@/assets/sections/projects/url-shortener/1.jpg';
import vimPurpura1 from '@/assets/sections/projects/vim-purpura/1.jpg';
import yallaclass1 from '@/assets/sections/projects/yallaclass/1.png';
import yallaclass2 from '@/assets/sections/projects/yallaclass/2.png';
import yallaclass3 from '@/assets/sections/projects/yallaclass/3.png';
import yallaclass4 from '@/assets/sections/projects/yallaclass/4.png';
import youtubeshuffle1 from '@/assets/sections/projects/youtubeshuffle/1.png';
import type { StaticImageData } from 'next/image';
import type { Project, ProjectImage } from '@/data/types';

const toImages = (name: string, sources: StaticImageData[]): ProjectImage[] =>
  sources.map((src, index) => ({
    src,
    alt: `${name} screenshot ${index + 1}`,
  }));

type ProjectDraft = Omit<Project, 'content'>;

const toContent = (project: ProjectDraft): string => {
  const sections: string[] = [project.description];

  if (project.partsDeveloped?.length) {
    sections.push(
      `### Parts developed\n\n${project.partsDeveloped
        .map((part) => `- ${part}`)
        .join('\n')}`
    );
  }

  if (project.tech?.length) {
    sections.push(
      `### Tech stack\n\n${project.tech.map((tech) => `- ${tech}`).join('\n')}`
    );
  }

  if (project.features?.length) {
    sections.push(
      `### Features\n\n${project.features
        .map((feature) => `- ${feature}`)
        .join('\n')}`
    );
  }

  return sections.join('\n\n');
};

const draftProjects: ProjectDraft[] = [
  {
    name: 'Serpl',
    slug: 'serpl',
    type: 'os',
    description: 'A simple terminal UI for search and replace, ala VS Code.',
    shortUrl: 'https://github.com/yassinebridi/serpl',
    images: toImages('Serpl', [serpl1]),
  },
  {
    name: 'Beste',
    slug: 'beste',
    type: 'client',
    description:
      'On Beste.xyz you start your intergalactic journey to the right product. We facilitate your search for purchasing a new product.',
    shortUrl: 'https://go.yasbr.com/beste',
    images: toImages('Beste', [beste1, beste2, beste3, beste4, beste5]),
    partsDeveloped: ['Backend', 'Frontend'],
    tech: ['Strapi', 'AWS S3', 'TailwindCSS', 'Next.js'],
  },
  {
    name: 'Fasteach',
    slug: 'fasteach',
    type: 'client',
    description:
      'Fasteach is a platform that allows all students to benefit from teachers from different fields to correct and explain their homework.',
    shortUrl: 'https://fasteach.fr',
    images: toImages('Fasteach', [
      fasteach1,
      fasteach2,
      fasteach3,
      fasteach4,
      fasteach5,
    ]),
    partsDeveloped: ['Frontend', 'Backend', 'Internal Tools'],
    tech: [
      'React/Next.js/Typescript',
      'Redux Toolkit',
      'TailwindCSS',
      'NestJS',
      'Stripe',
      'Twilio',
      'Pusher',
      'OneSignal',
    ],
  },
  {
    name: 'Bestenu',
    slug: 'bestenu',
    type: 'client',
    description:
      'Bestenu is the consumer site in the Netherlands. Their mission is to support consumers in the best possible way when purchasing a product.',
    shortUrl: 'https://bestenu.nl',
    images: toImages('Bestenu', [bestenu1, bestenu2, bestenu3]),
    partsDeveloped: ['Frontend', 'Articles Dashboard'],
    tech: [
      'React/Next.js',
      'Strapi',
      'React Query',
      'Typescript',
      'Tailwindcss',
      'Figma',
    ],
  },
  {
    name: 'Yallaclass',
    slug: 'yallaclass',
    type: 'client',
    description:
      'Yallaclass is the easiest way to find a good fitness instructor to have home training our private session at the gym.',
    shortUrl: 'https://yallaclass.com',
    images: toImages('Yallaclass', [
      yallaclass1,
      yallaclass2,
      yallaclass3,
      yallaclass4,
    ]),
    partsDeveloped: ['Dashboard'],
    tech: ['React/Vite', 'React Query', 'Typescript', 'Tailwindcss', 'Figma'],
  },
  {
    name: 'Coinsolde',
    slug: 'coinsolde',
    type: 'client',
    description:
      'Flyers and catalogs from your favorite local stores, all for free on your smartphone.',
    shortUrl: 'https://coinsolde.ma',
    images: toImages('Coinsolde', [coinsolde1, coinsolde2, coinsolde3]),
    partsDeveloped: ['Design', 'Frontend'],
    tech: [
      'React/Next.js',
      'React Query',
      'Typescript',
      'Tailwindcss/ChakraUI',
      'Figma',
    ],
  },
  {
    name: 'Athar Almadina',
    slug: 'athar-almadina',
    type: 'client',
    description:
      'A service that helps guides and tourists to find each other in any part of the world.',
    shortUrl: 'https://maaliim.com',
    images: toImages('Athar Almadina', [
      atharAlmadina1,
      atharAlmadina2,
      atharAlmadina3,
    ]),
    partsDeveloped: [
      'Design',
      'Backend',
      'Dashboard',
      'Frontend',
      'Android Application',
    ],
    tech: [
      'NestJS/Express',
      'GraphQL',
      'Typescript',
      'Prisma/PostgreSQL',
      'Redis',
      'Twilio',
      'ReactJS/Vite',
      'Apollo Client',
      'ChakraUI',
      'Formik',
      'Framer Motion',
      'React/Next.js',
      'React Query',
      'Tailwindcss',
      'Next Translate',
    ],
  },
  {
    name: 'Motawasit',
    slug: 'motawasit',
    type: 'client',
    description: 'A local news website.',
    shortUrl: 'https://gonews.netlify.com',
    images: toImages('Motawasit', [motawasit1]),
    partsDeveloped: ['Design', 'Frontend'],
    tech: [
      'Gatsby',
      'MDX',
      'Algolia Search',
      'Apollo Boost',
      'Auth0',
      'Mailchimp',
      'Styled Components',
      'Figma',
    ],
  },
  {
    name: 'Gokoura',
    slug: 'gokoura',
    type: 'client',
    description: 'A news and streaming website for football/soccer.',
    images: toImages('Gokoura', [gokoura1, gokoura2, gokoura3]),
    partsDeveloped: [
      'Design',
      'Backend',
      'Dashboard',
      'Frontend',
      'RTMP Server',
    ],
    tech: [
      'NestJS/Express',
      'GraphQL',
      'Typescript',
      'Prisma/PostgreSQL',
      'Redis',
      'ReactJS/Vite',
      'Apollo Client',
      'ChakraUI',
      'Formik',
      'React/Next.js',
      'URQL/Websockets',
      'Tailwindcss',
      'Figma',
      'Node media server',
      'DigitalOcean',
    ],
  },
  {
    name: 'Koca',
    slug: 'koca',
    type: 'client',
    description: 'A clean and modern furniture eCommerce website.',
    shortUrl:
      'https://www.behance.net/gallery/94519471/Koca-a-clean-and-modern-furniture-ecommerce-website',
    images: toImages('Koca', [koca1]),
    partsDeveloped: ['Design'],
    tech: ['Figma'],
  },
  {
    name: 'My Privacy',
    slug: 'my-privacy',
    type: 'client',
    description: 'A virtual company that sells AI powered smart locks.',
    shortUrl: 'https://myprivacy.vercel.app',
    images: toImages('My Privacy', [myPrivacy1]),
    partsDeveloped: ['Design', 'Frontend'],
    tech: ['Gatsby', 'Mailchimp', 'ChakraUI/Styled Components', 'Figma'],
  },
  {
    name: 'Shahine',
    slug: 'shahine',
    type: 'client',
    description:
      "Shahine is an exclusive online boutique specializing in women's apparel, offering a unique range of clothing from stylish burkinis to cozy pajamas and soft slippers.",
    shortUrl: 'https://shahine.ma',
    images: toImages('Shahine', [shahine1]),
    partsDeveloped: ['Backend', 'Frontend'],
    tech: ['Cloudflare Workers', 'Shopify'],
  },
  {
    name: 'Tamin',
    slug: 'tamin',
    type: 'client',
    description:
      'Tamin is a customer-to-customer platform specializing in the sale of antiques.',
    images: toImages('Tamin', [tamin1]),
    partsDeveloped: ['Frontend', 'Backend'],
    tech: [
      'Next.js',
      'TailwindCSS',
      'Shadcn UI',
      'Redux Toolkit',
      'TRPC',
      'Prisma',
      'PostgreSQL',
      'NextAuth',
      'S3',
      'PostHog',
      'Mailgun',
      'Docker',
    ],
  },
  {
    name: 'YoutubeShuffle',
    slug: 'youtubeshuffle',
    type: 'client',
    description:
      'YouTubeShuffle is the ultimate tool for shaking up your YouTube viewing experience.',
    shortUrl: 'https://youtubeshuffle.com',
    images: toImages('YoutubeShuffle', [youtubeshuffle1]),
    partsDeveloped: ['Frontend', 'Backend'],
    tech: ['Next.js', 'TailwindCSS', 'Shadcn UI', 'Zustand', 'ytdl'],
  },
  {
    name: 'Findify',
    slug: 'findify',
    type: 'client',
    description:
      'Findify is an advanced bookmarking tool that leverages AI to organize and streamline your digital content.',
    images: toImages('Findify', [findify1]),
    partsDeveloped: ['Frontend', 'Backend', 'DevOps', 'AI Integration'],
    tech: [
      'Next.js',
      'TailwindCSS',
      'Headless UI',
      'Redux Toolkit',
      'TRPC',
      'Prisma/PostgreSQL',
      'OpenAI',
      'AWS Rekognition',
      'Puppeteer',
      'AWS S3',
      'FFMPEG',
      'NextAuth',
      'Quirrel',
    ],
  },
  {
    name: 'Tailwind Direction',
    slug: 'tailwind-direction',
    type: 'os',
    description: 'Tailwind bi-directionality plugin.',
    shortUrl: 'https://github.com/yassinebridi/tailwind-direction',
    images: toImages('Tailwind Direction', [tailwindDirection1]),
    tech: ['TailwindCSS', 'JavaScript'],
  },
  {
    name: 'Next Direction',
    slug: 'next-direction',
    type: 'os',
    description: 'Next.js bi-directionality package.',
    shortUrl: 'https://github.com/yassinebridi/next-direction',
    images: toImages('Next Direction', [nextDirection1]),
    features: [
      'No flash on load (SSR/SSG)',
      'Sync direction across tabs',
      'Disable flashing',
      'Force pages to specific direction',
    ],
  },
  {
    name: 'Vim Purpura',
    slug: 'vim-purpura',
    type: 'os',
    description: 'A bold purple colorscheme for vim.',
    shortUrl: 'https://github.com/yassinebridi/vim-purpura',
    images: toImages('Vim Purpura', [vimPurpura1]),
  },
  {
    name: 'Tmux Purpura',
    slug: 'tmux-purpura',
    type: 'os',
    description: 'A minimal purple theme for tmux.',
    shortUrl: 'https://github.com/yassinebridi/tmux-purpura',
    images: toImages('Tmux Purpura', [tmuxPurpura1]),
  },
  {
    name: 'Social image generator',
    slug: 'og-image-generator',
    type: 'os',
    description:
      'Social OG image generator for my website and my side projects.',
    shortUrl: 'https://og.yasbr.com',
    images: toImages('Social image generator', [ogImageGenerator1]),
    partsDeveloped: ['Design', 'Frontend'],
    tech: [
      'Next.js/Next.js Routes',
      'React Hook Form',
      'Typescript',
      'Preact',
      'TailwindCSS',
      'Figma',
    ],
  },
  {
    name: 'URL Shortener',
    slug: 'url-shortener',
    type: 'os',
    description: 'URL Shortener for my portfolio and my side projects.',
    shortUrl: 'https://go.yasbr.com',
    images: toImages('URL Shortener', [urlShortener1]),
    partsDeveloped: ['Design', 'Backend', 'Frontend'],
    tech: [
      'Cloudflare Workers',
      'Cloudflare KV',
      'HTML',
      'TailwindCSS',
      'Figma',
    ],
  },
];

export const projects: Project[] = draftProjects.map((project) => ({
  ...project,
  content: toContent(project),
}));
