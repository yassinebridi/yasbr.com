import { databasesId, getDatabase } from '@lib';
import { Author, Feed } from 'feed';
import { BlogPostType, hostname } from '@utils';

const rssApi = async (_, res) => {
  const posts = await getAllPosts();
  const feed = buildFeed(posts);

  res.setHeader(
    'Cache-Control',
    's-maxage=86400, stale-while-revalidate=86400'
  );

  res.setHeader('content-type', 'text/xml');
  res.write(feed.rss2());
  res.end();
};

export default rssApi;

const getAllPosts = async () => {
  const postsTable = await getDatabase<BlogPostType>(databasesId.posts);
  return postsTable;
};
const buildFeed = (posts: BlogPostType[]) => {
  const feed = new Feed({
    id: hostname,
    link: hostname,
    title: 'Yassine Bridi',
    description: "Yassine Bridi's personal website",
    copyright:
      "These are mine, but you're welcome to share them, with the author's rights.",
    updated: new Date(posts[0].Date),
    author: {
      name: 'Yassine Bridi',
      link: hostname,
    },
  });

  posts.forEach((post) => {
    const authors: Author[] = [];
    post.Authors.map((author) =>
      authors.push({
        name: author.fullName,
      })
    );
    const content = `
    <div>
      <h1>${post.Title}</h1>
      <p>${post.Preview}</p>
      <a href="${hostname}/blog/${post.Slug}">See more</a>
    </div>
    `;
    feed.addItem({
      title: post.Title,
      link: `${hostname}/blog/${post.Slug}`,
      author: authors,
      image: post.Image[0].rawUrl,
      content: content,
      description: post.Preview,
      date: new Date(post.Date),
    });
  });

  return feed;
};
