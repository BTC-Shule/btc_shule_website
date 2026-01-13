import { getBlogs } from "@/lib/blogs";
import BlogClient from "./BlogClient";

export default async function Blog() {
  const blogs = getBlogs().slice(0, 3);

  return <BlogClient blogs={blogs} />;
}
