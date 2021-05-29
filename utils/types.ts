export type BlogPostType = {
  id: string;
  Title: string;
  Image: ImageType;
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

export type SkillType = {
  id: string;
  Title: string;
  Icon: ImageType[];
};

export type ServiceType = {
  id: string;
  Title: string;
  Desc: string;
  Icon: ImageType[];
};

export type ProjectType = {
  id: string;
  Name: string;
  Slug: string;
  Desc: string;
  Url: string;
  Type: string;
  Kind: string[];
  Image: ImageType[];
};

export type TestimType = {
  id: string;
  Name: string;
  Text: string;
  Role: string;
  Avatar: ImageType[];
};

export type CreateContactData = {
  Name: string;
  Email: string;
  Company: string;
  Content: string;
  Deadline: string;
  Brief: string;
};
