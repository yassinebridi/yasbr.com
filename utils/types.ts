export type BlogPostType = {
  id: string;
  Title: string;
  Type: string;
  Tags: string[];
  TagsField: TagType[] | null;
  Preview: string;
  Views: number;
  Slug: string;
  Published: boolean;
  Date: Date;
  Authors: Author[];
};

export type Author = {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  profilePhoto: string;
};

export type TagType = {
  id: string;
  Name: string;
  Slug: string;
  Posts: string[];
  PostsField: BlogPostType[] | null;
};

export type ImageType = {
  name: string;
  url: string;
  rawUrl: string;
};

export type SkillsType = {
  id: string;
  Title: string;
  Icon: ImageType[];
};

export type ServicesType = {
  id: string;
  Title: string;
  Desc: string;
  Icon: ImageType[];
};

export type ProjectsType = {
  id: string;
  Name: string;
  Slug: string;
  Desc: string;
  Url: string;
  Type: string;
  Image: ImageType[];
};

export type TestimsType = {
  id: string;
  Name: string;
  Text: string;
  Role: string;
  Avatar: ImageType[];
};
