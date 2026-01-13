// types/blog.ts
export type Blog = {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  category?: string;
  coverImage: string;
  contentHtml: string;
  createdAt: string;
  updatedAt: string;
  featured?: boolean;
};
