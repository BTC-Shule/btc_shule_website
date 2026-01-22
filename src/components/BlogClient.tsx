"use client";

import type { Blog } from "@/lib/blogs";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User } from "phosphor-react";

export default function BlogClient({ blogs }: { blogs: Blog[] }) {
  const publishedBlogs = blogs.filter((b) => b.status === "published");
  return (
    <section id="blog" className="relative bg-linear-to-b from-background to-gray-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-primary tracking-tight">
            Insights & Articles
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Stay ahead with the latest Bitcoin stories, guides, and research from the BTC Shule global community.
          </p>
          <div className="mt-6 mx-auto w-24 h-1 bg-secondary-light rounded-full"></div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {publishedBlogs.map((blog, i) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.15 }}
              className="group relative bg-white border border-gray-200 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden"
            >

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  width={600}
                  height={400}
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out"
                  priority={blog.featured}
                />
                {blog.category && (
                  <span className="absolute bottom-4 left-4 bg-secondary-light text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    {blog.category}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-primary group-hover:text-secondary-light transition-colors leading-snug">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mt-3 grow leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Meta */}
                <div className="mt-5 flex items-center justify-between text-sm text-gray-500 pt-4">
                  <div className="flex items-center gap-2">
                    <Calendar
                      size={18}
                      weight="duotone"
                      className="text-secondary-light"
                    />
                    <span>{new Date(blog.updatedAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User
                      size={18}
                      weight="duotone"
                      className="text-secondary-light"
                    />
                    <span>{blog.author}</span>
                  </div>
                </div>

                {/* Read More */}
                <div className="mt-6">
                  <Link
                    href={`/blog/${blog.id}`}
                    className="inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block bg-primary text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
