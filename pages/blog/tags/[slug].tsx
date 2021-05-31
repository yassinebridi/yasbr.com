import { HomeLayout } from '@layouts';
import { databasesId, getDatabase, getPageBySlug } from '@lib';
import { BlogPostType, TagType } from '@utils';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { BlogPostCard } from '..';

export interface TagsProps {
  tag: TagType;
  posts: BlogPostType[];
}
const Tags: React.FC<TagsProps> = ({ posts, tag }) => {
  return (
    <HomeLayout>
      <div className="max-w-xl py-3 mx-auto">
        <h2 className="text-3xl font-bold text-center">#{tag.Name} Posts</h2>
        {/* <span className="text-gray-600">{posts.length} posts</span> */}
        <div className="px-4 mt-8">
          {posts.map((post) => (
            <BlogPostCard post={post} />
          ))}
        </div>
      </div>
    </HomeLayout>
  );
};

export default Tags;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;
  const tag = await getPageBySlug<TagType>(databasesId.tags, slug as string);
  const tagsTable = await getDatabase<TagType>(databasesId.tags);
  const postsTable = await getDatabase<BlogPostType>(databasesId.posts);
  const posts = postsTable
    .filter((post) => post.Published === true)
    .filter((post) => post.Tags.includes(tag.id))
    .map((post) => {
      const tagsIds = post.Tags;
      const tags = tagsTable.filter((tag) => tagsIds.includes(tag.id));
      post.TagsField = tags;
      return post;
    });

  return {
    props: {
      tag,
      posts,
    },
    revalidate: 1,
  };
};
