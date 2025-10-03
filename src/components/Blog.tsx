"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User } from "phosphor-react";

type Blog = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
};

const blogs: Blog[] = [
  {
    id: "circular-economy",
    title: "Exploring Kenya’s Bitcoin Circular Economies",
    excerpt:
      "From Nairobi to Kiambu, discover how Bitcoin is transforming communities.",
    date: "August 2025",
    author: "Belyi Nobel Kubwayo",
    image: "/blogheader.jpg",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-primary">
            Insights & Articles
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Stay up-to-date with the latest stories, guides, and insights from
            the BTC Shule community.
          </p>
          <div className="mt-4 mx-auto w-24 h-1 bg-secondary-light rounded-full"></div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.2 }}
              className="h-full"
            >
              <Link href={`/blog/${blog.id}`} className="group block h-full">
                <div className="bg-secondary-light/10 border border-gray-300 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                  {/* Image */}
                  <div className="h-48 overflow-hidden">
                    <Image
                      width={400}
                      height={300}
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-primary group-hover:text-secondary-light transition">
                      {blog.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-2 line-clamp-3 flex-grow">
                      {blog.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-gray-400 mt-4">
                      <div className="flex items-center gap-2">
                        <Calendar
                          size={16}
                          weight="duotone"
                          className="text-secondary-light"
                        />
                        {blog.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <User
                          size={16}
                          weight="duotone"
                          className="text-secondary-light"
                        />
                        {blog.author}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-block bg-secondary-light text-white px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:opacity-90 transition-all font-semibold"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
