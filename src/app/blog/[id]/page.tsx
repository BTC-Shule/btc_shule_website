import { notFound } from "next/navigation";
import { getPublishedBlog } from "@/lib/blogs";
import Navbar from "@/components/Navbar";
import BlogClient from "./BlogClient";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function BlogPage({ params }: Props) {
  const { id } = await params;

  const blog = getPublishedBlog(id);
  
  if (!blog) return notFound();

  return (
    <>
      <Navbar />
      <BlogClient blog={blog} />
    </>
  );
}
