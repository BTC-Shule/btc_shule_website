import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPublishedBlogsSorted } from "@/lib/blogs";
import BlogGridClient from "./BlogGridClient";

export default async function Blogs() {
  const blogs = getPublishedBlogsSorted();

  return (
    <>
      <Navbar />
      <main className="pt-[72px] md:pt-[136px] bg-linear-to-b from-background to-gray-50">
        <BlogGridClient blogs={blogs} />
      </main>
      <Footer />
    </>
  );
}
