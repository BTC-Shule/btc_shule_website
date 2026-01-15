import { getPublishedBlogsSorted } from "@/lib/blogs";
import BlogClient from "./BlogClient";

export default async function Blog() {
  const blogs = getPublishedBlogsSorted().slice(0, 3);

  return <BlogClient blogs={blogs} />;
}
