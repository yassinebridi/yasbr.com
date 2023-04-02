import { createGzip } from 'zlib';
import { SitemapStream } from 'sitemap';
import { hostname } from '@utils';
import { getArticles, getPortfolioPage } from '@adapters';

const STATIC_URLS = ['/', '/about', '/portfolio', '/blog', '/newsletter'];

const sitemapApi = async (_, res: any) => {
  // ensure response is XML & gzip encoded

  res.setHeader(
    'Cache-Control',
    's-maxage=86400, stale-while-revalidate=86400'
  );
  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Content-Encoding', 'gzip');

  // makes necessary API calls to get all the dynamic
  // urls from user-gen content
  const userGenPageUrls = await getUserGeneratedPages();

  const sitemapStream = new SitemapStream({ hostname });
  const pipeline = sitemapStream.pipe(createGzip());

  // write static pages to sitemap
  STATIC_URLS.forEach((url) => {
    sitemapStream.write({ url });
  });

  // write user-generated pages to sitemap
  userGenPageUrls.forEach((url) => {
    sitemapStream.write({ url });
  });

  sitemapStream.end();

  // stream write the response
  pipeline.pipe(res).on('error', (err: any) => {
    throw err;
  });
};

export default sitemapApi;

const getUserGeneratedPages = async () => {
  const slugs: string[] = [];
  const posts = await getArticles();
  posts.articles?.data.map((post) =>
    slugs.push(`/blog/${post.attributes?.slug}`)
  );

  const portfolio = await getPortfolioPage();
  const projects = portfolio?.portfolio?.data?.attributes?.Projects;
  projects?.map((project) => slugs.push(`/project/${project?.slug}`));

  return slugs;
};
