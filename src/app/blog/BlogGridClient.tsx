"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User } from "phosphor-react";
import { Blog } from "@/lib/blogs";

export default function BlogGridClient({ blogs }: { blogs: Blog[] }) {
  const publishedBlogs = blogs.filter((b) => b.status === "published");

  const featured = publishedBlogs.find((b) => b.featured);
  const rest = publishedBlogs.filter((b) => !b.featured);

  return (
    <>
      {/* Hero Header */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-5xl md:text-6xl font-extrabold text-primary"
          >
            BTC Shule Blog
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Bitcoin adoption stories, research, and insights from around the world.
          </motion.p>

          <div className="mt-6 mx-auto w-28 h-1 bg-secondary-light rounded-full" />
        </div>
      </section>

      {/* ================= FEATURED BLOG ================= */}
      {featured && (
        <section className="relative pb-20">
          <div className="max-w-5xl mx-auto px-4">
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-10 bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-80 lg:h-full">
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  unoptimized
                  className="object-cover"
                  priority
                />
              </div>

              {/* Content */}
              <div className="p-10 flex flex-col justify-center">
                <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-primary">
                  {featured.title}
                </h2>

                <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                  {featured.excerpt}
                </p>

                {/* Meta */}
                <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <Calendar size={18} className="text-secondary-light" />
                    {new Date(featured.updatedAt).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-2">
                    <User size={18} className="text-secondary-light" />
                    {featured.author}
                  </span>
                </div>

                <Link
                  href={`/blog/${featured.id}`}
                  className="mt-8 inline-flex w-fit items-center px-8 py-3 text-sm font-semibold text-white bg-primary rounded-full hover:bg-secondary-light transition"
                >
                  Read Story →
                </Link>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* ================= BLOG GRID ================= */}
      <section className="relative py-10">
        <div className="max-w-7xl mx-auto px-4 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((blog, i) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white border rounded-3xl shadow hover:shadow-xl overflow-hidden"
            >
              <div className="relative h-56">
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6 flex flex-col">
                <h3 className="text-xl font-semibold text-primary group-hover:text-secondary-light">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mt-2 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="mt-4 flex justify-between text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {new Date(blog.updatedAt).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={16} />
                    {blog.author}
                  </span>
                </div>

                <Link
                  href={`/blog/${blog.id}`}
                  className="mt-5 text-primary font-semibold"
                >
                  Read More →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
