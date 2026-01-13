import { notFound } from "next/navigation";
import { getBlog } from "@/lib/blogs";
import Navbar from "@/components/Navbar";
import BlogClient from "./BlogClient";

type Props = {
  params: { id: string };
};

export default function BlogPage({ params }: Props) {
  const blog = getBlog(params.id);

  if (!blog) return notFound();

  return (
    <>
      <Navbar />
      <BlogClient blog={blog} />
    </>
  );
}
