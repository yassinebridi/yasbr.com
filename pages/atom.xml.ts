import { GetServerSideProps } from 'next';
import { Author, Feed } from 'feed';
import { getDatabase, databasesId } from '@lib';
import { BlogPostType } from '@utils';

const getAllPosts = async () => {
  const postsTable = await getDatabase<BlogPostType>(databasesId.posts);
  return postsTable;
};

const hostUrl = 'https://yasbr.com';

const buildFeed = (posts: BlogPostType[]) => {
  const feed = new Feed({
    id: hostUrl,
    link: hostUrl,
    title: 'Yassine Bridi',
    description: "Yassine Bridi's personal website",
    copyright:
      "These are mine, but you're welcome to share them, with the author's right",
    updated: new Date(posts[0].Date),
    author: {
      name: 'Yassine Bridi',
      link: hostUrl,
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
      <a href="${hostUrl}/blog/${post.Slug}">See more</a>
    </div>
    `;
    feed.addItem({
      title: post.Title,
      link: `${hostUrl}/blog/${post.Slug}`,
      author: authors,
      image: post.Image.rawUrl,
      content: content,
      description: post.Preview,
      date: new Date(post.Date),
    });
  });

  return feed;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context && context.res) {
    const { res } = context;

    const posts = await getAllPosts();

    const feed = buildFeed(posts);
    res.setHeader(
      'Cache-Control',
      's-maxage=86400, stale-while-revalidate=86400'
    );
    res.setHeader('content-type', 'text/xml');
    res.write(feed.atom1());
    res.end();
  }

  return {
    props: {},
  };
};

const RssPage = () => null;

export default RssPage;
