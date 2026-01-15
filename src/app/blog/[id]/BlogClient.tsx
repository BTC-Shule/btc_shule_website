"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import type { Blog } from "@/lib/blogs";

export default function BlogClient({ blog }: { blog: Blog }) {
  return (
    <>
      <Navbar />
      <main className="pt-[72px] md:pt-[136px]">
        <article className="relative bg-background py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
                {blog.title}
              </h1>
              <p className="mt-4 text-gray-400 italic">
                By <span className="text-secondary-light">{blog.author}</span> ·{" "}
                {new Date(blog.updatedAt).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </motion.div>

            {/* Cover Image */}
            <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-3xl mb-12">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Blog Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="prose prose-invert prose-lg text-gray-600 text-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
            ></motion.div>
          </div>
        </article>
      </main>
    </>
  );
}
