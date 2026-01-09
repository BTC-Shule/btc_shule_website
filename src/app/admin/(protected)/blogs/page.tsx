// app/admin/blogs/page.tsx
"use client";

import Link from "next/link";
import BlogTable from "@/components/admin/BlogTable";

export default function AdminBlogs() {
  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-primary">Blogs</h1>
        <Link
          href="/admin/blogs/new"
          className="bg-primary text-white px-6 py-3 rounded-xl font-semibold"
        >
          + New Blog
        </Link>
      </div>

      <BlogTable />
    </>
  );
}
