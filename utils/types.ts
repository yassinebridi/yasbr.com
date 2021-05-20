export type Page = {
  id: string;
  Title: string;
  Type: string;
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
