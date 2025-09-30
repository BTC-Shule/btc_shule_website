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
    id: "bitcoin-101",
    title: "Bitcoin 101: A Beginner’s Guide",
    excerpt:
      "Learn the basics of Bitcoin, how it works, and why it’s a financial revolution.",
    date: "September 5, 2025",
    author: "Chris Mwaniki",
    image:
      "https://images.unsplash.com/photo-1621504450181-61a2d57f075e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "africa-adoption",
    title: "Bitcoin Adoption in Africa",
    excerpt:
      "Explore how Bitcoin is empowering individuals and merchants across Africa.",
    date: "September 15, 2025",
    author: "Jane Doe",
    image:
      "https://images.unsplash.com/photo-1621504450883-8b1c3790fb70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "btc-security",
    title: "Securing Your Bitcoin Wallet",
    excerpt:
      "Best practices for safeguarding your Bitcoin and staying safe online.",
    date: "September 20, 2025",
    author: "David K.",
    image:
      "https://images.unsplash.com/photo-1612178992563-3a58e32e41d2?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative bg-background py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
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
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="h-full"
            >
              <Link href={`/blog/${blog.id}`} className="group block h-full">
                <div className="bg-secondary-light/10 border border-gray-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col h-full">
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary-light text-background font-semibold shadow-lg hover:scale-105 transition"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
