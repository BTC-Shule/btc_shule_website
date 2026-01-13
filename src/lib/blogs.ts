import fs from "fs";
import path from "path";
import crypto from "crypto";

const BLOGS_PATH = path.join(process.cwd(), "data/blogs.json");

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

function readBlogs(): Blog[] {
  if (!fs.existsSync(BLOGS_PATH)) return [];
  return JSON.parse(fs.readFileSync(BLOGS_PATH, "utf-8"));
}

function writeBlogs(blogs: Blog[]) {
  fs.mkdirSync(path.dirname(BLOGS_PATH), { recursive: true });
  fs.writeFileSync(BLOGS_PATH, JSON.stringify(blogs, null, 2));
}

export function getBlogs() {
  return readBlogs();
}

export function getBlog(id: string) {
  return readBlogs().find((b) => b.id === id);
}

export function createBlog(data: Omit<Blog, "id" | "createdAt" | "updatedAt">) {
  const blogs = readBlogs();
  const now = new Date().toISOString();

  const blog: Blog = {
    id: crypto.randomUUID(),
    createdAt: now,
    updatedAt: now,
    ...data,
  };

  blogs.unshift(blog);
  writeBlogs(blogs);
  return blog;
}

export function updateBlog(id: string, data: Partial<Blog>) {
  const blogs = readBlogs();
  const index = blogs.findIndex((b) => b.id === id);
  if (index === -1) return null;

  blogs[index] = {
    ...blogs[index],
    ...data,
    updatedAt: new Date().toISOString(),
  };

  writeBlogs(blogs);
  return blogs[index];
}

export function deleteBlog(id: string) {
  const blogs = readBlogs().filter((b) => b.id !== id);
  writeBlogs(blogs);
}
